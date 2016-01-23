var gulp = require('gulp')
var del = require('del')

var bootlint = require('gulp-bootlint')
var less = require('gulp-less')
var sass = require('gulp-sass')

gulp.task('clean:dist', () => {
  del.sync('./dist')
})

gulp.task('clean:docs', () => {
  del.sync('./docs/dist')
})

gulp.task('clean', ['clean:dist', 'clean:docs'])
