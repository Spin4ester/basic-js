const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
 function getSeason(date) {
  if (typeof date !== "undefined") {
    if(date instanceof Date) {
     let month = date.getMonth();
     if(month <= 1 || month === 11) {
       console.log('winter')
       return 'winter'
     } else if 
       (month > 1 && month <= 4) {
         console.log('spring')
         return 'spring'
     }
       else if 
       (month > 4 && month <= 7) {
         console.log('summer')
       return 'summer'
     }
         else if 
       (month > 7 && month <= 10) {
         console.log('autumn (fall)')
       return 'autumn (fall)'
     }
    }
    else {
      throw new Error('Invalid date!')
    }
   }
   else {
     return 'Unable to determine the time of year!';
   }
}

module.exports = {
  getSeason
};
