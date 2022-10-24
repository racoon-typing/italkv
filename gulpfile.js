import gulp from "gulp";
import { path } from "./gulp/config/path.js";
import { plugins } from "./gulp/config/plugins.js";

global.app = {
    path: path,
    gulp: gulp,
    plugins: plugins
}

// Импорт задач
import { reset } from "./gulp/tasks/reset.js";
import { html } from "./gulp/tasks/html.js";
import { server } from "./gulp/tasks/server.js";
import { styles } from './gulp/tasks/less.js';
import { copy } from './gulp/tasks/copy.js';
import { js } from './gulp/tasks/js.js';
import { video } from './gulp/tasks/video.js';
import { php } from './gulp/tasks/php.js';
import { zip } from './gulp/tasks/zip.js';
import { ftp } from './gulp/tasks/ftp.js';


// Наблюдатель за изменениями в файлах
function watcher() {
    gulp.watch(path.watch.html, html);
    gulp.watch(path.watch.less, styles);
    gulp.watch(path.watch.js, js);
}

const mainTasks = gulp.parallel(copy, video, php, js, html, styles);

// Сценарий выполнения
const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server));
const deployZIP = gulp.series(reset, mainTasks, zip); 
const deployFTP = gulp.series(reset, mainTasks, ftp); 

// Экспорт сценариев
export { dev }
export { deployZIP }
export { deployFTP }

// Выполнение сценария по умолчанию
gulp.task('default', dev);
