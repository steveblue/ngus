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
};
define(["require", "exports", 'angular2/angular2', '../core/node'], function (require, exports, angular2_1, node_1) {
    var FaMesh = (function () {
        function FaMesh(parent) {
            var Mesh = famous.webglRenderables.Mesh;
            this.mesh = new Mesh(parent.node);
        }
        FaMesh.prototype.onInit = function () {
            var Color = famous.utilities.Color;
            if (this.detail && this.geometry) {
                this.mesh.setGeometry(this.geometry, { detail: this.detail });
            }
            else if (this.geometry) {
                this.mesh.setGeometry(this.geometry);
            }
            this.color ? this.mesh.setBaseColor(new Color(this.color)) : this.mesh.setBaseColor(new Color('#FAFAFA'));
        };
        FaMesh = __decorate([
            angular2_1.Component({
                selector: 'fa-mesh',
                properties: ['geometry', 'color', 'detail']
            }),
            angular2_1.View({
                template: ""
            }),
            __param(0, angular2_1.Host()), 
            __metadata('design:paramtypes', [node_1.FaNode])
        ], FaMesh);
        return FaMesh;
    })();
    exports.FaMesh = FaMesh;
});
