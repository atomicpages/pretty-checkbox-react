# Changelog

## 2.0.0
* Renamed `style` to `variant`
* Renamed `Input` to `BaseInput`
* Removed default value for `BaseInput` `type` prop
* Removed `icon`, use `icon={{ type: 'icon', icon: Node }}`
* Removed `image`, use `icon={{ type: 'image', icon: Node }}`
* Removed `svg`, use `icon={{ type: 'svg', icon: Node }}`
* Added WA-ARIA attributes for radio, checkbox, etc.
* Added new hook-based API for exposing state to you
    * `useCheckboxState(boolean | 'indeterminate')`
    * `useRadioState(boolean)`
    * `useSwitchState(boolean)`
* Switching to monorepo so documenting things is easier
