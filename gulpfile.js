const gulp = require("gulp");
const cleanCSS = require("gulp-clean-css");
const uglify = require("gulp-uglify");

gulp.task("minify-css", function () {
  return gulp
    .src("assest/css/*.css")
    .pipe(cleanCSS())
    .pipe(gulp.dest("assest/css"));
});

gulp.task("uglify-js", function () {
  return gulp
    .src("assest/js/*.js")
    .pipe(uglify())
    .pipe(gulp.dest("assest/js"));
});

gulp.task("default", gulp.parallel("minify-css", "uglify-js"));
