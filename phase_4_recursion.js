function range(start, end) {
    if (start === end) {
        return [start];
    }

    return [start].concat(range(start + 1, end));
}

// console.log(range(-2, 4));

function sumRec(arr) {
    if (arr.length === 1) {
        return arr[0];
    }
    return arr[0] + sumRec(arr.slice(1, arr.length));
}

// console.log(sumRec([1,2,3]));

function exponent(base, exp) {
    if (exp === 1) {
        return base;
    }
    if (exp > 0) {
        return base * exponent(base, exp - 1);
    } else {
        return (1/base) * exponent((1/base), -exp - 1);
    }
}

console.log(exponent(2, -2));