import { createSmokeTests } from "../../../tests/testingUtils";
import { useCheckboxState } from "../../checkbox/Checkbox";
import { Switch } from "../Switch";

describe("Switch tests", () => {
  createSmokeTests(Switch, useCheckboxState);
});
