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
export let FaGestureHandler = class {
    constructor(parent) {
        let GestureHandler = famous.components.GestureHandler;
        this.node = parent.node;
        this.gestures = new GestureHandler(this.node);
    }
    onInit() {
        var g = this;
        this.drag ? this.gestures.on({ event: 'drag' }, g.drag.currentValue.bind(this.node)) : false;
        this.tap ? this.gestures.on({ event: 'tap' }, g.tap.currentValue.bind(this.node)) : false;
        this.rotate ? this.gestures.on({ event: 'rotate' }, g.rotate.currentValue.bind(this.node)) : false;
        this.pinch ? this.gestures.on({ event: 'drag' }, g.pinch.currentValue.bind(this.node)) : false;
    }
    onChange(changes) {
        // add some gestures
    }
};
FaGestureHandler = __decorate([
    Component({
        selector: 'fa-gesture-handler',
        properties: ['drag', 'tap', 'rotate', 'pinch']
    }),
    View({
        template: ``
    }),
    __param(0, Host()), 
    __metadata('design:paramtypes', [FaNode])
], FaGestureHandler);
