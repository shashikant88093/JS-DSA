// Input: 
// array = [
//   {"id":"1"},
//   {"id":"1"},
//   {"id":"2"}
// ], 
// fn = function (item) { 
//   return item.id; 
// }

// Output: 
// { 
//   "1": [{"id": "1"}, {"id": "1"}],   
//   "2": [{"id": "2"}] 
// }

Array.prototype.groupBy = function (fn) {
    return this.reduce((acc, item) => {
        let key = fn(item);     
        if (!acc[key]) {        
            acc[key] = [];
        }
        acc[key].push(item);       
        return acc;
    }, {});
    }
    let array = [
        { "id": "1" },
        { "id": "1" },
        { "id": "2" }
    ]

    let fn = function (item) {
        return item.id
    }

    const group = array.groupBy(fn)
    console.log(group)
