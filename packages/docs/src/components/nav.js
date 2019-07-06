import React from 'react';
import { StaticQuery, graphql, Link } from 'gatsby';
import classNames from 'classnames';

const Nav = props => (
    <StaticQuery
        query={graphql`
            query NavQuery {
                allMdx(sort: { fields: frontmatter___order }) {
                    nodes {
                        frontmatter {
                            title
                            order
                            path
                        }
                    }
                }
            }
        `}
        render={data => (
            <nav className="sidebar" {...props}>
                <ul className="sidebar__nav">
                    {data.allMdx.nodes.map(page => (
                        <li className="sidebar__nav__item" key={page.frontmatter.title}>
                            <Link to={page.frontmatter.path}>{page.frontmatter.title}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
        )}
    />
);

export default Nav;
