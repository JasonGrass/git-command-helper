const utils = require("../utils")
const shell = require('shelljs');
const myConfig = require("../my.config")
const {
    Confirm
  } = require('enquirer');


/**
 * 将当前分支以新的分支名称，push 到远端
 * @param {string} branch 短分支名称，会被拼接上前缀
 * @return {void}
 */
function pushNew(branch) {

    if (utils.isEmptyOrSpaces(branch)) {
        return;
    }

    // 获取当前的分支
    const currentBranch = shell.exec("git rev-parse --abbrev-ref HEAD").stdout.trim()
    // console.log(currentBranch)

    // 构建推送命令
    const command = `git push origin ${currentBranch}:t/${myConfig.gitUserName}/${branch}`
    // 检查命令，确认执行
    const prompt = new Confirm({
        name: 'question',
        message: `continue? (type f for cancel)\n${command}`,
        default: true
    });
    prompt.run()
        .then(answer => {
            if (answer) {
                // 执行命令
                const result = shell.exec(command);
                console.log(result.stdout);
            } else {
                // 取消
                console.log("cancel")
            }
        });

}

module.exports = {
    pushNew
}