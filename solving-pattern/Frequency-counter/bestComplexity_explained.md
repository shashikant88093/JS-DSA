# 🧠 `bestComplexity()` Function Explained

This function checks whether every value in one array has its **corresponding square** in another array, with **matching frequency**.

---

## ✅ Function Definition

```js
function bestComplexity(arr, squareArr) {
```

Takes two arrays:
- `arr`: original values.
- `squareArr`: supposed to contain squares of values in `arr`.

---

## 🚫 Length Check

```js
if (arr.length !== squareArr.length) return false
```

- If lengths don't match, return `false` immediately.

---

## 📊 Frequency Counters

```js
let frequencyCounterOne = {}
let frequencyCounterTwo = {}
```

- Create two objects to track how often each number appears in each array.

---

## 🔁 Count Frequencies in `arr`

```js
for (let val of arr) {
    frequencyCounterOne[val] = (frequencyCounterOne[val] || 0) + 1
}
```

Example:  
For `arr = [2, 1, 3]`, you get:
```js
frequencyCounterOne = { 2: 1, 1: 1, 3: 1 }
```

---

## 🔁 Count Frequencies in `squareArr`

```js
for (let val of squareArr) {
    frequencyCounterTwo[val] = (frequencyCounterTwo[val] || 0) + 1
}
```

Example:  
For `squareArr = [4, 1, 9]`, you get:
```js
frequencyCounterTwo = { 4: 1, 1: 1, 9: 1 }
```

---

## 🔎 Compare Frequency Counts

```js
for (let key in frequencyCounterOne) {
    if (!(key ** 2 in frequencyCounterTwo)) {
        return false
    }
    if (frequencyCounterTwo[key ** 2] !== frequencyCounterOne[key]) {
        return false
    }
}
```

- For each `key` in the first counter:
  - Check if `key^2` exists in the second counter.
  - Check if the frequency of the square matches.

---

## ✅ Final Return

```js
return true
```

- If no mismatches are found, the arrays match as expected.

---

## 📌 Example

```js
let arr = [2, 1, 3];
let arrSquare = [4, 1, 9];

console.log(bestComplexity(arr, arrSquare)); // true
```

---

## ⏱ Time & Space Complexity

| Type           | Complexity | Explanation                         |
|----------------|------------|-------------------------------------|
| Time           | O(n)       | One pass to build each frequency map + comparison |
| Space          | O(n)       | Two hash maps to store frequencies  |

---