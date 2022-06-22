import { renderHook } from '@testing-library/react';
import { nanoid } from 'nanoid/non-secure';
import { useUUID } from '../useUUID';

jest.mock('nanoid/non-secure');
(nanoid as any).mockImplementation(() => '1234');

afterAll(() => {
  (nanoid as any).mockRestore();
});

describe('useUUID tests', () => {
  it('should generate a UUID', () => {
    const { result } = renderHook(() => useUUID());
    expect(result.current).toEqual('pcr_1234');
  });
});
