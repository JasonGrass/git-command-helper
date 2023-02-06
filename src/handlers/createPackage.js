const utils = require("../utils");
const shell = require("shelljs");
const { Confirm } = require("enquirer");

/*
命令形式：gitt package
命令作用：等价于 git push origin [当前分支分支]:CheckDev -f
业务作用：在仓库 CI 中配置了自动打包功能，如果 CheckDev 分支出现更新，则触发自动打包

命令形式：gitt package <branch> 可以指定目标分支
命令作用：等价于 git push origin [当前分支分支]:<branch> -f

*/

/**
 *
 * @param {string} branch 短分支名称，会被拼接上前缀
 * @return {void}
 */
function package(branch) {
  // 获取当前的分支
  console.log("当前分支:");
  const currentBranch = shell
    .exec("git rev-parse --abbrev-ref HEAD")
    .stdout.trim();
  // console.log(currentBranch)

  // 构建推送命令
  let command = `git push origin ${currentBranch}:CheckDev -f`;
  if (!utils.isEmptyOrSpaces(branch)) {
    command = `git push origin ${currentBranch}:${branch} -f`;
  }

  // 检查命令，确认执行
  const prompt = new Confirm({
    name: "question",
    message: `即将执行的命令，请确认 (type f for cancel)\n${command}\n`,
    default: true,
  });

  prompt.run().then((answer) => {
    if (answer) {
      // 执行命令
      const result = shell.exec(command);
      console.log(result.stdout);
    } else {
      // 取消
      console.log("cancel");
    }
  });
}

module.exports = {
  package,
};
