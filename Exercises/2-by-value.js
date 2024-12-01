'use strict';
const a = 5;
const inc = (x) => ++x;
const b = inc(a);
console.dir({ a, b });
module.exports = { inc };
