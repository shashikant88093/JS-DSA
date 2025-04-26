
# Frequency Counter Pattern in JavaScript

## 🔧 When to Use

The **Frequency Counter Pattern** is a powerful technique used to:

- Count occurrences of values.
- Compare datasets (strings, arrays, etc.).
- Optimize time complexity from **O(n²)** to **O(n)**.

---

## 🧠 Core Idea

- Use an **object** (or a `Map`) to track how often values appear.
- Avoid nested loops by comparing value counts instead.

---

## ✅ Example 1: Check if Two Strings Are Anagrams

### 🧪 Problem
Check if two strings contain the same characters in the same frequencies.

### 💡 Code

```js
function isAnagram(str1, str2) {
    if (str1.length !== str2.length) return false;

    const freq1 = {};
    const freq2 = {};

    for (let char of str1) {
        freq1[char] = (freq1[char] || 0) + 1;
    }

    for (let char of str2) {
        freq2[char] = (freq2[char] || 0) + 1;
    }

    for (let key in freq1) {
        if (freq1[key] !== freq2[key]) {
            return false;
        }
    }

    return true;
}
```

### 🖨️ Example Usage

```js
isAnagram("listen", "silent"); // true
isAnagram("hello", "bello");   // false
```

---

## ✅ Example 2: Check if One Array is a Squared Version of Another

### 💡 Code

```js
function same(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;

    let freq1 = {};
    let freq2 = {};

    for (let val of arr1) {
        freq1[val] = (freq1[val] || 0) + 1;
    }

    for (let val of arr2) {
        freq2[val] = (freq2[val] || 0) + 1;
    }

    for (let key in freq1) {
        if (!(key ** 2 in freq2)) return false;
        if (freq2[key ** 2] !== freq1[key]) return false;
    }

    return true;
}
```

### 🖨️ Example Usage

```js
same([1, 2, 3], [1, 4, 9]); // true
same([1, 2, 3], [1, 9, 9]); // false
```

---

## 📊 Time & Space Complexity

| Type         | Complexity |
|--------------|------------|
| Time         | O(n)       |
| Space        | O(n)       |

---

## 📌 Summary

The **Frequency Counter** pattern helps solve problems efficiently by leveraging a counting strategy instead of brute-force nested loops.
