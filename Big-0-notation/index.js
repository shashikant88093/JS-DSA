var a = 10;

if(function test(){}){
    a += test;
}

console.log(a); // 10