import {Component} from "angular2/core";
import {ButtonSwitch} from "../button/switch.button.component";

@Component({
  selector: "large-well",
  templateUrl: "src/well/large.well.component.html",
  styleUrls: ["src/well/large.well.component.css"],
  directives: [
    ButtonSwitch
  ]
})
export class LargeWell {
  
}