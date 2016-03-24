import {
  Component,
  View
} from "angular2/core";
import {NgClass} from "angular2/common";

@Component({
  selector: "button-switch",
  inputs: [
    "isDisabled"
  ]
})
@View({
  templateUrl: "src/button/switch.button.component.html",
  styleUrls: ["src/button/switch.button.component.css"],
  directives: [
    NgClass
  ]
})
export class ButtonSwitch {
  buttonOn: boolean = true;
  toggle() {
    if(confirm("Are you sure?") === true) {
      // change the button state if the user clicks "OK"
      this.buttonOn = !this.buttonOn;
    } else {
      // don't change the button state
    }
  }
}