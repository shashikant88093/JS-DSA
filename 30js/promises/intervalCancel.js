function cancellable(fn, args, t) {
    fn(...args)
    let cancelTimeMs = setInterval(() => {
        fn(...args)
    }, t)
    let cancelFn = () => {
        clearInterval(cancelTimeMs)
    }
    return cancelFn
};


let fn = (x) => x * 2
let args = [4]
let t = 35

console.log(cancellable(fn,args,t))