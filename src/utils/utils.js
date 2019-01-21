// @flow

import * as React from 'react';

type GetBaseClassNameProps = {
    icon?: React.Element<any>,
    svg?: React.Element<'svg'>,
    image?: React.Element<'img'>
}

export const getBaseClassName = ({ icon, image, svg }: GetBaseClassNameProps, PREFIX: string) => {
    let base = `${PREFIX}default`;

    if (icon) {
        base = `${PREFIX}icon`;
    } else if (svg) {
        base = `${PREFIX}svg`;
    } else if (image) {
        base = `${PREFIX}image`;
    }

    return base;
};
