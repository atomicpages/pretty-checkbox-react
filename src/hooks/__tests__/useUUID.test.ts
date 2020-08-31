import { renderHook } from '@testing-library/react-hooks';
import { nanoid } from 'nanoid/non-secure';
import { useUUID } from '../useUUID';

jest.mock('nanoid/non-secure');

// @ts-ignore
nanoid.mockImplementation(() => '1234');

afterAll(() => {
    // @ts-ignore
    nanoid.mockRestore();
});

describe('useUUID tests', () => {
    it('should generate a UUID', () => {
        const { result } = renderHook(() => useUUID());
        expect(result.current).toEqual('pcr_1234');
    });
});
