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
import { Component, View, onInit, onChange } from 'angular2/angular2';
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
        this.component ? this._component = this.node.addComponent(this.component) : false;
    }
    onChange(change) {
        change.sizemode ? this.setSizeMode(change.sizemode.currentValue) : false;
        change.absolutesize ? this.setAbsoluteSize(change.absolutesize.currentValue) : false;
        change.proportionalsize ? this.setProportionalSize(change.proportionalsize.currentValue) : false;
        change.differentialsize ? this.setDifferentialSize(change.differentialsize.currentValue) : false;
        change.scale ? this.setScale(change.scale.currentValue) : false;
        change.mountpoint ? this.setMountPoint(change.mountpoint.currentValue) : false;
        change.origin ? this.setOrigin(change.origin.currentValue) : false;
        change.align ? this.setAlign(change.align.currentValue) : false;
        change.position ? this.setPosition(change.position.currentValue) : false;
        change.rotate ? this.setRotation(change.rotate.currentValue) : false;
        change.opacity ? this.setOpacity(change.opacity.currentValue) : false;
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
            'opacity'],
        lifecycle: [onInit, onChange]
    }),
    View({
        template: ``
    }), 
    __metadata('design:paramtypes', [])
], FaNode);
