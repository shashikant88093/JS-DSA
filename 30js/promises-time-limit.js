function timeLimit(fn, t) {
    // ============== more fast ==============
    // return async function(...args) {
    //     const ti= new Promise((resolve,reject)=>{
    //         setTimeout(()=>{reject("Time Limit Exceeded")},t)


    //     })
    //     return Promise.race([fn(...args),ti])

    // }

    
    return async function(...args) {
        return new Promise((resolve,reject) => {
           setTimeout(() => reject("Time Limit Exceeded"),t);
           fn(...args).then(resolve).catch(reject)
       })
   }
};

fn = async (n) => { 
    await new Promise(res => setTimeout(res, 100)); 
    return n * n; 
  }

  t = 50

  console.log(timeLimit(fn,t))