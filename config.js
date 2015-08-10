// Main Folder Locations
var rootDir     = __dirname;

// Export Specific Paths
module.exports = {

  'rootDir': rootDir,
  'buildDir': rootDir + '/dist',
  'file': 'ngus.js',
  'min': 'ngus.min.js',
  'typescript': 'ngus.ts',
  'def': 'ngus.d.ts',

  // Lib Files
  lib: {
    src:['./src/**/*.ts',
         './src/*.ts']
  },
  ts: {
    es6: {
        target: 'es6',
        declaration: false,
        noImplicitAny: false,
        removeComments: true,
        emitDecoratorMetadata: true,
        experimentalDecorators: true
    },
    common: {
        target: 'es5',
        module: 'commonjs',
        declaration: false,
        noImplicitAny: false,
        removeComments: true,
        emitDecoratorMetadata: true,
        experimentalDecorators: true
    },
    amd: {
        target: 'es5',
        module: 'amd',
        declaration: false,
        noImplicitAny: false,
        removeComments: true,
        emitDecoratorMetadata: true,
        experimentalDecorators: true
    },
    system: {
        target: 'es5',
        module: 'system',
        declaration: false,
        noImplicitAny: false,
        removeComments: true,
        emitDecoratorMetadata: true,
        experimentalDecorators: true
    },

  }

};
