import {
  describe,
  expect,
  it,
  xit,
  inject,
  beforeEachProviders
} from "angular2/testing";
import {ButtonSwitch} from "./switch.button.component";

export function main() {
  describe("ButtonSwitch", () => {
    beforeEachProviders(() => [
      ButtonSwitch
    ]);
    // manually instantiate ButtonSwitch
    it("should toggle off if it is on", () => {
      let buttonSwitch = new ButtonSwitch();
      buttonSwitch.buttonOn = true;
      buttonSwitch.toggle();
      expect(buttonSwitch.buttonOn).toBe(false);
    });
  });
}