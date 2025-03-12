function cancellable(fn, args, t) {

    fn(...args)

   const timer = setInterval(()=>fn(...args), t)

   const cancleFn =()=> clearInterval(timer)

   return cancleFn



}

console.log(cancellable(fn = (x) => x * 2, args = [4], t = 35))