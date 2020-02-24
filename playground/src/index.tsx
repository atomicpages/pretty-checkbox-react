import { hot } from 'react-hot-loader/root';

import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Rover, useRoverState } from 'reakit';

import {
    Checkbox as PCRCheckbox,
    useCheckboxState,
    Radio,
    RadioGroup as PCRRadioGroup,
    useRadioState,
    Switch,
    useSwitchState,
    Group,
} from '../../src/index';

import 'pretty-checkbox/src/pretty-checkbox.scss';
import { TreeCheckbox } from './TreeCheckbox';

function ReakitIntegration() {
    const radio = useRadioState();
    const rover = useRoverState({ loop: true });

    return (
        <PCRRadioGroup baseId="test">
            <Rover as={Radio} name="test" value="test" {...radio} {...rover}>
                Test
            </Rover>
            <Rover as={Radio} name="test" value="test_2" {...radio} {...rover}>
                Test 2
            </Rover>
            <Rover as={Radio} name="test" value="test_3" {...radio} {...rover}>
                Test 3
            </Rover>
        </PCRRadioGroup>
    );
}

function Foo({ className, rest }: any = {}) {
    return <i {...rest} className={`mdi mdi-check${className ? ' ' + className : ''}`} />;
}

function TestGroup() {
    const radio = useRadioState({ state: 'orange' });

    return (
        <PCRRadioGroup {...radio} aria-label="fruits">
            <Radio {...radio} name="fruits" value="apple">
                Apple
            </Radio>
            <Radio {...radio} name="fruits" value="orange">
                Orange
            </Radio>
            <Radio {...radio} name="fruits" value="watermelon">
                Watermelon
            </Radio>
        </PCRRadioGroup>
    );
}

const Checkbox = React.forwardRef<HTMLInputElement, any>(({ children, ...rest }, ref) => {
    const checkbox = useCheckboxState();

    return (
        <PCRCheckbox {...checkbox} ref={ref} {...rest}>
            {children}
        </PCRCheckbox>
    );
});

Checkbox.displayName = 'Checkbox';

function RadioGroup() {
    const radio = useRadioState();

    return (
        <>
            <Radio name="gender" value="male" {...radio}>
                Male
            </Radio>
            <Radio name="gender" value="female" {...radio}>
                Female
            </Radio>
            <Radio name="gender" value="other" {...radio}>
                Other
            </Radio>
        </>
    );
}

function SwitchGroup() {
    const switchState = useSwitchState({ type: 'radio' });

    return (
        <>
            <Switch name="greeting" value="yes" {...switchState}>
                Yes
            </Switch>
            <Switch name="greeting" shape="fill" value="no" {...switchState}>
                No
            </Switch>
            <Switch name="greeting" shape="slim" value="maybe" {...switchState}>
                Maybe
            </Switch>
        </>
    );
}

function UncontrolledInput() {
    const ref = React.useRef<HTMLInputElement>();

    return (
        <form
            onSubmit={e => {
                e.preventDefault();

                if (!ref.current.checked) {
                    alert('You must agree to the terms and conditions!');
                } else {
                    alert('Form submitted');
                }
            }}>
            <Checkbox ref={ref}>
                Do you agree to the terms and conditions?
            </Checkbox>
            <br />
            <button type="submit">Submit</button>
        </form>
    );
}

function Main() {
    return (
        <main>
            <section>
                <h2>Basic Checkboxes</h2>
                <Checkbox>Hello, World</Checkbox>
                <br />
                <br />
                <Checkbox disabled>Disabled Checkbox</Checkbox>
                <br />
                <br />
                <Checkbox locked>Locked Checkbox</Checkbox>
            </section>
            <section>
                <h2>Uncontrolled Input</h2>
                <UncontrolledInput />
            </section>
            <section>
                <h2>Colors</h2>
                <>
                    <Checkbox color="primary">Primary</Checkbox>
                    <Checkbox color="success">Success</Checkbox>
                    <Checkbox color="info">Info</Checkbox>
                    <Checkbox color="warning">Warning</Checkbox>
                    <Checkbox color="danger">Danger</Checkbox>
                </>
                <h2>Mixed Colors</h2>
                <>
                    <Checkbox shape="round" fill="thick" color="primary-o">
                        Primary
                    </Checkbox>
                    <Checkbox shape="round" color="success-o">
                        Success
                    </Checkbox>
                    <Checkbox fill="fill" color="info">
                        Info
                    </Checkbox>
                    <Checkbox shape="curve" fill="thick" color="warning-o">
                        Warning
                    </Checkbox>
                    <Checkbox shape="curve" fill="thick" color="danger-o">
                        Danger
                    </Checkbox>
                </>
            </section>
            <section>
                <h2>Images</h2>
                <>
                    <Checkbox shape="round" icon={<i className="mdi mdi-check" />}>
                        Pay Bills
                    </Checkbox>
                    <Checkbox shape="curve" icon={<i className="mdi mdi-close" />}>
                        Fuel Refill
                    </Checkbox>
                    <Checkbox icon={<i className="mdi mdi-close-outline" />}>
                        Buy Groceries
                    </Checkbox>
                    <Checkbox icon={<Foo />} className="p-icon">
                        Pick up Couch
                    </Checkbox>
                </>
            </section>
            <section>
                <h2>Animations</h2>
                <>
                    <Checkbox
                        animation="smooth"
                        shape="round"
                        icon={<i className="mdi mdi-check" />}>
                        Pay Rent
                    </Checkbox>
                    <Checkbox
                        animation="jelly"
                        shape="curve"
                        icon={<i className="mdi mdi-close" />}>
                        Fuel Refill
                    </Checkbox>
                    <Checkbox animation="tada" icon={<i className="mdi mdi-close-outline" />}>
                        Pick up Couch
                    </Checkbox>
                    <Checkbox animation="rotate" icon={<Foo />} className="custom-selector">
                        Buy Groceries
                    </Checkbox>
                    <Checkbox animation="pulse" icon={<Foo />}>
                        Pay Cellphone
                    </Checkbox>
                </>
            </section>
            <section>
                <h2>Plain</h2>
                <Checkbox animation="smooth" plain icon={<i className="mdi mdi-check" />}>
                    Pay Rent
                </Checkbox>
            </section>
            <section>
                <h2>Tree</h2>
                <TreeCheckbox />
            </section>
            <section>
                <h2>Size</h2>
                <Checkbox bigger>Pay Rent</Checkbox>
            </section>
            <section>
                <h2>Group</h2>
                <TestGroup />
            </section>
            <section>
                <h2>Radio</h2>
                <RadioGroup />
            </section>
            <section>
                <h2>Switch</h2>
                <Switch {...useSwitchState()}>Yes, I want spam!</Switch>
            </section>
            <section>
                <h2>Switch as a Radio Group</h2>
                <SwitchGroup />
            </section>
            <section>
                <h2>Reakit Rover</h2>
                <ReakitIntegration />
            </section>
        </main>
    );
}

const App = hot(Main);

ReactDOM.render(<App />, document.querySelector('#root'));
