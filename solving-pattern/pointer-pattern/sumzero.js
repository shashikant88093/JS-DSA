// input = [-3,-2,-1,0,1,2,3] 
// ====================== time complexity n^2 ==========================================================
// function sumZero(arrList) {

//     for (let i = 0; i < arrList.length; i++) {
//         for(let j=i;j<arrList.length;j++){
//             if((arrList[i] + arrList[j]) == 0){
//                 console.log(arrList[i], arrList[j])

//             }
//         }

//     }

// }
// let arr = [-3, -2, -1, 0, 1, 2, 3]

// console.log(sumZero(arr))



// ===================================== o(n) =========================================


function sumZero(arrlist){

    let left = 0;
    let right = arrlist.length - 1;

    while(left<right){

        let sum = arrlist[left] + arrlist[right]
        if(sum === 0 ){
            return [arrlist[left] , arrlist[right]]
        }else if(sum > 0){
            right--;
        }else{
            left++;
        }
    }


}

let arr = [-3,-2,-1,0,1,2,3]
console.log(sumZero(arr))