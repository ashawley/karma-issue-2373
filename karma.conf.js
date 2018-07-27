module.exports = function(config) {
  config.set({

    basePath: '.',

    frameworks: [
      'browserify',
      'jasmine-jquery',
      'jasmine'
    ],

    files: [
      'app/js/index.js',
      'app/style/index.less',
      'node_modules/angular-mocks/angular-mocks.js',
      'test/js/**/*Spec.js'
    ],

    exclude: [
      '**/*~'
    ],

    plugins: [
      '@metahub/karma-jasmine-jquery',
      'karma-*'
    ],

    preprocessors: {
      'app/js/**/*.js': [ 'browserify' ],
      'app/style/**/*.less': [ 'less' ]
    },

    reporters: [
      'progress',
      'junit'
    ],

    junitReporter: {
      'outputDir': 'test/reports',
      'outputFile': 'junit_results.xml',
      'useBrowserName': true
    },

    lessPreprocessor: {
      options: {
        save: true,
        paths: [ 'app/style' ]
      },
      transformPath: function(path) {
        return path.replace(/app/, 'app/dist').replace(/\.less$/, '.css');
      }
    },

    ngHtml2JsPreprocessor: {
      stripPrefix: 'app/js/'
    },

    browsers: [
      'Chrome',
      'Firefox',
      'PhantomJS'
    ],

    concurrency: 1,

    browserify: {
      debug: true
    }

  })
}
