Array.prototype.myUniq = function(){
    let uniq = []; 
    this.forEach(element => {
        if (!uniq.includes(element)) { 
            uniq.push(element); 
        } 
    })
    return uniq;
}

console.log([1,2,3].myUniq())