async function sleep(millisec) {

    await new Promise((resolve) => setTimeout(resolve, millisec))
}

let t = Date.now()
sleep(100).then(() => console.log(Date.now() - t)) // 100