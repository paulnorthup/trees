// Modules
var gulp = require('gulp'),
    slim = require('gulp-slim'),
    sass = require('gulp-ruby-sass'),
    plumber = require('gulp-plumber'),
    mainBowerFiles = require('main-bower-files'),
    filter = require('gulp-filter'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    browserSync = require('browser-sync');

// Helpers
var reload = browserSync.reload;

//Paths
var src = {
  'css': './lib/styles/**/*.scss',
  'js': './lib/js/**/*.js',
  'html':'./lib/templates/*.slim'
};
var dest = {
  'css': './dist/css/',
  'js': './dist/js/',
  'html':'./dist'
};

// Process sass
gulp.task('sass', function() {
  gulp.src(src.css)
  .pipe(plumber())
  .pipe(sass())
  .on('error', function (err) { console.log(err.message); })
  .pipe(gulp.dest(dest.css))
  .pipe(reload({stream:true}));
});

// Process templates
gulp.task('slim', function() {
  gulp.src(src.html)
  .pipe(plumber())
  .pipe(slim())
  .pipe(gulp.dest(dest.html))
  .pipe(reload({stream:true}));
});

// Process  javascripts
gulp.task('js', function() {
  gulp.src(mainBowerFiles().concat(src.js))
  .pipe(filter('*.js'))
  .pipe(concat('main.js'))
  .pipe(uglify())
  .pipe(gulp.dest(dest.js))
  .pipe(reload({stream:true}));
})

// Spin up a server
gulp.task('serve', function() {
browserSync({
  server: {
    baseDir: './dist'
    }
  });
});

// Default to build, serve, and watch
gulp.task('default', ['sass', 'slim', 'serve'], function() {
  gulp.watch(src.css, ['sass']);
  gulp.watch(src.html, ['slim']);
});
