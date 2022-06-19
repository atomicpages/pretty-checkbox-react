import * as React from 'react';
import { render, screen } from '@testing-library/react';

import { State } from '../State';

describe('State tests', () => {
  it('should render without errors', () => {
    expect(() => {
      render(<State>Hello</State>);
    }).not.toThrow();
  });

  it('should render the label', () => {
    render(<State>Hello</State>);
    expect(screen.getByText('Hello')).not.toBeNull();
  });

  it('should add colors', () => {
    render(
      <State data-testid="test" color="danger">
        Danger!
      </State>
    );

    expect(screen.getByTestId('test').className.includes('danger')).toBe(true);
  });
});
