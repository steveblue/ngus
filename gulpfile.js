var gulp    = require('gulp'),
    plumber = require('gulp-plumber'),
    concat = require('gulp-concat'),
    tsc = require('gulp-typescript'),
    sourcemaps = require('gulp-sourcemaps'),
    runSequence = require('run-sequence'),
    uglify = require('gulp-uglify'),
    watch = require('gulp-watch'),
    merge = require('merge2'),
    config   = require('./config.js'),

// Paths
    root        = config.rootDir,
    lib         = config.lib;

    // Copy lib for dev

var tsProject = tsc.createProject('tsconfig.json', {
  typescript: require('typescript')
});

var es6Project = tsc.createProject(config.ts.es6,{
  typescript: require('typescript')
});

var amdProject = tsc.createProject(config.ts.amd,{
  typescript: require('typescript')
});

var systemProject = tsc.createProject(config.ts.system,{
  typescript: require('typescript')
});

var commonProject = tsc.createProject(config.ts.common,{
  typescript: require('typescript')
});


gulp.task('build:dev', function () {
  var result = gulp.src(config.lib.src)
    .pipe(plumber())
    .pipe(tsc(tsProject));
    return result.js
      .pipe(gulp.dest(config.buildDir));
});

gulp.task('def', function () {
  var result = gulp.src(config.lib.src)
    .pipe(tsc(systemProject));

    return merge([
        result.dts
          .pipe(plumber())
          .pipe(concat(config.def))
          .pipe(gulp.dest(config.buildDir))
    ]);
});

gulp.task('build:prod', function () {

    var es6 = gulp.src(config.lib.src)
        .pipe(tsc(es6Project)),
    common = gulp.src(config.lib.src)
        .pipe(tsc(commonProject)),
    amd = gulp.src(config.lib.src)
        .pipe(tsc(amdProject)),
    system = gulp.src(config.lib.src)
        .pipe(tsc(systemProject));

    return merge[
        es6.js
            .pipe(plumber())
            .pipe(gulp.dest(config.buildDir+'/es6/')),
        common.js
            .pipe(plumber())
            .pipe(gulp.dest(config.buildDir+'/common/')),
        system.js
            .pipe(plumber())
            .pipe(gulp.dest(config.buildDir+'/system/')),
        amd.js
            .pipe(plumber())
            .pipe(gulp.dest(config.buildDir+'/amd/'))
    ];
});

gulp.task('build:dev', function () {

    var system = gulp.src(config.lib.src)
        .pipe(tsc(systemProject));

    return system.js
            .pipe(plumber())
            .pipe(gulp.dest(config.buildDir+'/system/'));
});


gulp.task('dev', function(){
    gulp.watch(config.lib.src, ['build:dev']);
})

//TODO: Someone please compile TS to ES6 then compile down to module patters
// with traceur so packages can be minified.

// gulp.task('build:prod:min', function () {
//   var result = gulp.src(config.lib.src)
//     .pipe(plumber())
//     .pipe(sourcemaps.init())
//     .pipe(tsc(tsProject));
//
//     return result.js
//       .pipe(plumber())
//       .pipe(concat(config.min))
//       .pipe(uglify())
//       .pipe(sourcemaps.write())
//       .pipe(gulp.dest(config.buildDir));
// });
