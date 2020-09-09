import { useClassNames } from '../useClassNames';

describe('useClassNames tests', () => {
    it('should return default styles', () => {
        expect(useClassNames({})).toMatchObject({
            'p-default': true,
            'p-bigger': undefined,
        });
    });

    it('should not be a default when animation tada, rotate, or jelly', () => {
        const trials = {
            tada: false,
            rotate: false,
            jelly: false,
            pulse: true,
            smooth: true,
            '': true,
        };

        Object.keys(trials).forEach(key => {
            // @ts-ignore
            expect(useClassNames({ animation: key })).toMatchObject({
                // @ts-ignore
                'p-default': trials[key],
            });
        });
    });

    it('should not be default when switch is defined', () => {
        expect(useClassNames({}, true)).toMatchObject({
            'p-default': false,
        });
    });

    it('should not be default when an icon is used', () => {
        expect(useClassNames({ iconType: 'svg' })).toMatchObject({
            'p-default': false,
        });
    });

    it('should return an expected object', () => {
        expect(
            useClassNames({
                animation: 'pulse',
                shape: 'round',
                variant: 'thick',
            })
        ).toMatchInlineSnapshot(`
            Object {
              "p-bigger": undefined,
              "p-default": true,
              "p-has-focus": undefined,
              "p-locked": undefined,
              "p-plain": undefined,
              "p-pulse": "pulse",
              "p-round": "round",
              "p-thick": "thick",
              "p-undefined": undefined,
            }
        `);
    });
});
