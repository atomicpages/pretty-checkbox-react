import * as React from 'react';

import { Switch, useCheckboxState } from '../../../src';
import { Section } from '../components/Section';

const ControlledSwitch = () => {
  const checkbox = useCheckboxState({ state: [] });

  React.useEffect(() => {
    if ((checkbox.state as string[]).includes('enable.dark')) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [checkbox.state]);

  return (
    <div>
      <div>
        <Switch {...checkbox} value="enable.dark">
          Enable Dark Mode
        </Switch>
      </div>
      <br />
      <div>
        <Switch {...checkbox} value="enable.email">
          Enable Emails
        </Switch>
      </div>
    </div>
  );
};

export const AllSwitch = () => {
  return (
    <>
      <h2>Switch Kitchen Sink</h2>
      <Section>
        <p>Switch can be used to toggle settings (i.e. checkbox)</p>
        <Switch>Regular</Switch>
        <Switch shape="fill">Fill</Switch>
        <Switch shape="slim">Slim</Switch>
      </Section>
      <Section>
        <p>They can also be used as a radio control</p>
        <Switch type="radio" name="mim">
          Yes
        </Switch>
        <Switch type="radio" name="mim">
          No
        </Switch>
        <Switch type="radio" name="mim">
          I don't know
        </Switch>
      </Section>
      <section>
        <p>
          Controlling <code>Switch</code> can be done via{' '}
          <code>useCheckboxState</code> or by
          <code>useRadioState</code> hooks.
        </p>
        <ControlledSwitch />
      </section>
    </>
  );
};
