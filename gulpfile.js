var gulp = require('gulp');

var connect = require('gulp-connect');

gulp.task('connectApp', function () {
  connect.server({
    root: 'app',
    port: 8000,
    livereload: true
  });
});

gulp.task('default', ['connectApp']);
