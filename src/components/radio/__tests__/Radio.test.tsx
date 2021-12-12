import { Radio, useRadioState } from '../Radio';
import { createSmokeTests } from '../../../tests/testingUtils';

describe('Radio tests', () => {
  createSmokeTests(Radio, useRadioState);
});
