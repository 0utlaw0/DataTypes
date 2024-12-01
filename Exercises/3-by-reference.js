'use strict';
const obj = {n: 5};
const inc = (x) => {
    x.n++;
};
inc(obj);
console.dir(obj);
module.exports = { inc };
