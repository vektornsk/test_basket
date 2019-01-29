const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const rename = require("gulp-rename");
const browserSync = require('browser-sync').create();


function buildStyle() {
  return gulp.src("src/scss/style.scss")
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 5 versions']
    }))
    .pipe(rename("style.css"))
    .pipe(gulp.dest("dist/style"))
    .pipe(browserSync.reload({
      stream: true
    }));
}

gulp.task('scripts', function() {
  
  });


gulp.task('style', buildStyle);

gulp.task('server', function () {

  browserSync.init({
    server: {
      baseDir: './'
    },
    ghostMode: false, // switch them all off in one go
    notify: false
  });

  gulp.watch("./src/scss/**/*.scss", buildStyle);
});

gulp.task('default', gulp.series('style', 'server'));