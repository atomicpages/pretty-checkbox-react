// @flow

import React from 'react';

type Props = {
    /**
     * The source list which contains props
     * of the component and _all_ composed props.
     */
    source: Array<{}>,

    /**
     * The name of the component to render prop
     * information for. If there are more components
     * of the same name, be sure to specify the path to the
     * component or give it a unique name.
     */
    name: string
};

const resolveCompositions: {} = ({ source }) => {

};

function DisplayProps(props: Props) {
    const { source, name, ...rest } = props;

    if (!source) {
        return null;
    }

    const keys = Object.keys(source);

    if (!keys.length) {
        return null;
    }

    const match: (string | void) = keys.find((key: string) => key.includes(name));

    if (match) {
        const resolvedSource = source[match];

        const resolved = resolveCompositions(source);
    }
}

export default DisplayProps;
