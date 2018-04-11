var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var cleanCSS = require('gulp-clean-css');
var uglify = require('gulp-uglify');
var imagemin = require('gulp-imagemin');
var watch = require('gulp-watch');

gulp.task('copy-html', function() {
    gulp.src('./index.html')
    .pipe(gulp.dest('./dist'));
});

gulp.task('copy-css', function() {
    gulp.src('css/normalize.css')
    .pipe(concat('normalize.min.css'))
    .pipe(cleanCSS())
    .pipe(gulp.dest('dist/css'));
});

gulp.task('sass', function () {
    return gulp.src('scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('css'));
});

gulp.task('css', ['sass'], function () {
    return gulp.src('css/style.css')
    .pipe(concat('styles.min.css'))
    .pipe(cleanCSS())
    .pipe(gulp.dest('dist/css'));
});

gulp.task('js', function () {
    return gulp.src('js/**/*.js')
    .pipe(concat('scripts.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'));
});

gulp.task('img', function () {
    return gulp.src('img/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/img'));
});

gulp.task('watch', function() {
    gulp.watch('scss/**/*.scss', ['sass']);
});

gulp.task('default', ['copy-html', 'copy-css', 'css', 'js', 'img']);
