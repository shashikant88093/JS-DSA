// arr = [1,1,1,1,1,2]
// arr = [1,2,3,4,4,4,7,7,12,12,13]
// arr = []
// arr = [-2,-1,-1,0,1]



function Uniquevalue(arrlist){
let countObj = {}
    for(let i=0;i<arrlist.length;i++){
        // console.log(arrlist[i])
        countObj[arrlist[i]] = (countObj[arrlist[i]] || 0) + 1
    }
    

    return Object.keys(countObj).length
}

// let arr = [1,1,1,1,1,2]
// let arr = [1,2,3,4,4,4,7,7,12,12,13]
let arr =[0]

console.log(Uniquevalue(arr))