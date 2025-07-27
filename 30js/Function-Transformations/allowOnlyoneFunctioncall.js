
function once(fn) {
  let count = 0;
  return function (...args) {
    ++count;
    if (count === 1) {
      return fn(...args);
    } else {
      return undefined;
    }
  };
}

let fn = (a, b, c) => a + b + c;

// console.log(once(fn));
let onceFn = once(fn);

console.log(onceFn(1, 2, 3)); // 6
console.log(onceFn(2, 3, 6)); // 6