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
import { Component, View, Host } from 'angular2/angular2';
import { FaNode } from '../core/node';
export let FaCamera = class {
    constructor(parent) {
        var Camera = famous.components.Camera;
        this.camera = new Camera(parent.node);
    }
    onInit() {
        this.depth ? this.camera.setDepth(this.depth) : false;
    }
    onChange(changes) {
    }
};
FaCamera = __decorate([
    Component({
        selector: 'fa-camera',
        properties: ['depth']
    }),
    View({
        template: ``
    }),
    __param(0, Host()), 
    __metadata('design:paramtypes', [FaNode])
], FaCamera);
