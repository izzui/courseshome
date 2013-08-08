/// <reference path="app/lib/sinon/lib/sinon.js" />
// Karma configuration
// Generated on Thu Aug 01 2013 11:40:43 GMT-0300 (E. South America Standard Time)


// base path, that will be used to resolve files and exclude
basePath = '';

preprocessors = {
    'app/*.js': 'coverage'
};

// list of files / patterns to load in the browser
files = [
  JASMINE,
  JASMINE_ADAPTER,
  'spec/lib/jquery-2.0.3.js',
  'spec/lib/sinon-1.7.3.js',
  'app/lib/angular/angular.js',
  'app/lib/angular/angular-mocks.js',
  'app/app.js',
  'app/**/*.js',
  'spec/**/*_spec.js'
];


// list of files to exclude
exclude = [
  'app/*.min.js'
];


// test results reporter to use
// possible values: 'dots', 'progress', 'junit'
//reporters = ['progress'];
reporters = ['progress', 'coverage'];

coverageReporter = {
    type: 'html',
    dir: 'coverage/'
};

// web server port
port = 9876;


// cli runner port
runnerPort = 9100;


// enable / disable colors in the output (reporters and logs)
colors = true;


// level of logging
// possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
logLevel = LOG_INFO;


// enable / disable watching file and executing tests whenever any file changes
autoWatch = true;


// Start these browsers, currently available:
// - Chrome
// - ChromeCanary
// - Firefox
// - Opera
// - Safari (only Mac)
// - PhantomJS
// - IE (only Windows)
browsers = ['Chrome'];


// If browser does not capture in given timeout [ms], kill it
captureTimeout = 60000;


// Continuous Integration mode
// if true, it capture browsers, run tests and exit
singleRun = false;
