// @flow

import React from 'react';
import classNames from 'classnames';
import { markdown } from 'markdown';

export default function PropTable({ component, show = false }) {
    if (!show) {
        return  null;
    }

    return (
        <table className="props-table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Type</th>
                    <th>Required</th>
                    <th width="20%">Default Value</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>
                {Object.keys(component.props).map(key => {
                    const value = component.props[key];

                    return (
                        <tr key={key}>
                            <td>{key}</td>
                            <td title={value.flowType.raw}>
                                <span
                                    className={classNames(
                                        value.flowType.raw
                                            ? 'has-tooltip'
                                            : null
                                    )}>
                                    {value.flowType.name === 'signature'
                                        ? value.flowType.type
                                        : value.flowType.name}
                                </span>
                            </td>
                            <td>{value.required.toString()}</td>
                            <td>
                                {value.defaultValue
                                    ? value.defaultValue.value
                                    : null}
                            </td>
                            <td
                                dangerouslySetInnerHTML={{
                                    __html: markdown.toHTML(value.description),
                                }}
                            />
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
}
