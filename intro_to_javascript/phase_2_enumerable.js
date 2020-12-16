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

