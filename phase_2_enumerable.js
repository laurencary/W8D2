
Array.prototype.myEach = function(callback) {
    for (let i = 0; i < this.length; i ++) {
        callback(this[i]);
    }
}

function callback(ele) {
    return ele * 2;
}

// console.log([2,3,4].myEach(callback));

Array.prototype.myMap = function(cb) {
    let result = [];
    this.myEach(function(ele) {
        result.push(cb(ele))
    });
    return result;
}

// console.log([2,3,4].myMap(callback));

Array.prototype.myReduce = function(callback, acc = null) {
    if (acc === null) {
        acc = this[0];
        this.shift();
    }

    this.myEach(function(ele) {
        acc = callback(acc, ele);
    })

    return acc;
}

// console.log([1, 2, 3].myReduce(function (acc, el) {
//     return acc + el;
// }));

// console.log([1, 2, 3].myReduce(function (acc, el) {
//     return acc + el;
// }, 25));

