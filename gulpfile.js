var gulp = require('gulp');
var browserSync = require('browser-sync');
var reload      = browserSync.reload;

// this task utilizes the browsersync plugin
// to create a dev server instance
// at http://localhost:9000
gulp.task('serve', function(done) {
  browserSync({
    open: false,
    port: 9000,
    server: {
      baseDir: ['.'],
      middleware: function (req, res, next) {
        res.setHeader('Access-Control-Allow-Origin', '*');
        next();
      }
    }
  }, done);
});

gulp.task('watch', function() {
  browserSync.init({
    open: false,
    port: 9000,
    server: {
      baseDir: ['.'],
      middleware: function (req, res, next) {
        res.setHeader('Access-Control-Allow-Origin', '*');
        next();
      }
    }
  });
  gulp.watch(["*.html"]).on("change", reload);
  gulp.watch(["*.js"]).on("change", reload);
  gulp.watch(["./aurelia-primefaces/**/*.js"]).on("change", reload);
});
