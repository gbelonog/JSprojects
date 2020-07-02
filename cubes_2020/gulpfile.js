// var gulp = require('gulp');
// var concat = require('gulp-concat');

// gulp.task('scripts', function() {
//     return gulp.src(grid_view.js, size_view.js, win_view.js, eventEmitter.js, grid_model.js,
//         size_model.js, controller.js, main.js).pipe(concat('all.js')).pipe(gulp.dest('./dist/'));
//   });



// function defaultTask(cb) {
    
//     cb();
//   }
  
//   exports.default = defaultTask;



// const { src, dest } = require('gulp');
// const gulp = require('gulp');
// const concat = require('gulp-concat');
//const babel = require('gulp-babel');

// exports.default = function() {
//   return src('*.js')
//     //.pipe(babel())
//     //.pipe(dest('output/'))
//     .pipe(concat('*.js').pipe(dest('output1/')));
//     //.pipe(gulp.dest('./dist/'));
// }

// exports.default = function() {
//   return gulp.src('*.js')
//   .pipe(concat('all.js'))
//   .pipe(gulp.dest('dist/'));
// };
// gulp.task('scripts', function() {
//     return gulp.src('*.js')
//       .pipe(concat('all.js'))
//       .pipe(gulp.dest('dist/'));
//   });

var gulp = require('gulp');
var concat = require('gulp-concat');
 
gulp.task('scripts', function() {
    console.log('test');
   return gulp.src('*.js')
     .pipe(concat('all.js'))
     .pipe(gulp.dest('./dist/'));
});