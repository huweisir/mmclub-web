var fs = require('fs-extra');
var path = require('path');
const chalk = require('chalk');

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

var config = {
    srcPath: resolveApp('dist/'),
    buildWebapp: resolveApp('build/app'),
    buildMimg: resolveApp("build/mimg"),
    buildClient: resolveApp('dist/'),
    distStatics: resolveApp('dist/static')
}

function removeDir(src, regexp) {
    try {
        fs.readdirSync(src).forEach(file => {
            console.log(1)
            if (regexp.test(file)) {
                console.log(2)
                fs.ensureDirSync(src);
                fs.removeSync(path.join(src, file));
            }
        });
    } catch (err) { }

}

function copyFiles(src, dist, regexp, dir = false) {
    fs.readdirSync(src).forEach(file => {
        if (regexp.test(file)) {
            fs.ensureDirSync(dist)
            fs.copySync(path.join(src, file), path.join(dist, file));
        }
    })
    src = src.slice(process.cwd().length)
    dist = dist.slice(process.cwd().length)
    console.log(chalk.gray(`[COPY] rules =>${regexp} files => FROM ${src} TO ${dist}`));
}

function copy() {
    //每次删除之前拷贝的文件
    removeDir(config.buildMimg + '/static/', /(js|css|media|img$)\/*/);
    removeDir(config.buildWebapp, /(.html|.ico)$/);
    copyFiles(config.srcPath, config.buildWebapp, /\.ico$/);
    copyFiles(config.buildClient, config.buildWebapp, /\.html$/);
    copyFiles(config.buildClient, config.buildMimg, /\.js$/);
    copyFiles(config.buildClient + '/static/', config.buildMimg + '/static/', /(js|css|media|img$)\/*/);
    //每次删除之前拷贝的文件
    // removeDir(config.buildMimg + '/static/img/icons', /(.ico$)\/*/);
    // copyFiles(config.buildClient + '/lavas/', config.buildMimg + '/lavas/', /(json)\/*/);
}

copy();