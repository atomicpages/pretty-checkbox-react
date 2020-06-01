import { renderHook } from '@testing-library/react-hooks';
import { nanoid } from 'nanoid';
import { useUUID } from '../useUUID';

jest.mock('nanoid');

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
