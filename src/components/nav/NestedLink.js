import React from 'react';
import classNames from 'classnames';
import { Link } from 'gatsby';

export default function NestedLink({
    location,
    node,
    className,
    getChildNodes = () => [],
}) {
    const childrenNodes = getChildNodes(node);
    const expanded = location.indexOf(node.path) === 0;

    return (
        <li
            className={classNames('sidebar__nav__item', className, {
                'sidebar__nav__item--expanded': expanded
            })}>
            <Link to={node.path}>
                {node.context.title}
                {childrenNodes.length ? (
                    <i className={classNames('sidebar__nav__item__ec', 'mdi', {
                        'mdi-chevron-down': expanded,
                        'mdi-chevron-right': !expanded
                    })} />
                ) : null}
            </Link>
            {childrenNodes.length && expanded ? (
                <ul>
                    {childrenNodes.map(child => (
                        <NestedLink
                            key={child.path}
                            location={location}
                            node={child}
                            getChildNodes={getChildNodes}
                            className="nested-link"
                        />
                    ))}
                </ul>
            ) : null}
        </li>
    );
}
