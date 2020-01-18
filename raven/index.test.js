const utils = require('./index');

describe("raven test utils sum", () => {
  it("it should total 3", () => {
    let total = utils.sum(1, 2);
    expect(total).toEqual(3);
  });
});

describe("raven test utils subtract", () => {
  it("it should total 0", () => {
    let total = utils.subtract(2, 2);
    expect(total).toEqual(0);
  });
});
