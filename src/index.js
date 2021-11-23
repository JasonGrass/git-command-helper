#!/usr/bin/env node
const { program } = require('commander')

program
  .option('-d, --debug', 'output extra debugging')
  .option('-s, --small', 'small pizza size')
  .option('-p, --pizza-type <type>', 'flavour of pizza')

program.parse(process.argv)

// 命令的执行路径
const dir = process.cwd();

// 解析命令行，获取命令配置
const options = program.opts();

console.log(options)
