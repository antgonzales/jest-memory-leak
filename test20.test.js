const testData = require('./testData.js');

describe('test', () => {
  it('runs a simple test', () => {
    expect(testData).toEqual(testData);
  });
});
