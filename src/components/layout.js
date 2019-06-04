/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { Location } from '@reach/router';

import classNames from 'classnames';

import Header from './Header';
import Nav from './nav';

import '../styles/main.scss';

const Layout = React.memo(({ children }) => (
    <StaticQuery
        query={graphql`
            query SiteTitleQuery {
                site {
                    siteMetadata {
                        title
                        description
                    }
                }
            }
        `}
        render={data => (
            <Location>
                {({ location }) => {
                    console.log(location);

                    return (
                        <div
                            className={classNames('grid-container', {
                                'grid-container--alt': location.pathname !== '/home/'
                            })}>
                            <Header
                                siteTitle={data.site.siteMetadata.title}
                                description={data.site.siteMetadata.description}
                                isHome={location.pathname === '/home/'}
                            />
                            <Nav />
                            <main className="content">{children}</main>
                        </div>
                    );
                }}
            </Location>
        )}
    />
));

Layout.displayName = 'Layout';

export default Layout;
