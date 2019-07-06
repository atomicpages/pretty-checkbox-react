// @flow

import * as React from 'react';
import classNames from 'classnames';
import { warn, mergeRefs, isValidIconType, error, removeIndexFromArray } from '../../utils/utils';

import { type IconPropType } from '../../types';

export const Icon = React.memo<IconPropType>(({ icon, type }: IconPropType) => {
    if (!isValidIconType(type)) {
        error('icon type is invalid. Options are svg, icon, or image');
    }

    return icon
        ? React.cloneElement(
              icon,
              {
                  className: classNames(type, icon.props.className),
              },
              icon.props.children
          )
        : null;
});

Icon.displayName = 'PCR.Icon';
