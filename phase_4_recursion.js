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

// console.log(exponent(2, -2));

function exponent2(base, exp) {
    if (exp === 1) {
        return base;
    }
    if (exp % 2 === 0) {
        return exponent2(base, exp / 2) ** 2;
    } else {
        return base * (exponent2(base, (exp-1)/ 2) ** 2);
    }
}

// console.log(exponent2(2, 13));

function fibonacci(n) {
    if (n === 1) {
        return [1];
    }
    if (n === 2) {
        return [1, 1];
    }

    let prev_fib = fibonacci(n-1);
    prev_fib.push(prev_fib[prev_fib.length - 1] + prev_fib[prev_fib.length - 2]);
    return prev_fib;
}

// console.log(fibonacci(5));

function deepDup(arr) {
    if (Array.isArray(arr) !== true) {
        return arr;
    }

    const dd = [];

    for (let i = 0; i < arr.length; i++) {
        let ele = arr[i];
        
        dd.push(deepDup(ele));

    }

    return dd;
}
array = [0,[1,3],[2,[3]]];
duped = deepDup(array);
duped[1].push(4);
// console.log(array);
// console.log(duped);

function bsearch(arr, target) {
    
    if (arr.length === 0 && arr[0] !== target) {
        return -1;
    }

    let mid = Math.floor(arr.length / 2);
    
    if (arr[mid] === target) {
        return mid;
    }

    let right = arr.slice(mid + 1, arr.length);
    let left = arr.slice(0, mid);

    if (target < arr[mid]) {
        return bsearch(left, target);
    } else {
        result = bsearch(right, target);
        if (result === -1) {
            return -1
        } else {
            return mid + 1 + result;
        }
    }
}

console.log(bsearch([1,3,5,7,10,11,15], 11));