var gulp = require("gulp");
var reactfy = require("gulp-reactify");
var jsx = require("gulp-jsx");
var babel = require("gulp-babel");
var minify = require("gulp-minify");

gulp.task("build", function(){
    gulp
    .src("src/js/*.js")
    .pipe(jsx({
        factory: "React.createElement"
    }))
    .pipe(babel({
        presets: ['es2015']
    }))
    .pipe(reactfy({
        reactTools: require('react-tools')
    }))
    .pipe(minify({
        ext:{
            src:'.js',
            min:'.min.js'
        }
    }))
    .pipe(gulp.dest("dist"));
});