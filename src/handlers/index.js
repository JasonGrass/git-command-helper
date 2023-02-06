const pushNewHandler = require("./pushNewBranch")
const resetHandler = require("./resetToOrigin")
const createPackageHandler = require("./createPackage")

const pushNew = pushNewHandler.pushNew;
const reset = resetHandler.reset;
const createPackage = createPackageHandler.package;

module.exports = {
    pushNew,
    reset,
    createPackage,
}

