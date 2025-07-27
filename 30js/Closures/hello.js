function Hello() {
    
   return function(...args){
    return "Hello World"
   }
};

console.log(Hello()())