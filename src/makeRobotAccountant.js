'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let countCalls = 0;

  function sum(a) {
    function add(b) {
      countCalls++;

      return countCalls % 2 === 0 && countCalls > 3 ? 'Bzzz... Error!' : a + b;
    }

    return add;
  }

  return sum;
}

module.exports = makeRobotAccountant;
