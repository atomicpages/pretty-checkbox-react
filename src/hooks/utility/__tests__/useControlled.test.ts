import { useControlled } from '../useControlled';

describe('useControlled tests', () => {
  it('should preset value when undefined', () => {
    expect(useControlled({ setState: () => null })).toMatchObject({
      value: '',
    });
  });

  it('should use defaultValue when defined', () => {
    expect(
      useControlled({ setState: () => null, defaultValue: 'hello' })
    ).toMatchObject({
      value: 'hello',
    });
  });

  it('should use value when defined', () => {
    expect(
      useControlled({ setState: () => null, value: 'hello' })
    ).toMatchObject({
      value: 'hello',
    });
  });

  it('should synchronize checked to state when state is an array', () => {
    const opts = { setState: () => null, value: 'a', state: ['a', 'b', 'c'] };
    expect(useControlled(opts)).toMatchObject({ checked: true });

    expect(
      useControlled({
        ...opts,
        value: 'abc',
      })
    ).toMatchObject({ checked: false });
  });

  it('should synchronized checked to state when state is a boolean primitive', () => {
    const opts = { setState: () => null, value: 'a', state: true };
    expect(useControlled(opts)).toMatchObject({ checked: true });

    expect(
      useControlled({
        ...opts,
        state: false,
      })
    ).toMatchObject({ checked: false });
  });

  it('should bypass synchronization when checked is defined', () => {
    const opts = { setState: () => null, checked: false, state: true };
    expect(useControlled(opts)).toMatchObject({ checked: false });
  });

  it('should return checked and value', () => {
    expect(useControlled({})).toMatchObject({
      checked: undefined,
      value: undefined,
    });
  });
});
