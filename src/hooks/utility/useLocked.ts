import * as React from 'react';
import { CommonProps } from '../../typings/PCRCommonProps';

export type UseLockedArgs = {
  locked: CommonProps<unknown>['locked'];
  style?: React.CSSProperties;
};

const lockedStyles: React.CSSProperties = { pointerEvents: 'none' };

/**
 * A simplier way to prevent checking when PCR is in locked mode.
 * This is way simplier than controlling the checkbox using
 * event handlers. Supports IE 11+
 */
export const useLocked = ({ locked, style }: UseLockedArgs) => {
  if (locked) {
    return {
      ...lockedStyles,
      ...style,
    };
  }

  return style;
};
