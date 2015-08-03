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
var famous_1 = require('./angus/service/famous');
var node_1 = require('./angus/core/node');
var dom_element_1 = require('./angus/core/dom-element');
var mesh_1 = require('./angus/webgl-renderables/mesh');
var App = (function () {
    function App() {
        var app = this;
        var scene = famous_1.$famous.get().scene;
        this.rotate = {
            famous: [0, 15, 0],
            angular: [0, 15, 0]
        };
        var spinner = scene.addComponent({
            onUpdate: function (time) {
                app.setRotate({
                    famous: [0, time * 1233, 0],
                    angular: [0, time * 433, 0]
                });
                scene.requestUpdateOnNextTick(spinner);
            }
        });
        scene.requestUpdate(spinner);
    }
    App.prototype.onInit = function () {
    };
    App.prototype.setRotate = function (obj) {
        this.rotate = obj;
    };
    App.prototype.onChange = function (x) {
        console.log(x);
    };
    App = __decorate([
        angular2_1.Component({
            selector: 'angus-app',
            lifecycle: [angular2_1.onInit]
        }),
        angular2_1.View({
            directives: [node_1.FaNode, dom_element_1.FaDomElement, mesh_1.FaMesh],
            template: "\n    <fa-node [origin]=\"[0.5,0.5,0.5]\"\n             [mountPoint]=\"[0.5,0.5,0.5]\"\n             [align]=\"[0.25,0.5,0.0]\"\n             [sizeMode]=\"['absolute','absolute', 'absolute']\"\n             [absoluteSize]=\"[200,200,200]\"\n             [rotate]=\"rotate.famous\">\n             <fa-element [properties]=\"{backgroundImage:'url(screenshots/famous.png)', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'top left'}\"\n                         [content]=\"'<div>famous</div>'\">\n             </fa-element>\n    </fa-node>\n\n    <fa-node [origin]=\"[0.5,0.5,0.5]\"\n             [mountPoint]=\"[0.5,0.5,0.5]\"\n             [align]=\"[0.75,0.5,0.0]\"\n             [sizeMode]=\"['absolute','absolute', 'absolute']\"\n             [absoluteSize]=\"[200,200,200]\"\n             [rotate]=\"rotate.angular\">\n             <fa-element [properties]=\"{backgroundImage:'url(screenshots/angular-2.png)', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'top left'}\"\n                         [content]=\"'<div>angular</div>'\">\n             </fa-element>\n    </fa-node>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], App);
    return App;
})();
angular2_1.bootstrap(App);
