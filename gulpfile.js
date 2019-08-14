var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
var htmlmin = require('gulp-htmlmin');
var tinyPNG = require('gulp-tinypng-compress');
function defaultTask(cb) {
  cb();
}

gulp.task('minify-css', function(cb){
  return gulp.src('src/css/*.css')
  .pipe(cleanCSS({
    compatibility: 'ie8'
  }))
  .pipe(gulp.dest('dist/css/'))
  cb();
});

gulp.task('htmlmin', function (cb) {
  return gulp.src('./src/*.html')
    .pipe(htmlmin({
      collapseWhitespace: true
    }))
    .pipe(gulp.dest('dist/'))
  cb();
});

gulp.task('fonts', function (cb) {
  return gulp.src('./src/fonts/**/*')
    .pipe(gulp.dest('dist/fonts'))
  cb();
});

gulp.task('tinyPNG', function (cb) {
  return gulp.src('./src/img/**/*.{png,jpg,jpeg}')
    .pipe(tinyPNG({
      key: 'jxh3fFTSCTQ5Db6LwLvXLXdKyLY9bnQM',
    }))
    .pipe(gulp.dest('dist/img/'));
  cb();
});
