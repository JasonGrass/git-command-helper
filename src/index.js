#!/usr/bin/env node

/*
调用方式
1 node ./src/index.js -x xxx
2 先执行 npm link，然后就可以全局使用命令 gitt 了（如果更新了 bin 的配置，则需要重新执行  npm link）
*/

const {
  program
} = require('commander')

program
  .option('-d, --debug', 'output extra debugging')
  .option('-s, --small', 'small pizza size')
  .option('-p, --pizza-type <type>', 'flavour of pizza')

program.parse(process.argv)

// 命令的执行路径
const dir = process.cwd();

// 解析命令行，获取命令配置
const options = program.opts();

console.log("exe dir:", dir);
console.log("options:", options);
