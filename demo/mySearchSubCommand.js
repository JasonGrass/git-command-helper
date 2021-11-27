#!/usr/bin/env node

const { Command } = require('commander');
const program = new Command();

program
.argument("<abc>")
  .option('--ignore-case', 'ignore case',false)
  .action((abc,options,command)=>{
      console.log("action",abc);
      console.log("action",options);
      console.log("action",command.args);
  });

program.parse(process.argv);

const arguments = program.args;
const options = program.opts();

console.log("@",arguments);
console.log("@",options);
console.log("@",program.processedArgs);

