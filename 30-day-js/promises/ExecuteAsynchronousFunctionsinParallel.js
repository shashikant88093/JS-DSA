function runAll(functions) {
    return new Promise((resolve, reject) => {
        const results = new Array(functions.length);
        let count = 0;

        functions.forEach((fn, i) => {
            fn()
                .then(val => {
                    results[i] = val;
                    count++;
                    if (count === functions.length) resolve(results);
                })
                .catch(reason => reject(reason)); 
        });
    });
}


const f1 = () => Promise.resolve(10);
const f2 = () => new Promise(res => setTimeout(() => res(20), 500));
const f3 = () => Promise.resolve(30);

runAll([f1, f2, f3]).then(console.log).catch(console.error);
// 👉 [10, 20, 30]
