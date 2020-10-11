'use strict';

require('chai').should();

const beggarsProblem = require('../index.js');
const mocks = require('./mocks.js');

describe('traverseSpirally', function () {

  it('should return correct amount to beggar A and B', function () {
    beggarsProblem(mocks.pileOne).should.eql([17,15]);
    beggarsProblem(mocks.pileTwo).should.eql([26,16]);
  });
  it('should return correct amount to beggar A and B for an empty pile', function () {
    beggarsProblem(mocks.emptyPile).should.eql([0,0]);
  });
  it('if the beggars found no piles, but only weird objects they get nothing', function () {
    beggarsProblem(mocks.weirdObject).should.eql([0,0]);
  });

});