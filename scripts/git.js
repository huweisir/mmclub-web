const path = require('path');
const sharkDeploy = require('@shark/shark-deploy');
const sf = require('../shark-conf')
const sd = new sharkDeploy(require('../shark-conf'));
const buildPath = path.join(sf.__dirname, 'build');
const sharkConf = {
    buildWebapp: path.join(buildPath, 'app'),
    buildStatics: path.join(buildPath, 'mimg'),
};
const argv = require('yargs').argv;
const deployOption = {
    target: argv.target,
    branch: argv.branch,
    buildWebapp: sharkConf.buildWebapp,
    buildStatics: sharkConf.buildStatics
};

sd.deployGitApp(deployOption);
sd.deployGitStatics(deployOption);
sd.deployNos(deployOption);