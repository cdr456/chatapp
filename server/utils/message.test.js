var expect = require('expect');

var {generateMessage} = require('./message');

describe('generateMessage', () => {
  it('should generate correct message object', () => {
    //store res in var
    //assert from match
    //assert text match
    //assert createdAt is #  ToBeA

    var res = generateMessage('test1', 'this is a test message');
    expect(res.from).toBe('test1');
    expect(res.text).toBe('this is a test message');
    expect(res.createdAt).toBeA('number');

  });
});
