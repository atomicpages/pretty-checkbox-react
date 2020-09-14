import * as React from 'react';
import { PCRSwitchProps } from '../../typings/PCRSwitchProps';

export type UseAriaCheckedOptions = {
    setState?: PCRSwitchProps['setState'];
    checked?: PCRSwitchProps['checked'];
};

const handler = (e: any) => {
    e.currentTarget.setAttribute('aria-checked', e.currentTarget.checked + '');
};

/**
 * A small hook to help manage correct aria-checked state when switch
 * is used as an uncontrolled component. We need this to run
 * for a11y purposes. FOr the `switch` role, `aria-checked` is required.
 */
export const useAriaChecked = ({ setState, checked }: UseAriaCheckedOptions) => {
    const ref = React.useRef<HTMLInputElement>(null);

    React.useEffect(() => {
        const elem = ref.current;
        let bound = false;

        if (!setState && !checked && elem) {
            elem.setAttribute('aria-checked', elem.checked + '');
            elem.addEventListener('change', handler);
            bound = true;
        }

        return () => {
            if (bound && elem) {
                elem.removeEventListener('change', handler);
            }
        };
    }, [setState, checked]);

    return ref;
};
