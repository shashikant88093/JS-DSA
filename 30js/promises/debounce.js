

function debounce(fn, t) {
    let timer;
    return function (...args) {
        let context = this;
        clearInterval(timer)
        timer = setTimeout(() => {
            fn.apply(context, args)
        }, t)

    }
};
const fun = () => {
    console.log("This is debouce")
}

console.log(debounce(fun, 1000)())