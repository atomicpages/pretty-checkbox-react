import * as React from 'react';
import { renderHook } from '@testing-library/react-hooks';
import { useMemoizedIcon } from '../useMemoizedIcon';

const DummyIcon = () => <i className="icon" />;

const render = (icon: any) => {
    const { result } = renderHook(() => useMemoizedIcon(icon));
    const [iconType, memoizedIcon] = result.current;

    return { result, iconType, memoizedIcon };
};

describe('useMemoizedIcon hook tests', () => {
    it('should return a memoized icon element', () => {
        const { iconType, memoizedIcon } = render(<i className="dummy" />);

        expect(memoizedIcon).toBeDefined();
        expect(iconType).toMatchObject({ current: 'icon' });
    });

    it('should allow function components to be passed as icons', () => {
        // @ts-ignore
        global.console = { warn: jest.fn() };
        render(<DummyIcon />);

        expect(console.warn).toHaveBeenCalledTimes(2);
    });

    it('should return the correct svg type', () => {
        const { iconType } = render(<svg className="dummy" />);
        expect(iconType).toMatchObject({ current: 'svg' });
    });

    it('should return the correct svg type', () => {
        const { iconType } = render(<img className="dummy" alt="foo" />);
        expect(iconType).toMatchObject({ current: 'image' });
    });
});
