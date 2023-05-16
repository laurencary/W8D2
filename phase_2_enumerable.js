
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


