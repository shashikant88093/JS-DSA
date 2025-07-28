let map = new Map();
function memoize(fn) {
  return function (...args) {
    let key = JSON.stringify(args); // create unique key for args
    if (map.has(key)) {
      return map.get(key);
    } else {
      let output = fn(...args);
      map.set(key, output); 
      return output;
    }
  };
}
let callCount = 0;
const memoizedFn = memoize(function (a, b) {
  callCount += 1;
  return a + b;
});
console.log(memoizedFn(2, 3)); // 5
console.log(memoizedFn(2, 3)); // 5
console.log(memoizedFn(2, 3, 6)); // 5
console.log(callCount, "count"); // 1
// onceFn(2, 3, 6); // returns undefined without calling fn
console.log(map, "map");