var gulp = require('gulp');
var webserver = require('gulp-webserver');
 
gulp.task('webserver', function() {
  gulp.src('./vue-webpack-example/')
    .pipe(webserver({
      livereload: true,
      //directoryListing:{
       // enable:true,
       // path:"demo",
      //},
      //fallback: 'index.html',
      open: true,
      port: 8080
    }));
});
console.log("启动项目成功。。。。。");
