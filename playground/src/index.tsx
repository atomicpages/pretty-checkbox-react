import { hot } from 'react-hot-loader/root';

import * as React from 'react';
import * as ReactDOM from 'react-dom';

import {
    Checkbox as PCRCheckbox,
    useCheckboxState,
    Radio,
    useRadioState,
    Switch,
    useSwitchState,
} from '../../src/index';

import 'pretty-checkbox/src/pretty-checkbox.scss';
import { TreeCheckbox } from './TreeCheckbox';

function Foo({ className, rest }: any = {}) {
    return <i {...rest} className={`mdi mdi-check${className ? ' ' + className : ''}`} />;
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
                    <Checkbox animation="rotate" icon={<Foo />} className="p-icon">
                        Buy Groceries
                    </Checkbox>
                    <Checkbox animation="pulse" icon={<Foo />} className="p-icon">
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
        </main>
    );
}

const App = hot(Main);

ReactDOM.render(<App />, document.querySelector('#root'));
