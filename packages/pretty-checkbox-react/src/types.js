// @flow

import * as React from 'react';

export type PCRColors = 'primary' | 'success' | 'info' | 'warning' | 'danger';
export type PCRColorsOutline = 'primary-o' | 'success-o' | 'info-o' | 'warning-o' | 'danger-o';

export type RadioCheckboxVariants = 'curve' | 'round' | 'plain';
export type RadioCheckboxFillModes = 'fill' | 'thick';
export type SwitchFillModes = 'outline' | 'fill' | 'slim';

// IconType not applicable to Switch
export type IconPropType = {
    type: 'svg' | 'image' | 'icon' | null,
    icon: ?React.Element<*>,
};

export type SwitchAnimations = 'smooth' | 'jelly' | 'tada';
export type RadioCheckboxAnimations = SwitchAnimations | 'rotate' | 'pulse';
