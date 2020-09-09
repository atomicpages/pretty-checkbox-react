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
                iconType: icon.props['data-type'] || type,
                icon: !icon.props.className?.includes(type)
                    ? React.cloneElement(icon, {
                          ...icon.props,
                          className: classNames(icon.props.className, type),
                      })
                    : icon,
            };
        }

        return {};
    }, [icon]);
};
