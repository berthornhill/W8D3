Array.prototype.bubbleSort = function(){
    let sorted = false;
    let j = this.length -1
    while (!sorted){
        sorted = true
        for(let i = 0; i < j; i++){
            if (this[i] > this[i+1]){
                let x = this[i];
                let y = this[i+1]
                this[i] = y;
                this[i+1] = x;
                sorted = false;
            }
        }
        j--

    }
    return this;
}


String.prototype.substrings = function(){
    const newArr = [];
    for (let index = 0; index < this.length; index++) {
      for (let j = 0; j < this.length; j++) {
          if (j >= index){
            newArr.push(this.slice(index, j + 1));
          }
          
      }
        
    }
    return newArr;
}
