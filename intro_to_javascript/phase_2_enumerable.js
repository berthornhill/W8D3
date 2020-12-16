Array.prototype.myEach = function(callback){
    let i = 0;
    for (i; i < this.length; i++){
        callback(this[i]);
    }
}

function addTwo(num){
    return 2 + num;
}

Array.prototype.myMap = function(callback){
    let mapped = [];
    this.myEach((elem) => mapped.push(callback(elem)));
    return mapped;
}

Array.prototype.myReduce = function(callback, initialValue) {

    let reduced = initialValue
    this.myEach(element => {
        if (!reduced) {
            reduced = element;
        } else {
            reduced = callback(reduced, element);
        }
    })
    return reduced;
}

function multiplyTwo(num1, num2) {
    return num1 * num2;
}