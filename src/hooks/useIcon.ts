import * as React from 'react';
import classNames from 'classnames';

import { PCRCheckboxRadioProps } from '../typings/PCRCheckboxRadioProps';

export const useIcon = (icon: PCRCheckboxRadioProps['icon']) => {
    return React.useMemo(() => {
        if (icon) {
            let type: 'icon' | 'svg' | 'image' = 'icon';

            if (icon.type === 'img') {
                type = 'image';
            } else if (icon.type === 'svg') {
                type = 'svg';
            }

            return {
                iconType: type,
                icon: !icon.props.className.includes('icon')
                    ? React.cloneElement(icon, {
                          ...icon.props,
                          className: classNames(icon.props.className, 'icon'),
                      })
                    : icon,
            };
        }

        return {};
    }, [icon]);
};
