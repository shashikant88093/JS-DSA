// [2,1,2]  to [1,4,4]

//   with sorting approch
// function square(arr, squareArr) {
//     if (arr.length !== squareArr.length) return false;

//     // Sort both arrays numerically
//     let arrSort = arr.slice().sort((a, b) => a - b);
//     let squareArrSort = squareArr.slice().sort((a, b) => a - b);

//     for (let i = 0; i < arrSort.length; i++) {
//         if (arrSort[i] * arrSort[i] !== squareArrSort[i]) {
//             return false;
//         }
//     }

//     return true;
// }

// let arr = [1, 2, 3];
// let arrSquare = [4, 1, 9];

// console.log(square(arr, arrSquare)); // true

//  time complexity = nlogn , space = o(n)


// ============================= time complexity = n2 due to indexof inside the for loop==================================================



// function nsqaure(arr, arrSquare) {

//     if (arr.length !== arrSquare.length) return false
//     for (let i = 0; i < arr.length; i++) {

//         let currentIndex = arrSquare.indexOf(arr[i] ** 2)

//         // console.log(currentIndex)
//         if (currentIndex == -1) {
//             return false
//         }

//         // let s =
//          arrSquare.splice(currentIndex, 1)

//         // console.log(s, "s")

//     }

//     return true

// }



// let arr = [1, 2, 3];
// let arrSquare = [4, 1, 9];

// console.log(nsqaure(arr, arrSquare))



// ================================= o(n) time complexity =========================================================



function bestComplexity(arr, squareArr) {
    if (arr.length !== squareArr.length) return false

    let frequencyCounterOne = {}
    let frequencyCounterTwo = {}

    for (let val of arr) {
        frequencyCounterOne[val] = (frequencyCounterOne[val] || 0) + 1
    }


    for (let val of squareArr) {
        frequencyCounterTwo[val] = (frequencyCounterTwo[val] || 0) + 1
    }


    for (let key in frequencyCounterOne) {


        // console.log(!(key ** 2 in frequencyCounterTwo))

        // console.log(frequencyCounterTwo[key ** 2] !== frequencyCounterOne[key],"compare")

        if (!(key ** 2 in frequencyCounterTwo)) {
            return false
        }
        if (frequencyCounterTwo[key ** 2] !== frequencyCounterOne[key]) {
            return false
        }

    }

    return true
}

let arr = [2, 1, 3];
let arrSquare = [4, 1, 9];



console.log(bestComplexity(arr, arrSquare))