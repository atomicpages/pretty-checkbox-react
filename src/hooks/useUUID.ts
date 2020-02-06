import * as React from 'react';
import nanoid from 'nanoid';

const PREFIX = 'pcr_';

export const useUUID = ({ prefix = PREFIX }: { prefix?: string } = {}) => {
    const { current: baseId } = React.useRef(prefix + nanoid(10));

    return { baseId };
};
