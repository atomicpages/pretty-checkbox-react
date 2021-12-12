import * as React from 'react';
import clsx from 'clsx';

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

      // icons that contain `type` substring
      // won't fail with a word boundary search
      const re = new RegExp(`\\b${type}\\b`);

      return {
        iconType: icon.props['data-type'] || type,
        icon:
          icon.props.className && !re.test(icon.props.className)
            ? React.cloneElement(icon, {
                ...icon.props,
                className: clsx(icon.props.className, type),
              })
            : icon,
      };
    }

    return {};
  }, [icon]);
};
