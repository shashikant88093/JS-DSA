
function except(val) {
    return {
        toBe: function (otherVal) {
            if (val === otherVal) return true
            else throw new Error("Not Equal")
        },
        toBeNot: function (otherVal) {
            if (val !== otherVal) return true
            else throw new Error("Equal")
        }
    }
}

console.log(except(5).toBe(5))


