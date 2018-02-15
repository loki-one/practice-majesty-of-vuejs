const gulp = require('gulp');
const babel = require('gulp-babel');

gulp.task('default', ['babel']);

gulp.task('babel', function(){
  return gulp.src('src/*.js').pipe(babel({
    presets: ['es2015']
  })).pipe(gulp.dest('assets/js/'));
});

gulp.task('watch', function(){
  gulp.watch('src/*.js', ['babel']);
});
