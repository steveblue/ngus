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
};System.register(['angular2/angular2', '../service/famous'], function(exports_1) {
    var angular2_1, famous_1;
    var FaNode;
    return {
        setters:[
            function (_angular2_1) {
                angular2_1 = _angular2_1;
            },
            function (_famous_1) {
                famous_1 = _famous_1;
            }],
        execute: function() {
            FaNode = (function () {
                function FaNode() {
                    this.node = famous_1.$famous.get().scene.addChild();
                }
                FaNode.prototype.setMountPoint = function (arr) {
                    this.node.setMountPoint(arr[0], arr[1], arr[2]);
                };
                FaNode.prototype.setOrigin = function (arr) {
                    this.node.setOrigin(arr[0], arr[1], arr[2]);
                };
                FaNode.prototype.setAlign = function (arr) {
                    this.node.setAlign(arr[0], arr[1], arr[2]);
                };
                FaNode.prototype.setPosition = function (arr) {
                    this.node.setPosition(arr[0], arr[1], arr[2]);
                };
                FaNode.prototype.setRotation = function (arr) {
                    this.node.setRotation(arr[0], arr[1], arr[2]);
                };
                FaNode.prototype.setScale = function (arr) {
                    this.node.setScale(arr[0], arr[1], arr[2]);
                };
                FaNode.prototype.setSizeMode = function (arr) {
                    this.node.setSizeMode(arr[0], arr[1], arr[2]);
                };
                FaNode.prototype.setAbsoluteSize = function (arr) {
                    this.node.setAbsoluteSize(arr[0], arr[1], arr[2]);
                };
                FaNode.prototype.setProportionalSize = function (arr) {
                    this.node.setProportionalSize(arr[0], arr[1], arr[2]);
                };
                FaNode.prototype.setDifferentialSize = function (arr) {
                    this.node.setDifferentialSize(arr[0], arr[1], arr[2]);
                };
                FaNode.prototype.setOpacity = function (o) {
                    this.node.setOpacity(o);
                };
                FaNode.prototype.onInit = function () {
                    this.sizemode ? this.setSizeMode(this.sizemode) : false;
                    this.absolutesize ? this.setAbsoluteSize(this.absolutesize) : false;
                    this.proportionalsize ? this.setProportionalSize(this.proportionalsize) : false;
                    this.differentialsize ? this.setDifferentialSize(this.differentialsize) : false;
                    this.scale ? this.setScale(this.scale) : false;
                    this.mountpoint ? this.setMountPoint(this.mountpoint) : false;
                    this.origin ? this.setOrigin(this.origin) : false;
                    this.align ? this.setAlign(this.align) : false;
                    this.position ? this.setPosition(this.position) : false;
                    this.rotate ? this.setRotation(this.rotate) : false;
                    this.opacity ? this.setOpacity(this.opacity) : false;
                    this.component ? this._component = this.node.addComponent(this.component) : false;
                };
                FaNode = __decorate([
                    angular2_1.Component({
                        selector: 'fa-node',
                        properties: ['component',
                            'mountpoint',
                            'origin',
                            'align',
                            'position',
                            'rotate',
                            'scale',
                            'sizemode',
                            'absolutesize',
                            'proportionalsize',
                            'differentialsize',
                            'opacity']
                    }),
                    angular2_1.View({
                        template: ""
                    }), 
                    __metadata('design:paramtypes', [])
                ], FaNode);
                return FaNode;
            })();
            exports_1("FaNode", FaNode);
        }
    }
});
