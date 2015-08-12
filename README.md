# ngus

#### Famo.us Mixed Mode in Angular 2

v0.0.2

![alt text](http://ngus.io/screenshots/ngus.gif "Famo.us DOMElement and Mesh in a Mixed Mode Scene")

ngus gives Angular 2 developers access to Famo.us DOMElement and Mesh inside of templates. This seed project sets up the very minimal needed to develop ngus projects.

ngus allows developers to declare Famous Components like DOMElement and Mesh in Angular 2 template syntax. Bind properties on `fa-node`, `fa-element`, and `fa-mesh` to Angular Components.  


```
    <fa-node [origin]="[0.5,0.5,0.0]"
             [align]="[0.25,0.25,0.0]"
             [sizeMode]="['absolute','absolute', 'absolute']"
             [absoluteSize]="[200,200,200]"
             [opacity]="0.25"
             [component]="famousComponent">
             <fa-element [properties]="{backgroundColor:'cyan', textAlign:'center', paddingTop: '40%'}"
                         [content]="'<h5>Hello World</h5>'">
             </fa-element>
    </fa-node>

```

Create your own Famous Components inside ES6 Classes. In the example below, `famousComponent` is a property on the Class `App` bound to the `[component]` property in the template above.

```
class App {
  famousComponent: Object;
  constructor() {

      this.famousComponent = {
        id: null,
        node: null,
        onMount: function (node) {
            this.id = node.addComponent(this);
            node.requestUpdate(this.id);
            this.node = node;
        },
        onUpdate: function (time) {
            this.node.setRotation(0,time / 832,0);
            this.node.requestUpdateOnNextTick(this.id);
        }
      };
  }
}
```

ngus is written in Typescript, however you can choose to write your Angular 2 apps in ES5 or ES6. `npm install ngus` will install the latest version of the ngus library. ngus is transpiled into amd, commonjs, systemjs, and ES6 modules. You can find these variants nside the `/dist` folder. 

* NOTE: ngus and Angular 2 are very early in development and not ready for deployment to a Production environment.

###Demo

A demo of ngus is running at [ngus.io](http://ngus.io).

###Seed Project

Get started developing with ngus quickly with this seed project.  ngus-seed tracks the latest version of ngus.

[https://github.com/steveblue/ngus-seed](https://github.com/steveblue/ngus-seed).

### Install

`npm install ngus --save` in your Angular 2 project to download the latest release that comes packaged

###Mission

The goal is to provide a library that can be imported into Angular 2 projects so developers can leverage the Famo.us Scene Graph, Physics Engine and Mixed Mode Rendering Engine. The idea is to make a library of Angular Components that gives engineers the option to either tightly or loosely couple Angular 2 and Famo.us Engine with Angular Components.  

###ngus Needs Your Help!

ngus needs the help of the Famo.us and Angular 2 Developer Communities to really take off and be an invaluable next-gen tool for Web Developers.

ngus still has a long way to go before it is ready for a Production environment. If you are interested in contributing to the project and helping to build out Angular 2 Components that interface with the Famo.us Engine contact <admin@ngus.io>.


###Getting Started

Fork the repo and then clone it.

Angular 2 Components can either be written in ES5, ES6 or Typescript syntax. It seems like the Angular 2 Community has put full support behind Typescript since ng-conf so I have chosen to use it in development of ngus. Currently, LiveServer is used for a development server.

```
npm install -g typescript

```

Eventually, a more sophisticated build operation and development environment will most likely replace the requirement for LiveServer.

In the project directory, run `npm install`.


###Develop ngus

To watch for changes to typescript and compile on every save, run `gulp watch` or `tsc --watch` in the project directory. NOTE 1: You may get `error TS2307:` from the `gulp-typescript` task. Disregard for now, this seems to be a bug in gulp-typescript that doesn't effect compilation.

* Commit changes to a branch, i.e. `feature/gl-textures` or `bug/broken-textures`.

* Push changes to remote fork.

* Make a pull request.


###What ngus Needs

* Support for GL Features
* Support for Famo.us Physics Engine
* Support for Camera
* Integration of Famo.us UI Events
* Complete Typescript type definitions for Famo.us Engine
* Better handling and customization of Famo.us Engine
* Integrated tests
* Documentation
