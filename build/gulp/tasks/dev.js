var gulp = require('gulp');
var shell = require('gulp-shell');

// 启动browser sync
gulp.task('browser-sync', function() {
    setTimeout(function() {
        shell.task('browser-sync start --config build/bs/bs-config.js', {
            cwd: '../../../'
        })();
    }, 6000);
});

gulp.task('dev', function() {
  shell.task('npm run watch:client', {
    cwd: '../../../'
  })();

  shell.task('npm run watch:server', {
    cwd: '../../../'
  })();

  gulp.start('browser-sync');
});
