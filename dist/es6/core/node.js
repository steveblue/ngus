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
import { Component, View } from 'angular2/angular2';
import { $famous } from '../service/famous';
export let FaNode = class {
    constructor() {
        this.node = $famous.get().scene.addChild();
    }
    setMountPoint(arr) {
        this.node.setMountPoint(arr[0], arr[1], arr[2]);
    }
    setOrigin(arr) {
        this.node.setOrigin(arr[0], arr[1], arr[2]);
    }
    setAlign(arr) {
        this.node.setAlign(arr[0], arr[1], arr[2]);
    }
    setPosition(arr) {
        this.node.setPosition(arr[0], arr[1], arr[2]);
    }
    setRotation(arr) {
        this.node.setRotation(arr[0], arr[1], arr[2]);
    }
    setScale(arr) {
        this.node.setScale(arr[0], arr[1], arr[2]);
    }
    setSizeMode(arr) {
        this.node.setSizeMode(arr[0], arr[1], arr[2]);
    }
    setAbsoluteSize(arr) {
        this.node.setAbsoluteSize(arr[0], arr[1], arr[2]);
    }
    setProportionalSize(arr) {
        this.node.setProportionalSize(arr[0], arr[1], arr[2]);
    }
    setDifferentialSize(arr) {
        this.node.setDifferentialSize(arr[0], arr[1], arr[2]);
    }
    setOpacity(o) {
        this.node.setOpacity(o);
    }
    onInit() {
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
    }
};
FaNode = __decorate([
    Component({
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
    View({
        template: ``
    }), 
    __metadata('design:paramtypes', [])
], FaNode);
