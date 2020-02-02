import * as React from 'react';
import classNames from 'classnames';

import { CommonCheckboxRadioProps } from '../types/CommonProps';

export const useIcon = (icon: CommonCheckboxRadioProps['icon']) => {
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
                icon: React.cloneElement(icon, {
                    ...icon.props,
                    className: classNames(icon.props.className, 'icon'),
                }),
            };
        }

        return {};
    }, [icon]);
};
