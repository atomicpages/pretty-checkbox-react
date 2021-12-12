import * as React from 'react';
import clsx from 'clsx';

import { Checkbox, useCheckboxState } from '../../../src/index';
import { Section } from '../components/Section';
import { useTreeState } from '../hooks/useTreeState';

const IndeterminateCheckbox = () => {
  const checkbox = useCheckboxState({ state: 'indeterminate' });

  return (
    <Checkbox
      {...checkbox}
      icon={
        <i
          className={clsx('mdi', {
            'mdi-minus': checkbox.state === 'indeterminate',
            'mdi-check': checkbox.state === true,
          })}
        />
      }
    >
      Controlled Indeterminate Checkbox
    </Checkbox>
  );
};

const values = ['Apple', 'Orange', 'Watermelon'];

const Tree = () => {
  // be sure to pass in a copy of values
  const { group, items } = useTreeState({ values: [...values] });

  return (
    <ul>
      <li>
        <Checkbox
          icon={
            <i
              className={clsx('mdi', {
                'mdi-minus': group.state === 'indeterminate',
                'mdi-check': group.state === true,
              })}
            />
          }
          {...group}
        >
          Fruits
        </Checkbox>
      </li>
      <ul>
        {values.map((value, i) => (
          <li key={i}>
            <Checkbox
              {...items}
              value={value}
              icon={<i className="mdi mdi-check" />}
            >
              {value}
            </Checkbox>
          </li>
        ))}
      </ul>
    </ul>
  );
};

Tree.whyDidYouRender = true;

export const Indeterminate = () => {
  return (
    <>
      <h2>Various Indeterminate Checkboxes</h2>
      <p>
        Indeterminate checkboxes are not intuitive in React. The manual way of
        doing this is attaching a <code>ref</code> to the underlying input and
        setting
        <code>checked</code> and <code>indeterminate</code> properties manually.
      </p>
      <Section>
        <Checkbox indeterminate icon={<i className="mdi mdi-minus" />}>
          Indeterminate by prop
        </Checkbox>
      </Section>
      <Section>
        <IndeterminateCheckbox />
      </Section>
      <Section>
        <Tree />
      </Section>
    </>
  );
};
