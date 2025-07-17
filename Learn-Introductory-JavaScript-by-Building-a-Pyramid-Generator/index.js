const pyramids = document.getElementById("pyramid")



let character = "#"
let count = 4
let rows = []
let revert = false

function Pyramid(rowNumber, rowCount) {
    return Array(rowCount - rowNumber).fill(" ").join("") + Array(2 * rowNumber - 1).fill(character).join("") + Array(rowCount - rowNumber).fill(" ").join("");
}

for (let i = 1; i <= count; i++) {
    if (revert) {
        rows.unshift(Pyramid(i, count))
    } else {
        rows.push(Pyramid(i, count))

    }
}


let result = ""

for (const row of rows) {
    result = result + row + "\n"
}
console.log(result)
rows.forEach((data, index) => {
    const pre = document.createElement('pre');
    pre.id = `row-${index}`;
    pre.textContent = data;
    pyramids.appendChild(pre);
});