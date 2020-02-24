// eslint-disable prettier/prettier
import { PrettyProps } from '../Pretty';

const getInputProps = (props: PrettyProps) => {
    const  { onChange, disabled, value, state, locked, type, name, checked, baseId, defaultValue, defaultChecked } = props;
    return { onChange, disabled, value, state, locked, type, name, checked, baseId, defaultValue, defaultChecked };
};

const getLabelProps = (props: PrettyProps) => {
    const  { children, baseId, color, icon } = props;
    return { children, baseId, color, icon };
};

const getHTMLProps = (props: Record<string, any>, exclude: Set<string>) => {
    const htmlProps: Record<string, any> = {};
    const propKeys = Object.keys(props);

    for (let i = 0; i < propKeys.length; i++) {
        if (!exclude.has(propKeys[i])) {
            htmlProps[propKeys[i]] = props[propKeys[i]];
        }
    }

    return htmlProps;
}

/**
 * A fairly gross way of organizing props so we don't unintentionally pass
 * props to native HTML elements.
 */
export const organizeProps = (props: PrettyProps) => {
    const { animation, bigger, plain, shape, fill, iconType, isSwitch, setState, className, ...rest } = props;
    const pcrProps = { animation, bigger, plain, shape, fill, iconType, isSwitch, setState, className };
    const inputProps = getInputProps(rest);
    const labelProps = getLabelProps(rest);

    const htmlProps = getHTMLProps(props, new Set([
        ...Object.keys(pcrProps),
        ...Object.keys(inputProps),
        ...Object.keys(labelProps),
    ]));

    return {
        pcrProps,
        inputProps,
        labelProps,
        htmlProps,
    };
};
