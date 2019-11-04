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
            <Radio name="gender" value="M" {...radio}>
                M
            </Radio>
            <Radio name="gender" value="F" {...radio}>
                F
            </Radio>
        </>
    );
}

function SwitchGroup() {
    const switchState = useSwitchState();

    return (
        <>
            <Switch name="greeting" type="radio" value="hello" {...switchState}>
                Hello
            </Switch>
            <Switch name="greeting" type="radio" fill="fill" value="john" {...switchState}>
                John
            </Switch>
            <Switch name="greeting" type="radio" fill="slim" value="wayne" {...switchState}>
                Wayne
            </Switch>
        </>
    );
}

function Main() {
    return (
        <main>
            <section>
                <h2>Basic Checkboxes</h2>
                <Checkbox ref={React.createRef()}>Hello, World</Checkbox>
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
                    <Checkbox variant="round" fill="thick" color="primary-o">
                        Primary
                    </Checkbox>
                    <Checkbox variant="round" color="success-o">
                        Success
                    </Checkbox>
                    <Checkbox fill="fill" color="info">
                        Info
                    </Checkbox>
                    <Checkbox variant="curve" fill="thick" color="warning-o">
                        Warning
                    </Checkbox>
                    <Checkbox variant="curve" fill="thick" color="danger-o">
                        Danger
                    </Checkbox>
                </>
            </section>
            <section>
                <h2>Images</h2>
                <>
                    <Checkbox variant="round" icon={<i className="mdi mdi-check" />}>
                        Pay Bills
                    </Checkbox>
                    <Checkbox variant="curve" icon={<i className="mdi mdi-close" />}>
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
                        variant="round"
                        icon={<i className="mdi mdi-check" />}>
                        Pay Rent
                    </Checkbox>
                    <Checkbox
                        animation="jelly"
                        variant="curve"
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
                <Checkbox animation="smooth" variant="plain" icon={<i className="mdi mdi-check" />}>
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
                <h2>Switch as Checkboxes</h2>
                <Switch {...useSwitchState()}>Hello</Switch>
                <Switch fill="fill" {...useSwitchState()}>
                    John
                </Switch>
                <Switch fill="slim" {...useSwitchState()}>
                    Wayne
                </Switch>
                <h2>Switch as Radio</h2>
                <SwitchGroup />
            </section>
        </main>
    );
}

const App = hot(Main);

ReactDOM.render(<App />, document.querySelector('#root'));
