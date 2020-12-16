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

function deepDup(arr) {
    let dup = []
    arr.forEach(element => {
        if (element instanceof Array) {
           dup.push(deepDup(element));
        } else {
            dup.push(element);
        }
    });
    return dup
}

function mergeSort(arr) {
    if ((arr.length === 1) || (arr.length === 0)) {
        // debugger
        return arr;
    }

    let middle = arr.length / 2;
    middle = Math.floor(middle);
    debugger
    let leftSorted = mergeSort(arr.slice(0,middle));
    let rightSorted = mergeSort(arr.slice(middle, arr.length));
    debugger
    return merge(leftSorted, rightSorted);
}

function merge(arr1, arr2) {
    debugger
    let merged = [];
    while ((arr1.length > 0 )&& (arr2.length > 0)) {
        debugger
        if (arr1[0] < arr2[0]){
            merged.push(arr1.shift());
        }  else {
            merged.push(arr2.shift());
        }
        debugger
    }
    debugger
   return merged.concat(arr1.concat(arr2));
}
