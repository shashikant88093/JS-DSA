
//  ============ time complexity  n(nlogn)=====================================

// function validAngram(an1,an2){

//     if(an1.length !== an2.length){
//         return false
//     }

//     return an1.split("").sort().join("") == an2.split("").sort().join("")

// }



// console.log(validAngram('aaz','zaa'))


//  =================== time complexity o(n) ==============================================================

function validAngram(first, seacond) {
    if (first.length !== seacond.length) {
        return false
    }
    let lookup = {}

    for (let i = 0; i < first.length; i++) {
        let letter = first[i]

        lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1
    }



    for (let i; i < first.length; i++) {
        let letter = first[i]

        if (!lookup[letter]) {
            return false
        } else {
            lookup[letter] -= 1
        }
    }

}

console.log(validAngram('aaz', 'aaz'))