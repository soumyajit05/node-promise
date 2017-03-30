`use strict`;

let defaults = (item1 = 1, item2 = 2) => {
    return (`sum = ${item1+item2}`);
}
module.exports = {
    defaults
};