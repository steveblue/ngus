var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};System.register(['angular2/angular2', '../core/node'], function(exports_1) {
    var angular2_1, node_1;
    var FaCamera;
    return {
        setters:[
            function (_angular2_1) {
                angular2_1 = _angular2_1;
            },
            function (_node_1) {
                node_1 = _node_1;
            }],
        execute: function() {
            FaCamera = (function () {
                function FaCamera(parent) {
                    var Camera = famous.components.Camera;
                    this.camera = new Camera(parent.node);
                }
                FaCamera.prototype.onInit = function () {
                    this.depth ? this.camera.setDepth(this.depth) : false;
                };
                FaCamera.prototype.onChange = function (changes) {
                };
                FaCamera = __decorate([
                    angular2_1.Component({
                        selector: 'fa-camera',
                        properties: ['depth']
                    }),
                    angular2_1.View({
                        template: ""
                    }),
                    __param(0, angular2_1.Host()), 
                    __metadata('design:paramtypes', [node_1.FaNode])
                ], FaCamera);
                return FaCamera;
            })();
            exports_1("FaCamera", FaCamera);
        }
    }
});
