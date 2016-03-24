import {Component} from "angular2/core";
import {bootstrap} from "angular2/platform/browser";
import {MainPanel} from "./panel/main.panel.component";

@Component({
    selector: "sandbox-app",
    templateUrl: "src/app.html",
    styleUrls: ["src/app.css"],
    directives: [
      MainPanel
    ]
})
export class SandboxApp {
  title: string = "Main Panel";
}
bootstrap(SandboxApp).catch(err => console.error(err));