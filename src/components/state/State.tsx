import * as React from 'react';
import classNames from 'classnames';
import { PCRCheckboxRadioProps } from '../../typings/PCRCheckboxRadioProps';

type StateProps = React.HTMLAttributes<HTMLDivElement> & {
    color?: PCRCheckboxRadioProps['color'];
    icon?: React.ReactNode;
};

/**
 * A tiny component to abstract away pretty-checkbox "state" div.
 * Shared by all components.
 */
export const State = ({ color, icon, id, children, ...rest }: StateProps) => {
    return (
        <div className={classNames('state', color && `p-${color}`)} {...rest}>
            {icon}
            <label htmlFor={id}>{children}</label>
        </div>
    );
};

State.displayName = 'State';
