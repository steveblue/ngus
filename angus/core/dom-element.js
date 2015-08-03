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
/// <reference path="../../typings/angular2/angular2.d.ts" />
var angular2_1 = require('angular2/angular2');
var node_1 = require('./node');
var FaDomElement = (function () {
    function FaDomElement(parent) {
        var DOMElement = famous.domRenderables.DOMElement;
        this.element = new DOMElement(parent.node, {
            content: 'Hello World!'
        });
        this.element.setProperty('background-color', 'teal');
    }
    FaDomElement = __decorate([
        angular2_1.Component({
            selector: 'fa-element'
        }),
        angular2_1.View({
            template: ""
        }),
        __param(0, angular2_1.Parent()), 
        __metadata('design:paramtypes', [node_1.FaNode])
    ], FaDomElement);
    return FaDomElement;
})();
exports.FaDomElement = FaDomElement;
