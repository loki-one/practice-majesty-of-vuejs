const gulp = require('gulp');
const babel = require('gulp-babel');
const webpack = require('webpack-stream');

gulp.task('default', ['watch']);

gulp.task('babel', function(){
  return gulp.src('src/*.js').pipe(babel({
    presets: ['es2015']
  })).pipe(gulp.dest('assets/js/'));
});

gulp.task('webpack', ['babel'], function(){
  return gulp.src('assets/js/sum.js').pipe(webpack({
    output: {
      path: '/assets/webpacked',
      filename: 'app.js'
    }
  })).pipe(gulp.dest('assets/webpacked'));
});

gulp.task('watch', function(){
  gulp.watch('src/*.js', ['babel', 'webpack']);
});
