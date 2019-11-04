### Changed

-   Consumer provided `onChange` does not honor a return value. The default `onChange` is called or you control it completely.

### Removed

-   All default exports, all imports are named

### Added

-   Adding new state hooks:
    -   `useCheckboxState`
    -   `useRadioState`
    -   `useSwitchState`

### Dev Internal

-   Moved `__handleCheckboxChange` to `useCheckboxChange` hook (not exported)
-   Moved to typescript for better typing support
-   Adding new internal hooks for shared behavior
