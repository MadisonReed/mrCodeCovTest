const cart = require('../mr_modules/cart/cart.js');
const assert = require('assert');

describe('Cart controller stuff', function() {
  it('should add items to cart obj', () => {
    let cartObj = {
      123: 'haircolor',
      456: 'rtu'
    };

    let result = cart.addItems(cartObj, {678: 'shampoo'});
    let correctCart = { '123': 'haircolor', '456': 'rtu', '678': 'shampoo' };

    assert.deepStrictEqual(result, correctCart);
  });
});
