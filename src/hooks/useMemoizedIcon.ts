import * as React from 'react';
import classNames from 'classnames';

import { warnOnce } from '../utils/utils';

export type IconTypes = 'image' | 'svg' | 'icon' | undefined;

export function useMemoizedIcon(
    icon: React.ReactComponentElement<any, HTMLElement> | undefined
): [React.MutableRefObject<IconTypes>, React.ReactComponentElement<any, HTMLElement> | null] {
    const iconType = React.useRef<IconTypes>();

    const memoizedIcon = React.useMemo(() => {
        if (
            !icon ||
            (icon && icon.props && icon.props.className && icon.props.className.includes('icon'))
        ) {
            return null;
        }

        if (typeof icon.type !== 'string') {
            warnOnce('Function/Class components passed as icons need to merge className props');
            warnOnce('Cannot infer `icon` type. Specify p-svg, p-icon, or p-image on Checkbox');

            return icon;
        } else if (icon.type === 'svg') {
            iconType.current = 'svg';
        } else if (icon.type === 'img') {
            iconType.current = 'image';
        } else {
            iconType.current = 'icon';
        }

        const { children, className, ...rest } = icon.props;

        return React.cloneElement(
            icon,
            {
                ...rest,
                className: classNames(className, 'icon'),
            },
            children
        );
    }, [icon]);

    return [iconType, memoizedIcon];
}
