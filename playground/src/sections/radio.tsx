import { useState, useCallback } from 'react';
import { Radio, useRadioState } from '../../../src/index';
import { Section } from '../components/Section';

const ControlledRadio = () => {
  const radio = useRadioState();

  return (
    <>
      <Radio name="mails" value="regular" {...radio}>
        Regular Emails
      </Radio>
      <Radio name="mails" value="weekly" {...radio}>
        Weekly Digest Emails
      </Radio>
      <Radio name="mails" value="none" {...radio}>
        No Emails
      </Radio>
      <p>Current Value: {radio.state}</p>
    </>
  );
};

const ManualControlRadio = () => {
  const [state, setState] = useState('');

  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setState(e.currentTarget.value);
  }, []);

  return (
    <>
      <Radio
        name="malcom"
        value="yes"
        onChange={onChange}
        checked={state == 'yes'}
      >
        Yes
      </Radio>
      <Radio
        name="malcom"
        value="no"
        onChange={onChange}
        checked={state == 'no'}
      >
        No
      </Radio>
      <Radio
        name="malcom"
        value="idk"
        onChange={onChange}
        checked={state == 'idk'}
      >
        I don't know
      </Radio>
      <p>Current Value: {state}</p>
    </>
  );
};

export const AllRadio = () => {
  return (
    <>
      <h2>Radio Kitchen Sink</h2>
      <Section>
        <p>Basic Radio</p>
        <Radio name="greeting">Hello</Radio>
        <Radio name="greeting">Hola</Radio>
        <Radio name="greeting">Bonjour</Radio>
      </Section>
      <section>
        <p>Basic Controlled Radio</p>
        <ControlledRadio />
      </section>
      <section>
        <p>Basic self-managed Radio</p>
        <ManualControlRadio />
      </section>
    </>
  );
};
