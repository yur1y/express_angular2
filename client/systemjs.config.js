var isPublic = typeof window != "undefined";

(function(global) {

  // map tells the System loader where to look for things
  var map = {
    'app':                        'app', // 'build',
    '@angular':                   (isPublic)? '@angular' : 'node_modules/@angular',
    'rxjs':                       (isPublic)? 'rxjs' : 'node_modules/rxjs',

      //irregural bundles names
      "@angular/platform-browser/animations" : "@angular/platform-browser/bundles/platform-browser-animations.umd.js",
      "@angular/animations/browser": "@angular/animations/bundles/animations-browser.umd.js"
  };
  // packages tells the System loader how to load when no filename and/or no extension
  var packages = {
    'app':                        { main: 'main.js',  defaultExtension: 'js' },
    'rxjs':                       { defaultExtension: 'js' }
  };
  var ngPackageNames = [
    'common',
    'compiler',
      'cdk',
    'core',
    'forms',
    'http',
    'platform-browser',
      'platform-browser-dynamic',
    'router',
    'upgrade',
      'animations',
      'material'

  ];
  // Individual files (~300 requests):
  function packIndex(pkgName) {
    packages['@angular/'+pkgName] = { main: 'index.js', defaultExtension: 'js' };
  }
  // Bundled (~40 requests):
  function packUmd(pkgName) {
    packages['@angular/'+pkgName] = { main: 'bundles/' + pkgName + '.umd.js', defaultExtension: 'js' };
  }
  // Most environments should use UMD; some (Karma) need the individual index files
  var setPackageConfig = System.packageWithIndex ? packIndex : packUmd;
  // Add package entries for angular packages
  ngPackageNames.forEach(setPackageConfig);
  var config = {
    map: map,
    packages: packages
  };
  System.config(config);
})(this);