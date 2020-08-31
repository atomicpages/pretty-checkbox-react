import * as React from 'react';
import { usePluginData } from '@docusaurus/useGlobalData';

type PropsTableProps = {
    displayName: string;
};

const PropsTable = ({ displayName }: PropsTableProps) => {
    const { props } = usePluginData('docusaurus-plugin-react-docgen-typescript').find(item => {
        return item.displayName === displayName;
    });

    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Required</th>
                    <th>Type</th>
                    <th>Default Value</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>
                {Object.keys(props).map(key => {
                    return (
                        <tr key={key}>
                            <td>
                                <code>{props[key].name}</code>
                            </td>
                            <td>{props[key].required || 'No'}</td>
                            <td>
                                <code>
                                    {props[key].type.name === 'enum'
                                        ? props[key].type.value
                                              .map(({ value }) => value)
                                              .join(' | ')
                                        : props[key].type.name}
                                </code>
                            </td>
                            <td>{props[key].defaultValue}</td>
                            <td>{props[key].description}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
};

export default PropsTable;
