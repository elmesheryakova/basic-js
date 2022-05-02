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
function getDNSStats(domains) {
  let res = {};
  domains.forEach((domain) => {
    domain.split('.').reverse().reduce((acc, cur) => {
      acc = acc + `.${cur}`;
      if (res[acc]) {
        res[acc]++
      } else {
        res[acc] = 1
      }

      return acc;
    }, '')
  });

  return res;
}

module.exports = {
  getDNSStats
};
