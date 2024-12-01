'use strict';
const arr = [false, 1, -10, `super`, true, `10`, true, `Hi`];
const countTypesInArray = (x) => {
    const count = {};
    for(const value of x) {
    if (typeof value === "number"){
        if(count.number === undefined){
            count.number = 0;
        }
        count.number++;
    } else if (typeof value === "boolean"){
        if(count.boolean === undefined){
            count.boolean = 0;
        }
        count.boolean++;
    } else {
        if(count.string === undefined){
            count.string = 0;
        }
        count.string++;
    }
}
    return count;
};
console.dir(countTypesInArray(arr));
module.exports = { countTypesInArray };
