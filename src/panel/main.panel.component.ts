import {
  Component,
  Input
} from "angular2/core";
import {ButtonSwitch} from ".././button/switch.button.component";
import {LargeWell} from ".././well/large.well.component";

@Component({
  selector: "main-panel",
  templateUrl: "src/panel/main.panel.component.html",
  styleUrls: ["src/panel/main.panel.component.css"],
  directives: [
    ButtonSwitch,
    LargeWell
  ]
})
export class MainPanel {
  @Input() heading: string;
  constructor() { }
}