import * as React from 'react';
import { nanoid } from 'nanoid';

const PREFIX = 'pcr_';

export const useUUID = (id?: string) => {
    const uuid = React.useRef(id || PREFIX + nanoid(8));

    return uuid.current;
};
