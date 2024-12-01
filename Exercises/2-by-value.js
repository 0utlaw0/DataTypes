'use strict';
const a = 5;
const inc = (x) =>{
  return ++x;
};
const b = inc(a);
console.dir({a, b});
