System.register(["angular2/testing", "./switch.button.component"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var testing_1, switch_button_component_1;
    function main() {
        testing_1.describe("ButtonSwitch", function () {
            testing_1.beforeEachProviders(function () { return [
                switch_button_component_1.ButtonSwitch
            ]; });
            testing_1.it("should toggle off if it is on", function () {
                var buttonSwitch = new switch_button_component_1.ButtonSwitch();
                buttonSwitch.buttonOn = true;
                buttonSwitch.toggle();
                testing_1.expect(buttonSwitch.buttonOn).toBe(false);
            });
        });
    }
    exports_1("main", main);
    return {
        setters:[
            function (testing_1_1) {
                testing_1 = testing_1_1;
            },
            function (switch_button_component_1_1) {
                switch_button_component_1 = switch_button_component_1_1;
            }],
        execute: function() {
        }
    }
});
