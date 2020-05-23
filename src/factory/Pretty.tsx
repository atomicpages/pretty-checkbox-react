import * as React from 'react';

import { getClassNames } from './utils/utils';
import { CommonCheckboxRadioProps, SwitchShape } from '../types/CommonProps';
import { PrettyInput } from './PrettyInput';
import { PrettyLabel } from './PrettyLabel';
import { organizeProps } from './utils/propUtils';

export type PrettyProps = Omit<CommonCheckboxRadioProps, 'icon' | 'shape'> & {
    as?: string | React.FunctionComponent | React.ComponentClass;
    icon?: React.ReactElement;
    shape?: SwitchShape | CommonCheckboxRadioProps['shape'];
    isSwitch?: boolean;
};

export const Pretty = React.forwardRef<HTMLInputElement, PrettyProps>((props: PrettyProps, ref) => {
    const { as = 'div', ...rest } = props;
    const { inputProps, labelProps, htmlProps } = organizeProps(rest);

    return React.createElement<any>(
        as,
        {
            // @ts-ignore
            className: getClassNames(props),
            'aria-disabled': inputProps.disabled,
            'aria-checked': inputProps.state === 'indeterminate' ? 'mixed' : !!inputProps.state,
            tabIndex: inputProps.locked || inputProps.disabled ? -1 : 0,
            onKeyPress: React.useCallback(
                /* istanbul ignore next */ (e: React.KeyboardEvent<HTMLDivElement>) => {
                    /* istanbul ignore next */
                    e.preventDefault();
                },
                []
            ),
            onKeyUp: React.useCallback(
                (e: React.KeyboardEvent<HTMLDivElement>) => {
                    if (
                        (e.keyCode === 32 || e.keyCode === 13) &&
                        typeof inputProps.onChange === 'function'
                    ) {
                        inputProps.onChange(
                            (e as unknown) as React.ChangeEvent<HTMLInputElement>,
                            inputProps.value
                        );
                    }
                },
                // eslint-disable-next-line react-hooks/exhaustive-deps
                [inputProps.onChange, inputProps.value]
            ),
            role: inputProps.type,
            ...htmlProps,
        },
        <>
            <PrettyInput ref={ref} {...inputProps} />
            <PrettyLabel {...labelProps} />
        </>
    );
});

Pretty.displayName = 'Pretty';
