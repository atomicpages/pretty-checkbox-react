import * as React from 'react';
import { Checkbox, useCheckboxState } from '../../../src/index';
import { Section } from '../components/Section';

const UncontrolledCheckbox = () => {
    const ref = React.useRef<HTMLInputElement>(null);

    React.useEffect(() => {
        console.log('ref', ref.current);
    }, []);

    return <Checkbox ref={ref}>Never regret anything that made you smile</Checkbox>;
};

const ControlledStateHook = () => {
    const checkbox = useCheckboxState();

    return (
        <>
            <Checkbox {...checkbox}>Everything you can imagine is real</Checkbox>
            <p>Current value: {checkbox.state + ''}</p>
        </>
    );
};

const ControlledManually = () => {
    const [checked, toggle] = React.useReducer(s => !s, false);

    return (
        <>
            <Checkbox checked={checked} onChange={toggle}>
                What we think, we become
            </Checkbox>
            <p>Current value: {checked + ''}</p>
        </>
    );
};

const ControlledWithValue = () => {
    const checkbox = useCheckboxState();

    return (
        <>
            <Checkbox {...checkbox} value="dr_seuss">
                Oh, the things you can find, if you don’t stay behind
            </Checkbox>
            <p>Current value: {checkbox.state + ''}</p>
        </>
    );
};

export const Functional = () => {
    return (
        <>
            <h2>Functional Kitchen Sink Examples</h2>
            <p>Showcases various features of PCR</p>
            <Section>
                <p>
                    Basic uncontrolled checkbox using <code>React.useRef</code> or{' '}
                    <code>React.createRef</code>
                </p>
                <UncontrolledCheckbox />
            </Section>
            <Section>
                <p>
                    Basic controlled boolean checkbox using <code>useCheckboxState</code>
                </p>
                <ControlledStateHook />
            </Section>
            <Section>
                <p>
                    Basic manual control of the checkbox. This can be done by toggling the{' '}
                    <code>checked</code> prop.
                </p>
                <ControlledManually />
            </Section>
            <Section>
                <p>
                    <code>value</code> can be passed to the control and integrates well into the
                    state hook
                </p>
                <ControlledWithValue />
            </Section>
        </>
    );
};
