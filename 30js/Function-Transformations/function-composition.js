//  functions.reduceRight((acc, fn) => fn(acc), x)
// reduceRight iterates from the last function to the first (right → left).

// acc starts as x (the initial value).

// At each step:

// It calls fn(acc) and updates acc with the result.



function compose(functions) {
  return function (x) {
    return functions.reduceRight((acc, fn) => fn(acc), x);
  };
}

let functions = [(x) => x + 1, (x) => x * x, (x) => 2 * x];

console.log(compose(functions)(4));


//  2nd way 

function compose2(function1){
   return function(x) {
    let result = x
    for(let i=function1.length -1;i>=0;i--){
    result = function1[i](result)
    }
    return result
}
}

let function1 = [(x)=>x+1,(x)=>x*x,(x)=> 2*x]

console.log(compose2(function1)(4))