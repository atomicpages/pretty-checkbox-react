import * as React from 'react';

import { renderHook } from '@testing-library/react-hooks';
import { useIcon } from '../useIcon';

describe('useIcon hook tests', () => {
  it('should return an object when icon is not defined', () => {
    const { result } = renderHook(() => useIcon(undefined));

    expect(result.current).toMatchObject({});
  });

  it('should return an icon with a custom classname and type', () => {
    const { result } = renderHook(() =>
      useIcon(
        React.createElement('i', {
          className: 'far far-star',
        }) as React.ReactElement<any, any>
      )
    );

    expect(result.current).toMatchObject({ iconType: 'icon' });
    expect(result.current.icon?.props.className).toContain('icon');
  });

  it('should work with svg elements', () => {
    const { result } = renderHook(() =>
      useIcon(
        React.createElement('svg', {
          className: 'far far-star',
        }) as React.ReactElement<any, any>
      )
    );

    expect(result.current).toMatchObject({ iconType: 'svg' });
  });

  it('should work with img elements', () => {
    const { result } = renderHook(() =>
      useIcon(
        React.createElement('img', {
          className: 'far far-star',
        }) as React.ReactElement<any, any>
      )
    );

    expect(result.current).toMatchObject({ iconType: 'image' });
  });

  it("should work when components don't define a class name", () => {
    const Rectangle = () => (
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" className="svg">
        <rect width="100%" height="100%" fill="red" />
      </svg>
    );

    const instance = React.createElement(Rectangle);

    const { result } = renderHook(() =>
      useIcon(instance as React.ReactElement<any, any>)
    );

    expect(result.current.icon).toEqual(instance);
  });

  it('should work when icon contain the type as a substring', () => {
    const { result } = renderHook(() =>
      useIcon(
        React.createElement('i', {
          className: 'myicon myicon-star',
        }) as React.ReactElement<any, any>
      )
    );

    expect(result.current).toMatchObject({ iconType: 'icon' });
    expect(result.current.icon?.props.className).toContain('icon');
  });
});
