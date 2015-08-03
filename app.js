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
var node_1 = require('./angus/core/node');
var dom_element_1 = require('./angus/core/dom-element');
var mesh_1 = require('./angus/webgl-renderables/mesh');
var App = (function () {
    function App() {
    }
    App = __decorate([
        angular2_1.Component({
            selector: 'fa-app'
        }),
        angular2_1.View({
            directives: [node_1.FaNode, dom_element_1.FaDomElement, mesh_1.FaMesh],
            template: "\n    <fa-node [origin]=\"[0.5,0.5,0.0]\"\n             [align]=\"[0.5,0.5,0.0]\"\n             [sizeMode]=\"['absolute','absolute', 'absolute']\"\n             [absoluteSize]=\"[100,100,100]\">\n             <fa-element [properties]=\"{backgroundColor:'#FE5F55', borderRadius:'50px', paddingTop:'20px', textAlign:'center'}\"\n                         [content]=\"'<h5>Angus!</h5>'\">\n             </fa-element>\n    </fa-node>\n\n    <fa-node [origin]=\"[0.5,0.5,0.0]\"\n             [align]=\"[0.25,0.25,0.0]\"\n             [sizeMode]=\"['absolute','absolute', 'absolute']\"\n             [absoluteSize]=\"[200,200,200]\">\n             <fa-element [properties]=\"{backgroundColor:'#C7EFCF', textAlign:'center'}\"\n                         [content]=\"'<h5>Hello</h5>'\">\n             </fa-element>\n    </fa-node>\n\n    <fa-node [origin]=\"[0.5,0.5,0.0]\"\n             [align]=\"[0.6,0.6,0.0]\"\n             [scale]=\"[1.0,1.0,1.0]\"\n             [sizeMode]=\"['absolute','absolute', 'absolute']\"\n             [absoluteSize]=\"[40,40,40]\"\n             [rotate]=\"[0,45,45]\"\n             [opacity]=\"0.75\">\n             <fa-mesh [geometry]=\"'Tetrahedron'\"></fa-mesh>\n    </fa-node>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], App);
    return App;
})();
angular2_1.bootstrap(App);
