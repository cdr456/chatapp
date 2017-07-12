var expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');

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

describe('generateLocationMessage', () => {
  it('should generate correct location object', () => {
    //from lat longitude
    //assert from match
    //assert createdat number
    //assert url match
    var res = generateLocationMessage('chris', 1, 1);
    expect(res.from).toBe('chris');
    expect(res.createdAt).toBeA('number');
    expect(res.url).toBe('https://www.google.com/maps?q=1,1');
  });
});
