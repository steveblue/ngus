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
};System.register(['angular2/angular2', 'ngus/ngus'], function(exports_1) {
    var angular2_1, ngus_1;
    var App;
    return {
        setters:[
            function (_angular2_1) {
                angular2_1 = _angular2_1;
            },
            function (_ngus_1) {
                ngus_1 = _ngus_1;
            }],
        execute: function() {
            App = (function () {
                function App() {
                    var app = this;
                    this.rotate = {
                        famous: [0, 0, 0],
                        angular: [0, 0, 0],
                        mesh: [0, 0, 0]
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
                            this.node.setRotation(time / 539, time / 539, time / 539);
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
                        directives: [ngus_1.FaNode, ngus_1.FaCamera, ngus_1.FaDomElement, ngus_1.FaMesh],
                        template: "\n    <fa-node>\n        <fa-camera [depth]=\"1000\"></fa-camera>\n    </fa-node>\n    <fa-node [origin]=\"[0.5,0.5,0.5]\"\n             [mountPoint]=\"[0.5,0.5,0.5]\"\n             [align]=\"[0.25,0.5,0.0]\"\n             [sizeMode]=\"['absolute','absolute', 'absolute']\"\n             [absoluteSize]=\"[200,200,200]\"\n             [scale]=\"[2.0,2.0,2.0]\"\n             [rotate]=\"rotate.famous\"\n             [component]=\"famousComponent\">\n             <fa-element [properties]=\"{backgroundImage:'url(screenshots/famous.png)', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'top left'}\"\n                         [attr]=\"{lang: 'ar', dir: 'ltr', contenteditable: true}\"\n                         [content]=\"''\"\n                         [id]=\"'famous-spinner'\"\n                         [classes]=\"['class1','class2','class3']\">\n             </fa-element>\n    </fa-node>\n\n    <fa-node [origin]=\"[0.5,0.5,0.5]\"\n             [mountPoint]=\"[0.5,0.5,0.5]\"\n             [align]=\"[0.5,0.5,0.0]\"\n             [sizeMode]=\"['absolute','absolute', 'absolute']\"\n             [absoluteSize]=\"[200,200,200]\"\n             [rotate]=\"rotate.mesh\"\n             [component]=\"meshComponent\">\n             <fa-mesh [geometry]=\"'Box'\"\n                      [detail]=\"100\"\n                      [color]=\"'#FB9F89'\">\n             </fa-mesh>\n    </fa-node>\n\n    <fa-node [origin]=\"[0.5,0.5,0.5]\"\n             [mountPoint]=\"[0.5,0.5,0.5]\"\n             [align]=\"[0.75,0.5,0.0]\"\n             [sizeMode]=\"['absolute','absolute', 'absolute']\"\n             [absoluteSize]=\"[200,200,200]\"\n             [scale]=\"[2.0,2.0,2.0]\"\n             [rotate]=\"rotate.angular\"\n             [component]=\"angularComponent\">\n             <fa-element [properties]=\"{backgroundImage:'url(screenshots/angular-2.png)', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'top left'}\"\n                         [content]=\"''\">\n             </fa-element>\n    </fa-node>\n  "
                    }), 
                    __metadata('design:paramtypes', [])
                ], App);
                return App;
            })();
            angular2_1.bootstrap(App);
        }
    }
});
