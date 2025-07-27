

function clouser() {
    let arr = ["A", "B", "C", "D"];
    let index = 0;

    return function () {
        let letter = arr[index];   // get current letter
        index = (index + 1) % arr.length;  // move to next, reset to 0 after D
        console.log(index,"index")
        return letter;
    };
}

const nextLetter = clouser();

console.log(nextLetter()); // A
console.log(nextLetter()); // B
console.log(nextLetter()); // C
console.log(nextLetter()); // D
console.log(nextLetter()); // A again
console.log(nextLetter()); // B again