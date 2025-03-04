async function sleep(milisec){
console.log(milisec)
await new Promise((resolve)=> setTimeout(resolve, milisec))
}

sleep(200)