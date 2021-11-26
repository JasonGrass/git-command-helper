#!/usr/bin/env node

/*
调用方式
1 node ./src/index.js -x xxx
2 先执行 npm link，然后就可以全局使用命令 gitt 了（如果更新了 bin 的配置，则需要重新执行  npm link）
*/

const {
  program
} = require('commander')
const shell = require('shelljs');
const handler = require("./handlers")

// 检查是否安装的 git
if (!shell.which('git')) {
  shell.echo('Sorry, this script requires git');
  shell.exit(1);
}

// pn 命令，推送新分支
program
  .command('pn <branch>')
  .action((branch)=>{
    handler.pushNew(branch)
  });

// rs 命令，重置到同名远端分支
program
  .command("rs")
  .action(()=>{
    handler.reset()
  });

program.parse(process.argv)

// 命令的执行路径
// const dir = process.cwd();
// console.log("exe dir:", dir);
// console.log("options:", options);

// shell.exec("git status")
