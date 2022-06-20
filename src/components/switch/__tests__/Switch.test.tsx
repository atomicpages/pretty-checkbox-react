import { Switch } from '../Switch';
import { createSmokeTests } from '../../../tests/testingUtils';

import { useCheckboxState } from '../../checkbox/useCheckboxState';

describe('Switch tests', () => {
  createSmokeTests(Switch, useCheckboxState);
});
