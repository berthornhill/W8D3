function range(start, end) {
    if (start > end) {
        return [];
    } else {
    // debugger
        let prevArr = range(start + 1, end);
        prevArr.unshift(start);
        return prevArr;
    }
}

function sumRec(arr){
    if (arr.length === 0){
        return 0;
    }else{
        return arr.shift() + sumRec(arr);
    }
}

function exponent(base, exp){
    if (exp === 0){
        return 1;
    }else{
        return base * exponent(base, exp - 1);
    }
    
}

function fibonacci(num){
    if (num === 1) {
        return [1];
    } else if( num === 0){
        return [];
    } else if (num === 2){
        return [1,1];
    
    }else{
        let arr = fibonacci(num - 1);
        return arr.concat(arr[arr.length-1] + arr[arr.length-2]);
    }
}


