
var gulp = require('gulp');
var concat = require('gulp-concat');
 
gulp.task('scripts', function() {
    console.log('test');
    return gulp.src('src/*.js')
    .pipe(concat('all.js'))
    .pipe(gulp.dest('./dist/'));
});