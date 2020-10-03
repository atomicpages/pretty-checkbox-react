---
id: testing
title: Testing
---

Writing unit tests is always good idea :wink: and with PCR testing is a first-class citizen.

## Recommended Stack

While you're welcome to choose your own stack, PCR uses [`@testing-library/react`](https://www.npmjs.com/package/@testing-library/react) and [jest](https://jestjs.io/).

## Examples

Let's explore common testing scenarios using testing-library and jest :+1:

### Firing Events

99% of the time we want to write tests around our input controls before or after some change event. PCR makes this so easy you have three ways you can get this done. Keep in mind this works because PCR is _not_ a soft control, it uses standard HTML elements to control the behavior which makes testing delightful 🧁

### Selecting by Label Text

Using testing-library or some other tool, PCR "connects" the label with the input control so you can select the label text and fire your click event:

```jsx {9,12}
import { render, fireEvent } from '@testing-library/react';
import { Checkbox } from 'pretty-checkbox-react';

describe('Checkbox tests', () => {
    it('should trigger a change when clicked', () => {
        const onChange = jest.fn();

        const { getByLabelText } = render(
            <Checkbox onChange={onChange}>Hello</Checkbox>
        );

        fireEvent.click(getByLabelText('Hello'));
        expect(onChange).toHaveBeenCalledTimes(1);
    });
});
```

### Selecting by Value

What about when a label doesn't exist but a value exists? Not a problem. Testing-library has a selector for that:

```jsx {9,12}
import { render, fireEvent } from '@testing-library/react';
import { Checkbox } from 'pretty-checkbox-react';

describe('Checkbox tests', () => {
    it('should trigger a change when clicked', () => {
        const onChange = jest.fn();

        const { getByValue } = render(
            <Checkbox onChange={onChange} value="terms" />
        );

        fireEvent.click(getByValue('terms'));
        expect(onChange).toHaveBeenCalledTimes(1);
    });
});
```


## Accessing `.pretty`

In rare cases access to the `.pretty` element might be required &mdash; perhaps due to implementation details or some other customizations. Creating a _stable reference_ to PCR is the preferred approach. Using testing-library we can create our own `data-testid` and use that as a reference point.

```jsx {8}
import { render, fireEvent } from '@testing-library/react';
import { Checkbox } from 'pretty-checkbox-react';

describe('Checkbox tests', () => {
    it('should trigger a change when clicked', () => {
        const { getByTestId } = render(<Checkbox data-testid="my-cb" />);

        expect(getByTestId('my-cb').parentElement.className).toContain('pretty')
    });
});
```

## Snapshot Testing

PCR uses a UUID generator which requires a little extra setup to make snapshot testing work. PCR uses [`nanoid@3`](https://www.npmjs.com/package/nanoid) non-secure mode for generation. If you're using jest or some other tool you can tell your test runner to mock the nanoid module. Here's an example using jest:

```jsx {3,5-6}
import { render, fireEvent } from '@testing-library/react';
import { Checkbox } from 'pretty-checkbox-react';
import { nanoid } from 'nanoid/non-secure';

jest.mock("nanoid/non-secure");
nanoid.mockImplementation(() => "123");

describe('Checkbox tests', () => {
    it('should do something', () => {
        const { container } = render(<Checkbox />);

        // ... make useful assertions here ...
        expect(container).toMatchSnapshot();
    });
});
```
