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
var angular2_1 = require('angular2/angular2');
var famous_1 = require('../service/famous');
var FaNode = (function () {
    function FaNode() {
        this.node = famous_1.$famous.get().scene.addChild();
    }
    FaNode.prototype.setMountPoint = function () {
        var n = this;
        this.node.setMountPoint(this.mountpoint[0], this.mountpoint[1], this.mountpoint[2]);
    };
    FaNode.prototype.setOrigin = function () {
        var n = this;
        this.node.setOrigin(this.origin[0], this.origin[1], this.origin[2]);
    };
    FaNode.prototype.setAlign = function () {
        var n = this;
        this.node.setAlign(this.align[0], this.align[1], this.align[2]);
    };
    FaNode.prototype.setPosition = function () {
        this.node.setPosition(this.position[0], this.position[1], this.position[2]);
    };
    FaNode.prototype.setRotation = function () {
        this.node.setRotation(this.rotate[0], this.rotate[1], this.rotate[2]);
    };
    FaNode.prototype.setScale = function () {
        this.node.setScale(this.scale[0], this.scale[1], this.scale[2]);
    };
    FaNode.prototype.setSizeMode = function () {
        this.node.setSizeMode(this.sizemode[0], this.sizemode[1], this.sizemode[2]);
    };
    FaNode.prototype.setAbsoluteSize = function () {
        this.node.setAbsoluteSize(this.absolutesize[0], this.absolutesize[1], this.absolutesize[2]);
    };
    FaNode.prototype.setProportionalSize = function () {
        this.node.setProportionalSize(this.proportionalsize[0], this.proportionalsize[1], this.proportionalsize[2]);
    };
    FaNode.prototype.setDifferentialSize = function () {
        this.node.setDifferentialSize(this.differentialsize[0], this.differentialsize[1], this.differentialsize[2]);
    };
    FaNode.prototype.setOpacity = function () {
        this.node.setOpacity(this.opacity);
    };
    FaNode.prototype.onInit = function () {
        this.sizemode ? this.setSizeMode() : false;
        this.absolutesize ? this.setAbsoluteSize() : false;
        this.proportionalsize ? this.setProportionalSize() : false;
        this.differentialsize ? this.setDifferentialSize() : false;
        this.scale ? this.setScale() : false;
        this.mountpoint ? this.setMountPoint() : false;
        this.origin ? this.setOrigin() : false;
        this.align ? this.setAlign() : false;
        this.position ? this.setPosition() : false;
        this.rotate ? this.setRotation() : false;
        this.opacity ? this.setOpacity() : false;
        this._component = this.node.addComponent(this.component);
    };
    FaNode.prototype.onChange = function (change) {
        change.sizemode ? this.setSizeMode() : false;
        change.absolutesize ? this.setAbsoluteSize() : false;
        change.proportionalsize ? this.setProportionalSize() : false;
        change.differentialsize ? this.setDifferentialSize() : false;
        change.scale ? this.setScale() : false;
        change.mountpoint ? this.setMountPoint() : false;
        change.origin ? this.setOrigin() : false;
        change.align ? this.setAlign() : false;
        change.position ? this.setPosition() : false;
        change.rotate ? this.setRotation() : false;
        change.opacity ? this.setOpacity() : false;
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
                'opacity'],
            lifecycle: [angular2_1.onInit, angular2_1.onChange]
        }),
        angular2_1.View({
            template: ""
        }), 
        __metadata('design:paramtypes', [])
    ], FaNode);
    return FaNode;
})();
exports.FaNode = FaNode;
