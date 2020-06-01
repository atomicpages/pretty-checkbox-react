import { useLocked } from '../useLocked';

describe('useLocked tests', () => {
    it('should disable pointer events when locked', () => {
        expect(useLocked({ locked: true })).toMatchObject({ pointerEvents: 'none' });
    });

    it('should merge pre-existing styles', () => {
        expect(
            useLocked({ locked: true, style: { display: 'flex', flex: '1 0 100%' } })
        ).toMatchObject({
            pointerEvents: 'none',
            display: 'flex',
            flex: '1 0 100%',
        });
    });

    it('should return pre-existing styles when not locked', () => {
        expect(
            useLocked({ locked: false, style: { display: 'flex', flex: '1 0 100%' } })
        ).toMatchObject({
            display: 'flex',
            flex: '1 0 100%',
        });
    });
});
