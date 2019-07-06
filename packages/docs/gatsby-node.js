const { resolve } = require('path');
const { createFilePath } = require('gatsby-source-filesystem');

/**
 * Fetches the parent page, if any. This is used for generating
 * a nested navigation.
 * @param {string} slug The slug of the current page.
 * @param {Object[]} pages An array of page nodes.
 * @return {Node | null}
 */
const getParentPage = (slug, pages) =>
    pages.find(page => {
        return (
            page.node.fields.slug ===
            slug
                .split('/')
                .slice(0, -2)
                .join('/') +
                '/'
        );
    });

exports.onCreateNode = ({ node, actions, getNode }) => {
    const { createNodeField } = actions;

    if (node.internal.type === 'Mdx') {
        createNodeField({
            node,
            name: 'slug',
            value: createFilePath({ node, getNode }),
        });
    }
};

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;

    try {
        const results = await graphql(`
            query {
                allMdx(sort: { order: ASC, fields: [frontmatter___order] }) {
                    edges {
                        node {
                            id
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
        `);

        const pages = results.data.allMdx.edges;

        pages.forEach(page => {
            const slug = page.node.fields.slug;
            const order = page.node.frontmatter.order;
            const parent = getParentPage(slug, pages);

            const children = pages
                .filter(page => {
                    const parentPath = slug.split('/').filter(Boolean);

                    const childPath = page.node.fields.slug.split('/').filter(Boolean);

                    if (parentPath.length !== childPath.length - 1) {
                        return false;
                    }

                    return parentPath.join('/') === childPath.slice(0, -1).join('/');
                })
                .map(child => child.node.id);

            createPage({
                path: slug,
                component: resolve('./src/templates/PageComponent.js'),
                context: {
                    slug,
                    id: page.node.id,
                    parent: parent ? parent.node.id : null,
                    children: children || [],
                    title: page.node.frontmatter.title || slug,
                    order: typeof order !== undefined ? Number(order) : 1000,
                },
            });
        });
    } catch (e) {
        throw new Error(e);
    }
};
