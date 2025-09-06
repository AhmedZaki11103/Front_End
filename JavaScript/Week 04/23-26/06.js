let flt = 10.4;

console.log(Math.round(flt)); // 10
console.log(Math.floor(flt)); // 10
console.log(Math.trunc(flt)); // 10
console.log(Math.min(Math.trunc(flt),Math.ceil(flt))); // 10
console.log(Math.max(Math.trunc(flt),Math.round(flt))); // 10
