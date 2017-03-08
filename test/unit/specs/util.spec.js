import { encodeQuery, decodeQuery } from 'src/utils';

describe('encodeQuery Function', () => {
  it('should return a string', () => {
    expect(encodeQuery({
      name: 'gavin',
      age: 22
    })).to.equal('name=gavin&age=22');
  });
});
