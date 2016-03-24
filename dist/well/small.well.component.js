System.register(["angular2/core"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var core_1;
    var SmallWell;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            core_1.Component({
                selector: "small-well",
                templateUrl: "src/well/small.well.component.html",
                styleUrls: ["src/well/small.well.component.css"]
            });
            SmallWell = (function () {
                function SmallWell() {
                }
                return SmallWell;
            }());
            exports_1("SmallWell", SmallWell);
        }
    }
});
