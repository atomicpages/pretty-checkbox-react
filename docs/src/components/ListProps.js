// @flow

import React from 'react';
import moize from 'moize';
import classNames from 'classnames';
import { markdown } from 'markdown';

import docs from '../data/props.json';

import { Title } from './Title';
import { CollapseContainer } from './CollapseContainer';

type Prop = {
    required: boolean,
    flowType?: {
        name: string,
        raw: string,
        type?: string,
        elements: Array<{
            name: string,
            value: string,
            signature?: {
                arguments: Array<string>,
                return?: {
                    name: string,
                    raw: string
                }
            }
        }>,
        signature?: {
            properties: Array<string>
        }
    },
    defaultValue: string,
    description: string
};

type Props = {
    props: { [string]: Prop }
};

type Docs = {
    [string]: {
        description: string,
        displayName: string,
        methods: Array<string>,
        ...Props
    }
};

/**
 * Sorts by alphabet.
 */
function alphabetize(props: Array<Props>) {
    return props.sort();
}

/**
 * Sorts by required.
 */
function required(props, source: Docs) {
    const sort = (a, b) => {
        if (source.props[a].required && source.props[b].required) {
            return 0;
        } else if (source.props[a].required && !source.props[b].required) {
            return -1;
        }

        return 1;
    };

    return props.sort(sort);
}

/**
 * Memoize expensive sort/traverse to speed to re-renders.
 */
const memoizedToMap = moize.deep(function toMap(source: Docs, ...sort: Array<(Array<string>) => Array<string>>) {
    const map = new Map();
    let keys = Object.keys(source.props);

    if (sort.length && keys.length > 1) {
        for (let i = 0; i < sort.length; i++) {
            keys = sort[i](keys, source);
        }
    }

    keys.forEach(key => {
        map.set(key, source.props[key]);
    });

    return map;
});

export default function ListProps() {
    return (
        <>
            <Title>Props</Title>
            {
                Object.keys(docs).map((key, index) => {
                    docs[key].props = memoizedToMap(docs[key], alphabetize, required);

                    return (
                        <CollapseContainer collapsed={index !== 0} key={index} title={key}>
                            <table className="table table-striped table-hover table-sm">
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
                                    {
                                        Array.from(docs[key].props).map(([key, value]: [string, Prop]) => {
                                            return (
                                                <tr key={key}>
                                                    <td>{key}</td>
                                                    <td title={value.flowType.raw}>
                                                        <span className={classNames(value.flowType.raw ? 'has-tooltip' : null)}>
                                                            {value.flowType.name === 'signature' ? value.flowType.type : value.flowType.name}
                                                        </span>
                                                    </td>
                                                    <td>{value.required.toString()}</td>
                                                    <td>{value.defaultValue  ? value.defaultValue.value : null}</td>
                                                    <td dangerouslySetInnerHTML={{__html: markdown.toHTML(value.description)}}></td>
                                                </tr>
                                            );
                                        })
                                    }
                                </tbody>
                            </table>
                        </CollapseContainer>
                    );
                })
            }
        </>
    );
}
