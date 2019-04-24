var gulp=require('_gulp@4.0.0@gulp'),
    // gulp_html=require('gulp-juicer-js'),
    file=require('_gulp-file-include@2.0.1@gulp-file-include');

gulp.task('prew',function(){
    gulp.src(['./src/*.html'])
        .pipe(file({
            prefix:"@@",
            basepath:"./src/demo",
            indent:true
        }))
        .pipe(gulp.dest('./dist'));

});


