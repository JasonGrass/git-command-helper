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
const {
  Confirm
} = require('enquirer');
const utils = require("./utils")

program
  .option('-d, --debug', 'output extra debugging')
  .option('-s, --small', 'small pizza size')
  .option('-pn, --push-new <type>', 'push as a new branch')

program.parse(process.argv)

// 命令的执行路径
// const dir = process.cwd();

// 解析命令行，获取命令配置
const options = program.opts();

// console.log("exe dir:", dir);
// console.log("options:", options);

if (!shell.which('git')) {
  shell.echo('Sorry, this script requires git');
  shell.exit(1);
}

// shell.exec("git status")

// 将当前分支 push 到一个新的分支
const pushNew = options["pushNew"];
if (!utils.isEmptyOrSpaces(pushNew)) {
  
  // 获取当前的分支
  const currentBranch = shell.exec("git rev-parse --abbrev-ref HEAD").stdout.trim()
  // console.log(currentBranch)

  // 构建推送命令
  const command = `git push origin ${currentBranch}:t/liujunjie/${pushNew}`
  // 检查命令，确认执行
  const prompt = new Confirm({
    name: 'question',
    message: `continue exe (type f for cancel)?\n${command}`,
    default: true
  });
  prompt.run()
    .then(answer => {
      if (answer) {
        // 执行命令
        const result = shell.exec(command);
        console.log(result.stdout);
      }
      else{
        // 取消
        console.log("cancel")
      }
    });
}

