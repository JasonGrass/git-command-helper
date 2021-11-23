function isEmptyOrSpaces(str){
    return str === null || str === undefined || str.trim() === ''
}

module.exports = {
    isEmptyOrSpaces
}

