import { createSmokeTests } from "../../../tests/testingUtils";
import { Radio, useRadioState } from "../Radio";

describe("Radio tests", () => {
  createSmokeTests(Radio, useRadioState);
});
