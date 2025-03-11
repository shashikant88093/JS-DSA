

function cancellable(fn, args, t) {

    let isCancelled = false;

    setTimeout(() => {
        if (!isCancelled) {
            fn(...args)
        }
    }, t)

    return () => {
        isCancelled = true
    }
}

console.log(cancellable(fn = (x) => x * 5, args = [2], t = 20))