//`use strict`;

let defaults = function (item1 = 1+item2, item2 = 2) {
    console.log(`sum = ${item1+item2}`);
    return (`sum = ${item1+item2}`);
}
module.exports = {
    defaults
};