System.register(["angular2/core", "angular2/platform/browser", "./panel/main.panel.component"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, browser_1, main_panel_component_1;
    var SandboxApp;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (main_panel_component_1_1) {
                main_panel_component_1 = main_panel_component_1_1;
            }],
        execute: function() {
            SandboxApp = (function () {
                function SandboxApp() {
                    this.title = "Main Panel";
                }
                SandboxApp = __decorate([
                    core_1.Component({
                        selector: "sandbox-app",
                        templateUrl: "src/app.html",
                        styleUrls: ["src/app.css"],
                        directives: [
                            main_panel_component_1.MainPanel
                        ]
                    }), 
                    __metadata('design:paramtypes', [])
                ], SandboxApp);
                return SandboxApp;
            }());
            exports_1("SandboxApp", SandboxApp);
            browser_1.bootstrap(SandboxApp).catch(function (err) { return console.error(err); });
        }
    }
});
