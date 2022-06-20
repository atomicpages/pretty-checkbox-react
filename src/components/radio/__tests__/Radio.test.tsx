import { Radio } from '../Radio';
import { createSmokeTests } from '../../../tests/testingUtils';
import { useRadioState } from '../useRadioState';

describe('Radio tests', () => {
  createSmokeTests(Radio, useRadioState);
});
