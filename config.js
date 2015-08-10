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
    prod: {
        target: 'es5',
        module: 'system',
        declaration: false,
        noImplicitAny: false,
        removeComments: true,
        emitDecoratorMetadata: true,
        experimentalDecorators: true
    }
  }

};
