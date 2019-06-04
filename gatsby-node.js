/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const { resolve } = require('path');
const { createFilePath } = require('gatsby-source-filesystem');

exports.createPages = async ({
    graphql,
    actions: { createPage, createRedirect },
}) => {
    createRedirect({
        fromPath: '/',
        toPath: '/home',
        isPermanent: true,
    });

    const result = await graphql(`
        {
            allFile(filter: { sourceInstanceName: { eq: "pages" } }) {
                edges {
                    node {
                        id
                        name
                        sourceInstanceName
                        relativeDirectory
                        childMarkdownRemark {
                            fields {
                                slug
                            }
                            frontmatter {
                                title
                                order
                            }
                        }
                    }
                }
            }
        }
    `);

    if (result.errors) {
        throw result.errors;
    }

    const components = result.data.allFile.edges.filter(
        component => component.node.childMarkdownRemark
    );

    components.forEach(component => {
        const slug = component.node.childMarkdownRemark.fields.slug;
        const order = component.node.childMarkdownRemark.frontmatter.order;

        const parent = components.find(component => {
            return (
                component.node.childMarkdownRemark.fields.slug ===
                slug
                    .split('/')
                    .slice(0, -2)
                    .join('/') +
                    '/'
            );
        });

        const children = components
            .filter(component => {
                const parentPath = slug.split('/').filter(Boolean);

                const childPath = component.node.childMarkdownRemark.fields.slug
                    .split('/')
                    .filter(Boolean);

                if (parentPath.length !== childPath.length - 1) {
                    return false;
                }

                return (
                    parentPath.join('/') === childPath.slice(0, -1).join('/')
                );
            })
            .map(child => child.node.id);

        createPage({
            path: slug,
            component: resolve('./src/templates/PageComponent.js'),
            context: {
                slug,
                id: component.node.id,
                parent: parent ? parent.node.id : null,
                children: children || [],
                title:
                    component.node.childMarkdownRemark.frontmatter.title ||
                    slug,
                order: typeof order !== undefined ? Number(order) : 1000,
            },
        });
    });
};

exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions;

    if (node.internal.type === 'MarkdownRemark') {
        createNodeField({
            node,
            name: 'slug',
            value: createFilePath({ node, getNode }),
        });
    }
};
