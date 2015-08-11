# ngus

#### Famo.us Mixed Mode in Angular 2

v0.0.2

![alt text](screenshots/ngus.gif "Famo.us DOMElement and Mesh in a Mixed Mode Scene")

ngus gives Angular 2 developers access to Famo.us DOMElement and Mesh inside of templates. This library allows engineers to bind Angular 2 properties to Famo.us Objects for fast, efficient templating.


```
    <fa-node [origin]="[0.5,0.5,0.0]"
             [align]="[0.25,0.25,0.0]"
             [sizeMode]="['absolute','absolute', 'absolute']"
             [absoluteSize]="[200,200,200]"
             [opacity]="0.25">
             <fa-element [properties]="{backgroundColor:'cyan', textAlign:'center', paddingTop: '40%'}"
                         [content]="'<h5>Hello World</h5>'">
             </fa-element>
    </fa-node>

    <fa-node [origin]="[0.5,0.5,0.0]"
             [align]="[0.6,0.6,0.0]"
             [sizeMode]="['absolute','absolute', 'absolute']"
             [absoluteSize]="[120,120,120]"
             [opacity]="0.75">
             <fa-mesh [geometry]="'Tetrahedron'"></fa-mesh>
    </fa-node>


```

* NOTE: ngus and Angular 2 are very early in development and not ready for deployment to a Production environment.

##Demo

A demo of ngus is running at [ngus.io](http://ngus.io).

##Mission

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


##What ngus Needs

* Support for GL Features
* Support for Famo.us Physics Engine
* Support for Camera
* Integration of Famo.us UI Events
* Complete Typescript type definitions for Famo.us Engine and ngus
* Better handling and customization of Famo.us Engine
* Refinement to the build tools
* Integrated tests
* Documentation
