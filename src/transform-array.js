const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
 function transform(arr) {
  /*check if its an array*/
  if(Array.isArray(arr)) {
    /*check if its empty*/
    if(arr.length !== 0) {
      /*check if its not simple arr*/
      if(arr.includes('--discard-next') || arr.includes('--discard-prev') || arr.includes('--double-prev') || arr.includes('--double-next')) {
       
        let arrNew = [...arr];
    for (let i = 0; i < arrNew.length; i++) {
      if(arrNew[i] === '--discard-next') {
        if(arrNew.indexOf(arrNew[i]) === arrNew.indexOf(arrNew[arrNew.length-1])) {
          arrNew.splice([i],1)
          return arrNew;
        } else {
          return arrNew.splice([i],2)
    }
      } else if (arrNew[i] === '--discard-prev') {
        if(arrNew.indexOf(arrNew[i]) === 0) {
          
          arrNew.splice([i],1)
          return arrNew;
          
        } else {
          return arrNew.splice([i-1],2)
        }
     
      } else if (arrNew[i] === '--double-next') {
        if(arrNew.indexOf(arrNew[i]) === arrNew.indexOf(arrNew[arrNew.length-1])) {
          arrNew.splice([i],1)
          return arrNew;
        } else {
          return arrNew[i] = arrNew[i+1] 
        }
     
      } else if (arrNew[i] === '--double-prev') {
        if(arrNew.indexOf(arrNew[i]) === 0) {
          arrNew.splice([i],1)
          return arrNew;
        } else {
          return arrNew[i] = arrNew[i-1];
       }  
      }
    }
        
} else return arr;
} 
else {
 return [];
} 
  }

else {
 throw new Error("'arr' parameter must be an instance of the Array!")
}
   
}  

        

module.exports = {
  transform
};
