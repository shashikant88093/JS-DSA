var TimeLimitedCache = function() {
    this.cache = new Map();
};


TimeLimitedCache.prototype.set = function(key, value, duration) {
    let found = this.cache.has(key);

    // If key already exists, clear the old timer
    if (found) clearTimeout(this.cache.get(key).ref);

    // Store the new value with a timeout to delete after duration
    this.cache.set(key, {
        value,
        ref: setTimeout(() => this.cache.delete(key), duration)
    });

    return found;
};

TimeLimitedCache.prototype.get = function(key) {
    return this.cache.has(key) ? this.cache.get(key).value : -1;
};


TimeLimitedCache.prototype.count = function() {
    return this.cache.size;
};

const timeLimitedCache = new TimeLimitedCache();

console.log(timeLimitedCache.set(1, 42, 1000)); // false (new key added)
console.log(timeLimitedCache.get(1)); // 42
console.log(timeLimitedCache.count()); // 1

// Wait 1.5 seconds to let the key expire
setTimeout(() => {
    console.log(timeLimitedCache.get(1)); // -1 (expired)
    console.log(timeLimitedCache.count()); // 0
}, 1500);

// ✅ Adding another key to test overwrite scenario
setTimeout(() => {
    console.log(timeLimitedCache.set(2, 100, 2000)); // false (new key)
    console.log(timeLimitedCache.set(2, 200, 2000)); // true (overwrites old key)
    console.log(timeLimitedCache.get(2)); // 200
    console.log(timeLimitedCache.count()); // 1
}, 2000);
