function cancellable(fn, args, t) {
    let timer
    const cancelFn = () => {
        clearTimeout(timer)

    };
    timer = setTimeout(() => {
        fn(...args)
    }, t)

    return cancelFn
}

let fn = (x) => x * 5
let args = [2]
let t = 20

console.log(cancellable(fn, args, t))