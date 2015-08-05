/// <reference path="typings/angular2/angular2.d.ts" />
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
var famous_1 = require('./ngus/service/famous');
var node_1 = require('./ngus/core/node');
var dom_element_1 = require('./ngus/core/dom-element');
var mesh_1 = require('./ngus/webgl-renderables/mesh');
var App = (function () {
    function App() {
        var app = this;
        var scene = famous_1.$famous.get().scene;
        this.rotate = {
            famous: [0, 0, 0],
            angular: [0, 0, 0]
        };
        this.famousComponent = {
            id: null,
            node: null,
            onMount: function (node) {
                this.id = node.addComponent(this);
                node.requestUpdate(this.id);
                this.node = node;
            },
            onUpdate: function (time) {
                this.node.setRotation(0, time / 832, 0);
                this.node.requestUpdateOnNextTick(this.id);
            }
        };
        this.meshComponent = {
            id: null,
            node: null,
            onMount: function (node) {
                this.id = node.addComponent(this);
                node.requestUpdate(this.id);
                this.node = node;
            },
            onUpdate: function (time) {
                this.node.setRotation(time / 1339, time / 1139, time / 1639);
                this.node.requestUpdateOnNextTick(this.id);
            }
        };
        this.angularComponent = {
            id: null,
            node: null,
            onMount: function (node) {
                this.id = node.addComponent(this);
                node.requestUpdate(this.id);
                this.node = node;
            },
            onUpdate: function (time) {
                this.node.setRotation(0, time / 1139, 0);
                this.node.requestUpdateOnNextTick(this.id);
            }
        };
    }
    App = __decorate([
        angular2_1.Component({
            selector: 'ngus-app'
        }),
        angular2_1.View({
            directives: [node_1.FaNode, dom_element_1.FaDomElement, mesh_1.FaMesh],
            template: "\n    <fa-node [origin]=\"[0.5,0.5,0.5]\"\n             [mountPoint]=\"[0.5,0.5,0.5]\"\n             [align]=\"[0.25,0.5,0.0]\"\n             [sizeMode]=\"['absolute','absolute', 'absolute']\"\n             [absoluteSize]=\"[200,200,200]\"\n             [scale]=\"[2.0,2.0,2.0]\"\n             [rotate]=\"rotate.famous\"\n             [component]=\"famousComponent\">\n             <fa-element [properties]=\"{backgroundImage:'url(screenshots/famous.png)', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'top left'}\"\n                         [content]=\"''\">\n             </fa-element>\n    </fa-node>\n\n    <fa-node [origin]=\"[0.5,0.5,0.5]\"\n             [mountPoint]=\"[0.5,0.5,0.5]\"\n             [align]=\"[0.5,0.5,0.0]\"\n             [sizeMode]=\"['absolute','absolute', 'absolute']\"\n             [position]=\"[0,0,0]\"\n             [absoluteSize]=\"[200,200,200]\"\n             [scale]=\"[2.0,2.0,2.0]\"\n             [opacity]=\"0.8\"\n             [component]=\"meshComponent\">\n             <fa-mesh [geometry]=\"'Box'\" [color]=\"'#FF0000'\">\n             </fa-mesh>\n    </fa-node>\n\n    <fa-node [origin]=\"[0.5,0.5,0.5]\"\n             [mountPoint]=\"[0.5,0.5,0.5]\"\n             [align]=\"[0.75,0.5,0.0]\"\n             [sizeMode]=\"['absolute','absolute', 'absolute']\"\n             [absoluteSize]=\"[200,200,200]\"\n             [scale]=\"[2.0,2.0,2.0]\"\n             [rotate]=\"rotate.angular\"\n             [component]=\"angularComponent\">\n             <fa-element [properties]=\"{backgroundImage:'url(screenshots/angular-2.png)', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'top left'}\"\n                         [content]=\"''\">\n             </fa-element>\n    </fa-node>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], App);
    return App;
})();
angular2_1.bootstrap(App);
