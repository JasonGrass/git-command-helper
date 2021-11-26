const pushNewHandler = require("./pushNewBranch")
const resetHandler = require("./resetToOrigin")

const pushNew = pushNewHandler.pushNew;
const reset = resetHandler.reset;

module.exports = {
    pushNew,
    reset
}
