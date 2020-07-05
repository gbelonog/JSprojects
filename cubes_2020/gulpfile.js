
var gulp = require('gulp');
var concat = require('gulp-concat');
 
gulp.task('scripts', function() {
    console.log('test');
    //return gulp.src('src/*.js')
    return gulp.src(['src/grid_view.js', 'src/size_view.js', 'src/win_view.js', 'src/eventEmitter.js', 'src/grid_model.js', 'src/size_model.js', 'src/controller.js', 'src/main.js'])
    .pipe(concat('all.js'))
    .pipe(gulp.dest('./dist/'));
});