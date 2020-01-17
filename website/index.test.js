const utils = require('./index');

describe("test utils", () => {
  it("it should total 3", () => {
    let total = utils.sum(1, 2);
    expect(total).toEqual(3);
  });
});
