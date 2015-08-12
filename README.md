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


###Install


```
npm install ngus

```

ngus is written in Typescript, however you can choose to write your Angular 2 apps in ES5 or ES6. npm install ngus will install the latest version of the ngus library. ngus is transpiled into amd, commonjs, systemjs, and ES6 modules. You can find these variants nside the /dist folder. If you prefer Typescript, a definition file for ngus is provided in the ngus-seed repo.



###Roadmap

* Support for Gesture Handler
* Support for Camera
* Support for Physics Engine
* Support for WebGL Styling
* Better handling and customization of Famo.us Engine
* Complete Typescript type definitions for Famo.us Engine
* Integrated tests
* Documentation
