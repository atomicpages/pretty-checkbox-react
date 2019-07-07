# Changelog

## 2.0.0
* Changes
    * Renamed `style` to `variant`
    * Renamed `Input` to `BaseInput`
* Removals
    * Removed export for `BaseInput`
    * Removed default value for `BaseInput` `type` prop
    * Removed `icon`, use `icon={{ type: 'icon', icon: Node }}`
    * Removed `image`, use `icon={{ type: 'image', icon: Node }}`
    * Removed `svg`, use `icon={{ type: 'svg', icon: Node }}`
* Additions
    * Added WA-ARIA attributes for radio, checkbox, etc.
    * Added default state management for all components
        * `useCheckboxState(boolean | 'indeterminate' | any[])`
        * `useRadioState(boolean | string)`
        * `useSwitchState(boolean | string | any[])`
    * Adding e2e test suite 🤭
* Operational Changes
    * Switching to monorepo so documenting things is easier
    * Switching to Circle CI
