import { renderHook } from '@testing-library/react-hooks';
import { useUUID } from '../useUUID';
import { nanoid } from 'nanoid';

jest.mock('nanoid');

describe('useUUID hook tests', () => {
    beforeAll(() => {
        // @ts-ignore
        nanoid.mockImplementation(() => 'testid');
    });

    afterAll(() => {
        jest.restoreAllMocks();
    });

    it('should return a UUID', () => {
        const { result } = renderHook(() => useUUID());

        expect(result.current).toBeDefined();

        expect(result.current).toMatchObject({
            baseId: expect.any(String),
        });

        expect(result.current.baseId).toBe('pcr_testid');
    });
});
