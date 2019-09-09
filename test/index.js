const chai = require('chai');
const convert = require('../');

chai.should();

describe(`[1,2,3,4,5,6,7,8]`, function() {
  it(`'1-8'`, async () => {
    (await convert([1,2,3,4,5,6,7,8])).should.be.eql('1-8');
  });
});
describe(`[1,3,4,5,6,7,8]`, function() {
  it(`'1,3-8'`, async () => {
    (await convert([1,3,4,5,6,7,8])).should.be.eql('1,3-8');
  });
});
describe(`[1,3,4,5,6,7,8,10,11,12]`, function() {
  it(`'1,3-8,10-12'`, async () => {
    (await convert([1,3,4,5,6,7,8,10,11,12])).should.be.eql('1,3-8,10-12');
  });
});
describe(`[1,2,3]`, function() {
  it(`'1-3'`, async () => {
    (await convert([1,2,3])).should.be.eql('1-3');
  });
});
describe(`[1,2]`, function() {
  it(`'1,2'`, async () => {
    (await convert([1,2])).should.be.eql('1,2');
  });
});
describe(`[1,2,4]`, function() {
  it(`'1,2,4'`, async () => {
    (await convert([1,2,4])).should.be.eql('1,2,4');
  });
});
describe(`[1,2,4,5,6]`, function() {
  it(`'1,2,4-6'`, async () => {
    (await convert([1,2,4,5,6])).should.be.eql('1,2,4-6');
  });
});
describe(`[1,2,3,7,8,9,15,17,19,20,21]`, function() {
  it(`'1-3,7-9,15,17,19-21'`, async () => {
    (await convert([1,2,3,7,8,9,15,17,19,20,21])).should.be.eql('1-3,7-9,15,17,19-21');
  });
});
describe(`[1,2,3,4,5,6,100,1091,1999,2000,2001,2002]`, function() {
  it(`'1-6,100,1091,1999-2002'`, async () => {
    (await convert([1,2,3,4,5,6,100,1091,1999,2000,2001,2002])).should.be.eql('1-6,100,1091,1999-2002');
  });
});
describe(`[1]`, function() {
  it(`'1'`, async () => {
    (await convert([1])).should.be.eql('1');
  });
});
describe(`[1,3,5,7,9,11]`, function() {
  it(`'1,3,5,7,9,11'`, async () => {
    (await convert([1,3,5,7,9,11])).should.be.eql('1,3,5,7,9,11');
  });
});