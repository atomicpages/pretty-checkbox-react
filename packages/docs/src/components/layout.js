import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { Location } from '@reach/router';
import { MDXProvider } from '@mdx-js/react';

import classNames from 'classnames';
import Header from './header';
import Nav from './nav';
import { Code } from './Code';

import '../styles/main.scss';

const components = {
    pre: props => <div {...props} />,
    code: Code,
};

const Layout = ({ children }) => (
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
                    return (
                        <MDXProvider components={components}>
                            <div
                                className={classNames('grid-container', {
                                    'grid-container--alt': location.pathname !== '/',
                                })}>
                                <Header
                                    siteTitle={data.site.siteMetadata.title}
                                    description={data.site.siteMetadata.description}
                                    isHome={location.pathname === '/'}
                                />
                                <Nav />
                                <main className="content">{children}</main>
                            </div>
                        </MDXProvider>
                    );
                }}
            </Location>
        )}
    />
);

export default Layout;
