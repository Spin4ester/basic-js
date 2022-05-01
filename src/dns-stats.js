const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */

 // , { '.com': 1, '.com.epam': 1 })
 
function getDNSStats(domain) {
  // let obj = [...domain];
  // console.log(obj)
  for (let i = 0; i < domain.length; i++) {
    console.log(domain[0].lastIndexOf('.'))
    console.log(domain[i].length-1);
    // console.log(domain[i].length-1 - domain[i].lastIndexOf('.'));
    console.log(domain.splice(domain[i].lastIndexOf('.'),domain[i].length-1 - domain[i].lastIndexOf('.')));
  }
  // console.log(domain);
}

module.exports = {
  getDNSStats
};
