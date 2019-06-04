import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import keyBy from 'lodash/keyBy';

export default function NestedPagesProvider({ children }) {
    return (
        <StaticQuery
            query={graphql`
                {
                    allSitePage {
                        edges {
                            node {
                                path
                                context {
                                    id
                                    parent
                                    children
                                    slug
                                    title
                                    order
                                }
                            }
                        }
                    }
                }
            `}
            render={data => {
                const nodes = keyBy(
                    data.allSitePage.edges
                        .filter(
                            edge => edge.node.context && edge.node.context.id
                        )
                        .map(edge => ({
                            ...edge.node,
                            isRoot: !edge.node.context.parent,
                        })),
                    node => node.context.id
                );

                return children({
                    getRootNodes: () =>
                        Object.values(nodes)
                            .filter(node => node.isRoot)
                            .map(node => {
                                const title = node.context.title;
                                return {
                                    ...node,
                                    context: {
                                        ...node.context,
                                        title: title,
                                    },
                                };
                            }),
                    getChildNodes: node => {
                        if (!node.context.children) {
                            return [];
                        }

                        return node.context.children
                            .map(path => nodes[path])
                            .sort((a, b) => {
                                const aLower = a.context.title.toLowerCase();
                                const bLower = b.context.title.toLowerCase();

                                if (aLower < bLower) {
                                    return -1;
                                }

                                if (aLower > bLower) {
                                    return 1;
                                }

                                return 0;
                            });
                    },
                });
            }}
        />
    );
}
