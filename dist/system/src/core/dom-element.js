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
};System.register(['angular2/angular2', '../core/node'], function(exports_1) {
    var angular2_1, node_1;
    var FaDomElement;
    return {
        setters:[
            function (_angular2_1) {
                angular2_1 = _angular2_1;
            },
            function (_node_1) {
                node_1 = _node_1;
            }],
        execute: function() {
            FaDomElement = (function () {
                function FaDomElement(parent) {
                    var DOMElement = famous.domRenderables.DOMElement;
                    this.element = new DOMElement(parent.node);
                }
                FaDomElement.prototype.setClasses = function (classes) {
                    for (var i = 0; i < classes.length; i++) {
                        if (!this.element.hasClass(classes[i])) {
                            this.element.addClass(classes[i]);
                        }
                    }
                };
                FaDomElement.prototype.setProperties = function (prop) {
                    if (prop) {
                        for (var key in prop) {
                            if (prop.hasOwnProperty(key)) {
                                this.element.setProperty(key.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase(), prop[key]);
                            }
                        }
                    }
                };
                FaDomElement.prototype.setAttributes = function (attr) {
                    if (attr) {
                        for (var key in attr) {
                            if (attr.hasOwnProperty(key)) {
                                this.element.setAttribute(key, attr[key]);
                            }
                        }
                    }
                };
                FaDomElement.prototype.onInit = function () {
                    var elem = this;
                    this.content ? this.element.setContent(elem.content) : false;
                };
                FaDomElement.prototype.onChange = function (changes) {
                    changes.id ? this.element.setId(changes.id.currentValue) : false;
                    changes.classes ? this.setClasses(changes.classes.currentValue) : false;
                    changes.attr ? this.setAttributes(changes.attr.currentValue) : false;
                    changes.properties ? this.setProperties(changes.properties.currentValue) : false;
                };
                FaDomElement = __decorate([
                    angular2_1.Component({
                        selector: 'fa-element',
                        properties: ['properties', 'attr', 'content', 'id', 'classes'],
                        lifecycle: [angular2_1.onInit, angular2_1.onChange]
                    }),
                    angular2_1.View({
                        template: ""
                    }),
                    __param(0, angular2_1.Parent()), 
                    __metadata('design:paramtypes', [node_1.FaNode])
                ], FaDomElement);
                return FaDomElement;
            })();
            exports_1("FaDomElement", FaDomElement);
        }
    }
});
