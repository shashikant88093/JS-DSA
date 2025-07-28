// This code will not work for dupilcate array

function sort(ar) {
  for (let i = 0; i < ar.length; i++) {
    if (ar[i] > ar[i + 1]) {
      [ar[i], ar[i + 1]] = [ar[i + 1], ar[i]];
      // let swap = ar[i];
      // ar[i] = ar[i + 1];
      // ar[i + 1] = swap;
    }
  }
  // console.log(ar, "ar");
  return ar;
}

let arr = [2, 1, 4, 3, 5, 6, 9, 8, 7];

console.log(sort(arr));
