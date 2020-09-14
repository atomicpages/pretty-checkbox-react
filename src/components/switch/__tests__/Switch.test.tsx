import { Switch } from '../Switch';
import { createSmokeTests } from '../../../../tests/testingUtils';

// import { useRadioState } from '../../radio/useRadioState';
import { useCheckboxState } from '../../checkbox/Checkbox';

describe('Switch tests', () => {
    createSmokeTests(Switch, useCheckboxState);
});
