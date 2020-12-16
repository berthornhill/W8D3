Array.prototype.myUniq = function(){
    let uniq = []; 
    this.forEach(element => {
        if (!uniq.includes(element)) { 
            uniq.push(element); 
        } 
    })
    return uniq;
}

// console.log([1,2,3].myUniq())

Array.prototype.myTwoSum = function() {
    let twoSum = [];
    for (let i = 0; i < this.length; i++) {
        for (let j = 0; j < this.length; j++) {
            if ((i != j) && (this[i] + this[j] === 0)) {
                twoSum.push([i, j]);
            }
        }
    }
    return twoSum;
};

Array.prototype.transpose = function() {
    let transposed = [];
    for (let col = 0; col < this[0].length; col++) {
        let newRow = [];
        for (let row = 0; row < this.length; row++) {
            newRow.push(this[row][col]);
        }
        transposed.push(newRow);
    }
    return transposed;
}
// [1,2,3],
// [4,5,6]