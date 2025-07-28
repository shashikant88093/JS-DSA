async function addTwoPromises(promise1, promise2) {
    const [a, b] = await Promise.all([promise1, promise2]);
    return a + b;
}

const promise1 = new Promise((resolve) => setTimeout(() => resolve(2), 20));
const promise2 = new Promise((resolve) => setTimeout(() => resolve(5), 60));
console.log(addTwoPromises(promise1, promise2));
