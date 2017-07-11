
const gulp = require("gulp"),
    del = require("del"),
    tsc = require("gulp-typescript"),
    sourcemaps = require('gulp-sourcemaps'),
    tsProject = tsc.createProject("tsconfig.json"),
    tslint = require('gulp-tslint'),
    runSequence = require('run-sequence'),
    nodemon = require('gulp-nodemon');

/**
 * Remove build directory.
 */
gulp.task('clean', (cb) => {
    return del(["build"], cb);
});

/**
 * Build Express server
 */
gulp.task('build:server',   ()=> {
    const tsProject = tsc.createProject('server/tsconfig.json');
    const tsResult = gulp.src('server/src/**/*.ts')
        .pipe(sourcemaps.init())
        .pipe(tsProject());
    return tsResult.js
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('build/server'));
});

gulp.task('build:client',   () =>{
    const tsProject = tsc.createProject('client/tsconfig.json');
    const tsResult = gulp.src('client/**/*.ts')
        .pipe(sourcemaps.init())
        .pipe(tsProject());
    return tsResult.js
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('build/client'));
});

/**
 * Lint all custom TypeScript files.
 */
gulp.task('tslint', () => {
    return gulp.src("client/app/**/*.ts")
        .pipe(tslint({
			formatter: "prose"
		}))
		.pipe(tslint.report());
});


/**
 * Compile TypeScript sources and create sourcemaps in build directory.
 */
gulp.task("compile", ["tslint"], () => {
    let tsResult = gulp.src("client/**/*.ts")
        .pipe(sourcemaps.init())
        .pipe(tsProject());
    return tsResult.js
        .pipe(sourcemaps.write("."))
        .pipe(gulp.dest("build/client"));
});

/**
 * Copy all resources that are not TypeScript files into build directory. e.g. index.html, css, images
 */
gulp.task("clientResources", () => {
    return gulp.src(["client/**/*", "!**/*.ts", "!client/*.json"])
        .pipe(gulp.dest("build/client"));
});

/**
 * Copy bin directory for www
 */
gulp.task("serverResources", () => {
    return gulp.src(["server/src/bin/**"])
        .pipe(gulp.dest("build/server/bin"));
});

/**
 * Copy all required libraries into build directory.
 */
gulp.task("libs", () => {
    return gulp.src([
        'core-js/client/**',
        'zone.js/dist/zone.js',
        'reflect-metadata/Reflect.js',
        'reflect-metadata/Reflect.js.map',
        'systemjs/dist/system.src.js',
        'hammerjs/hammer.js',
    ], { cwd: "node_modules/**" }) /* Glob required here. */
        .pipe(gulp.dest("build/client/libs"));
});

/**
 * Copy all required libraries into build directory.
 */
gulp.task("css", () => {
    return gulp.src([
        '@angular/material/prebuilt/**'
    ], { cwd: "node_modules/**" }) /* Glob required here. */
        .pipe(gulp.dest("build/client/css"));
});

/**
 * Start the express server with nodemon
 */
gulp.task('start',   () =>{
    nodemon({
        script: 'build/server/bin/www'
        , ext: 'html js'
        , ignore: ['ignored.js']
        , tasks: ['tslint']
    })
        .on('restart',   ()=> {
            console.log('restarted!');
        });
});

/**
 * Build the project.
 * 1. Clean the build directory
 * 2. Build Express server
 * 3. Build the Angular app
 * 4. Copy the resources
 * 5. Copy the dependencies.
 */

gulp.task("build",   (callback)=> {
    runSequence('clean', 'build:server', 'build:client', 'clientResources', 'serverResources', 'libs', 'css', callback);
});

/**
 * Watch for changes in TypeScript, HTML and CSS files.
 */
gulp.task('watch',   ()=> {
    gulp.watch(["client/**/*.*"], ['compile']).on('change',   (e)=> {
        console.log('File ' + e.path + ' has been changed. Compiling.');
    });
    gulp.watch(["client/**/*.ts"], ['compile']).on('change',   (e)=> {
        console.log('TypeScript file ' + e.path + ' has been changed. Compiling.');
    });

    gulp.watch(["client/**/*.html", "client/**/*.css"], ['clientResources']).on('change',   (e)=> {
        console.log('Resource file ' + e.path + ' has been changed. Updating.');
    });

    gulp.watch(["server/src/**/*.ts"], ['compile']).on('change',   (e) =>{
        console.log('TypeScript file ' + e.path + ' has been changed. Compiling.');
    });
});

/**
 * Build the project.
 * 1. Clean the build directory
 * 2. Build Express server
 * 3. Build the Angular app
 * 4. Copy the resources
 * 5. Copy the dependencies.
 */

gulp.task("build",   (callback)=> {
    runSequence('clean', 'build:server', 'build:client', 'clientResources', 'serverResources', 'libs', 'css', callback);
});

gulp.task('default',   () =>{
    runSequence('build:server', 'build:client', 'clientResources', 'serverResources', 'libs', 'css', 'watch', 'start');
});
