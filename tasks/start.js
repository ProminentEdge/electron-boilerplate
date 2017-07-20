const childProcess = require('child_process');
const electron = require('electron');
const gulp = require('gulp');

gulp.task('startService', ['build', 'watch'], () => {
  childProcess.spawn(electron, ['.', '--service'], { stdio: 'inherit' })
  .on('close', () => {
    // User closed the app. Kill the host process.
    process.exit();
  });
});

gulp.task('startUi', ['build', 'watch'], () => {
  childProcess.spawn(electron, ['.', '--ui'], { stdio: 'inherit' })
  .on('close', () => {
    // User closed the app. Kill the host process.
    process.exit();
  });
});
