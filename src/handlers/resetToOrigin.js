const utils = require("../utils");
const shell = require("shelljs");
const { Confirm } = require("enquirer");

/**
 * 强制重置当前分支为远端分支
 * @return {void}
 */
function reset() {
  // 获取当前的分支
  const currentBranch = shell
    .exec("git rev-parse --abbrev-ref HEAD")
    .stdout.trim();
  // console.log(currentBranch)

  // 构建重置命令
  const command = `git reset --hard origin/${currentBranch}`;
  // 检查命令，确认执行
  const prompt = new Confirm({
    name: "question",
    message: `continue? (type f for cancel)\n${command}`,
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
  reset,
};
