import * as React from 'react';

export type GroupProps = {
    baseId: string;
    children: React.ReactNode;
    state?: any;
    setState?: any;
    onChange?: any;
    as?: string | React.FunctionComponent | React.ComponentClass;

    // TODO: fix so we;re passing in the correct HTML props
    [key: string]: any;
};

export const Group: React.FC<GroupProps> = (props: GroupProps) => {
    // TODO: find a better way to filter through non-HTML attribute noise
    const { baseId, state, setState, onChange, ...propsWithoutState } = props;
    const { as = 'div', children, ...htmlProps } = propsWithoutState;

    return React.createElement(as, htmlProps, children);
};

Group.displayName = 'Group';
