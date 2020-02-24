import React from 'react';
import { isBoolean, getChecked, isDefaultStyle, getClassNames } from '../utils/utils';
import { CommonControlledProps } from '../../types/CommonProps';

describe('utils tests', () => {
    it('should check for undefined values as booleans', () => {
        expect(isBoolean(undefined)).toBe(true);
        expect(isBoolean(null)).toBe(false);
        expect(isBoolean('abc')).toBe(false);
    });

    describe('getChecked tests', () => {
        const props: CommonControlledProps<any> = {
            disabled: false,
            locked: false,
            state: 'other',
            value: 'other',
            type: 'checkbox',
            onChange: jest.fn(),
        };

        it('should return true when item is in array', () => {
            expect(
                getChecked({
                    ...props,
                    state: [1, 2, 3],
                    value: 1,
                })
            ).toBe(true);
        });

        it('should return a boolean when value is undefined', () => {
            expect(
                getChecked({
                    ...props,
                    state: false,
                    value: undefined,
                })
            ).toBe(false);
        });

        it('should return true when radio state and value match', () => {
            expect(
                getChecked({
                    ...props,
                    type: 'radio',
                    state: 'o',
                    value: 'o',
                })
            ).toBe(true);
        });

        it('should return state when all other conditions fail', () => {
            expect(
                getChecked({
                    ...props,
                    state: 'abc',
                    value: 'o',
                })
            ).toBe('abc');
        });

        it('should return false when disabled or locked', () => {
            expect(
                getChecked({
                    ...props,
                    disabled: true,
                })
            ).toBe(false);

            expect(
                getChecked({
                    ...props,
                    locked: true,
                })
            ).toBe(false);
        });
    });

    describe('isDefaultStyle tests', () => {
        it('should return false on all animations other than smooth', () => {
            expect(isDefaultStyle(undefined)).toBe(true);
            expect(isDefaultStyle('smooth')).toBe(true);
            expect(isDefaultStyle('tada')).toBe(false);
            expect(isDefaultStyle('jelly')).toBe(false);
            expect(isDefaultStyle('rotate')).toBe(false);
            expect(isDefaultStyle('pulse')).toBe(false);
        });

        it('should return false when an icon is defined', () => {
            expect(isDefaultStyle(undefined, React.createElement('i'))).toBe(false);
        });
    });

    describe('getClassNames tests', () => {
        const props = {
            state: false,
            onChange: jest.fn(),
        };

        it('should have PC defaults', () => {
            expect(getClassNames(props)).toEqual('pretty p-default');
        });

        it('should not be default when switch is defined', () => {
            expect(
                getClassNames({
                    ...props,
                    isSwitch: true,
                })
            ).toEqual('pretty p-switch');
        });

        it('should be locked on locked prop or readOnly prop', () => {
            expect(
                getClassNames({
                    ...props,
                    locked: true,
                })
            ).toEqual('pretty p-default p-locked');

            expect(
                getClassNames({
                    ...props,
                    readOnly: true,
                })
            ).toEqual('pretty p-default p-locked');
        });

        it('should be plain', () => {
            expect(
                getClassNames({
                    ...props,
                    plain: true,
                })
            ).toEqual('pretty p-default p-plain');
        });

        it('should pass shapes and fills', () => {
            expect(
                getClassNames({
                    ...props,
                    shape: 'curve',
                    fill: 'thick',
                })
            ).toEqual('pretty p-default p-curve p-thick');
        });

        it('should pass animations', () => {
            expect(
                getClassNames({
                    ...props,
                    animation: 'pulse',
                    shape: 'curve',
                })
            ).toEqual('pretty p-curve p-pulse');
        });

        it('should pass icon types', () => {
            expect(
                getClassNames({
                    ...props,
                    iconType: 'svg',
                    // @ts-ignore
                    icon: React.createElement('svg'),
                })
            ).toEqual('pretty p-svg');
        });
    });
});
