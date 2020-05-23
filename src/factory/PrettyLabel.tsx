import * as React from 'react';

import classNames from 'classnames';
import { CommonCheckboxRadioProps } from '../types/CommonProps';

export type PrettyLabelProps = Pick<CommonCheckboxRadioProps, 'color' | 'children' | 'baseId'> & {
    icon?: any;
};

export const PrettyLabel: React.FC<PrettyLabelProps> = ({
    color,
    icon,
    children,
    baseId,
}: PrettyLabelProps) => (
    <div
        className={classNames('state', {
            [`p-${color}`]: color,
        })}>
        {icon}
        <label htmlFor={baseId}>{children}</label>
    </div>
);

PrettyLabel.displayName = 'Pretty.Label';
