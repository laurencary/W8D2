// Your code here
Array.prototype.uniq = function() {
    const uniq_eles = []
    for (let i = 0; i < this.length; i++) {
        ele = this[i];
        prev_ele = this[i-1];
        if (uniq_eles.includes(ele)) {
            continue;
        } 
        uniq_eles.push(ele);
    }
    return uniq_eles;
}

// console.log([1,1,2,3,4].uniq());

Array.prototype.twoSum = function() {
    const pairs = [];
    for (let i = 0; i < this.length - 1; i++) {
        ele1 = this[i];
        for (let j = i + 1; j < this.length; j++) {
            ele2 = this[j];
            if (ele1 + ele2 === 0) {
                pairs.push([i, j])
            }
        }
    }

    return pairs;
}
// console.log([-1, 0, 2, -2, 1].twoSum());


Array.prototype.transpose = function() {
    const transposed = [];
    for (let row = 0; row < this.length; row ++) {
        subArr = [];
        for(let col = 0; col < this.length; col ++) {
            subArr.push(this[col][row]);
        }
        transposed.push(subArr);
    }
    return transposed;
}

// console.log([[0, 1, 2], [3, 4, 5], [6, 7, 8]].transpose())

