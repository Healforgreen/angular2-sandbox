System.register(["angular2/core", ".././button/switch.button.component", ".././well/large.well.component"], function(exports_1, context_1) {
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
    var core_1, switch_button_component_1, large_well_component_1;
    var MainPanel;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (switch_button_component_1_1) {
                switch_button_component_1 = switch_button_component_1_1;
            },
            function (large_well_component_1_1) {
                large_well_component_1 = large_well_component_1_1;
            }],
        execute: function() {
            MainPanel = (function () {
                function MainPanel() {
                }
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], MainPanel.prototype, "heading", void 0);
                MainPanel = __decorate([
                    core_1.Component({
                        selector: "main-panel",
                        templateUrl: "src/panel/main.panel.component.html",
                        styleUrls: ["src/panel/main.panel.component.css"],
                        directives: [
                            switch_button_component_1.ButtonSwitch,
                            large_well_component_1.LargeWell
                        ]
                    }), 
                    __metadata('design:paramtypes', [])
                ], MainPanel);
                return MainPanel;
            }());
            exports_1("MainPanel", MainPanel);
        }
    }
});
