#!/usr/bin/env node

const { Command } = require("commander");

const program = new Command();

program
  .version("0.1.0")
  .argument("<username>", "user to login")
  .argument("[password]", "password for user, if required", "no password given")
  .description("example program for argument")
  .action((username, password) => {
    console.log("username:", username);
    console.log("password:", password);
  });

program
  .version("0.1.0")
  .arguments("<username> [password]")
  .description("test command")
  .action((username, password) => {
    console.log("username:", username);
    console.log("password:", password || "no password given");
  });

program
  .version("0.1.0")
  .argument("<username>", "user to login")
  .argument("[password]", "password for user, if required", "no password given")
  .option("-c, --check", "check option")
  .option("-C, --no-check", "no check option")
  .option("-o, --output <output>", "output options", "./temp")
  .description("example program for argument")
  .action((username, password, options) => {
    console.log("username:", username);
    console.log("password:", password);
    console.log(options);
  });

program
  .command("join")
  .option("-c, --check", "check option")
  .option("-o, --output <output>", "output options", "./temp")
  .description("example program for command")
  .action((options, command) => {
    console.log(options);
  });

program
  .version("0.1.1")
  .command("join")
  .argument("<env>", "environment")
  .argument("[second]", "second command")
  .option("-c, --check", "check option")
  .option("-o, --output <output>", "output options", "./temp")
  .description("example program for command")
  .action((env, second, options, command) => {
    console.log(env);
    console.log(second);
    console.log(options);
  });

program
  .version("0.1.1")
  .command("join")
  .argument("<env>", "environment")
  .argument("<str...>", "string list")
  .option("-c, --check", "check option")
  .description("example program for variadic argument ")
  .action((env, str, options, command) => {
    console.log(env);
    console.log(str);
    console.log(options);
  });

program
  .version("0.1.0")
  .command("install [name]", "install one or more packages") // index-install
  .command("search [query]", "search with optional query", {
    executableFile: "mySearchSubCommand",
  })
  .command("list", "list packages installed", { isDefault: true });

async function run() {
  /* code goes here */
}

async function main() {
  program.command("run").action(run);
  await program.parseAsync(process.argv);
}

program.parse();
