import React from 'react';
import { Location } from '@reach/router';

import NestedPagesProvider from './nav/NestedPagesProvider';
import NestedLink from './nav/NestedLink';

export default function Nav(props) {
    return (
        <Location>
            {({ location }) => (
                <nav className="sidebar" {...props}>
                    <NestedPagesProvider>
                        {({ getRootNodes, getChildNodes }) => {
                            return (
                                <ul className="sidebar__nav">
                                    {getRootNodes()
                                        .sort(
                                            (a, b) =>
                                                a.context.order -
                                                b.context.order
                                        )
                                        .map(node => (
                                            <NestedLink
                                                key={node.path}
                                                location={location.pathname}
                                                node={node}
                                                getChildNodes={getChildNodes}
                                            />
                                        ))}
                                </ul>
                            );
                        }}
                    </NestedPagesProvider>
                </nav>
            )}
        </Location>
    );
}
