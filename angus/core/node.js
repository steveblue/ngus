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
        this.node.setMountPoint(n.mountpoint[0], n.mountpoint[1], n.mountpoint[2]);
    };
    FaNode.prototype.setOrigin = function () {
        var n = this;
        this.node.setOrigin(n.origin[0], n.origin[1], n.origin[2]);
    };
    FaNode.prototype.setAlign = function () {
        var n = this;
        this.node.setAlign(n.align[0], n.align[1], n.align[2]);
    };
    FaNode.prototype.setPosition = function () {
        var n = this;
        this.node.setPosition(n.position[0], n.position[1], n.position[2]);
    };
    FaNode.prototype.setRotation = function () {
        var n = this;
        this.node.setRotation(n.rotation[0], n.rotation[1], n.rotation[2], n.rotation[3]);
    };
    FaNode.prototype.setScale = function () {
        var n = this;
        this.node.setScale(n.scale[0], n.scale[1], n.scale[2]);
    };
    FaNode.prototype.setSizeMode = function () {
        var n = this;
        this.node.setSizeMode(n.sizemode[0], n.sizemode[1], n.sizemode[2]);
    };
    FaNode.prototype.setAbsoluteSize = function () {
        var n = this;
        this.node.setAbsoluteSize(n.absolutesize[0], n.absolutesize[1], n.absolutesize[2]);
    };
    FaNode.prototype.setProportionalSize = function () {
        var n = this;
        this.node.setProportionalSize(n.proportionalsize[0], n.proportionalsize[1], n.proportionalsize[2]);
    };
    FaNode.prototype.setDifferentialSize = function () {
        var n = this;
        this.node.setDifferentialSize(n.differentialsize[0], n.differentialsize[1], n.differentialsize[2]);
    };
    FaNode.prototype.setOpacity = function () {
        var n = this;
        this.node.setOpacity(n.opacity);
    };
    FaNode.prototype.onInit = function () {
        this.mountpoint ? this.setMountPoint() : false;
        this.origin ? this.setOrigin() : false;
        this.align ? this.setAlign() : false;
        this.position ? this.setPosition() : false;
        this.rotation ? this.setRotation() : false;
        this.scale ? this.setScale() : false;
        this.sizemode ? this.setSizeMode() : false;
        this.absolutesize ? this.setAbsoluteSize() : false;
        this.proportionalsize ? this.setProportionalSize() : false;
        this.differentialsize ? this.setDifferentialSize() : false;
        this.opacity ? this.setOpacity() : false;
    };
    FaNode = __decorate([
        angular2_1.Component({
            selector: 'fa-node',
            properties: ['mountpoint',
                'origin',
                'align',
                'position',
                'rotation',
                'scale',
                'sizemode',
                'absolutesize',
                'proportionalsize',
                'differentialsize',
                'opacity'],
            lifecycle: [angular2_1.onInit]
        }),
        angular2_1.View({
            template: ""
        }), 
        __metadata('design:paramtypes', [])
    ], FaNode);
    return FaNode;
})();
exports.FaNode = FaNode;
