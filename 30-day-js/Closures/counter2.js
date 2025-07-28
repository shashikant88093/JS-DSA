

function counter(init){
let count = init
    return {
        increment : ()=> ++count,
        decrement : ()=> --count,
        reset: ()=> (count = init)
    }
}

console.log(counter(5).increment())
console.log(counter(5).decrement())
console.log(counter(5).reset())
console.log(counter(5).increment())