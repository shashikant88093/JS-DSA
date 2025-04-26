
# Multiple Pointer Pattern in JavaScript

## 🔧 When to Use

The **Multiple Pointer Pattern** is most effective when:

- The input (usually an array or string) is **sorted**.
- You're solving problems like:
  - Finding **pairs** that meet a certain condition (e.g., sum = 0).
  - Counting **unique values**.
  - Detecting **duplicates**.
- You want to reduce space complexity to **O(1)** while keeping time complexity **O(n)**.

---

## ✅ Problem: Count Unique Values in a Sorted Array

### 🧪 Input Example

```js
let arr = [1, 1, 2, 3, 3, 4, 5, 5];
```

We want to count how many unique values are in this **sorted** array.

---

## 🧠 Logic

- Use two pointers:
  - `i` marks the **position of the last unique value**.
  - `j` scans through the array.
- Whenever a new unique value is found (`arr[i] !== arr[j]`), increment `i` and set `arr[i] = arr[j]`.

---

## 💡 Code

```js
function countUniqueValues(arr) {
    if (arr.length === 0) return 0;

    let i = 0;

    for (let j = 1; j < arr.length; j++) {
        if (arr[i] !== arr[j]) {
            i++;
            arr[i] = arr[j]; // Optional: modifies the array
        }
    }

    return i + 1;
}
```

---

## 🖨️ Output

```js
console.log(countUniqueValues([1,1,2,3,3,4,5,5])); // Output: 5
```

---

## 📊 Time & Space Complexity

| Complexity | Value    |
|------------|----------|
| Time       | O(n)     |
| Space      | O(1)     |

---

## 📌 Summary

This technique allows for **efficient traversal** of sorted arrays without extra memory, making it perfect for problems involving uniqueness or pair searching.
