let arr = [2, 6, 17, 28, 46, 68];

function squarer(x) {
    return x * x;
}

Array.prototype.mymap = function (cb) {
    let newArr = [];
    for (let i = 0; i < this.length; i++) {
        let ans = cb(this[i]);
        newArr.push(ans);
    }
    return newArr;
}

let SqArr = arr.mymap(squarer);
console.log(SqArr);
let AnotherSArr = AnotherSArr.mymap(squarer);
console.log(AnotherSArr);