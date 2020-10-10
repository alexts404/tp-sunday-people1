'use strict';

require('chai').should();

const begarsProblem = require('../index.js');
const mocks = require('./mocks.js');

describe('traverseSpirally', function () {

  it('should return correct amount to beggar A and B', function () {
    beggarsProblem(mocks.pileOne).should.equal([17,15]);
    beggarsProblem(mocks.pileTwo).should.equal([26,16]);
  });
  it('should return correct amount to beggar A and B for an empty pile', function () {
    beggarsProblem(mocks.emptyPile).should.equal([0,0]);
  });
  it('if the beggars found no piles, but only weird objects they get nothing', function () {
    beggarsProblem(mocks.weirdObject).should.equal([0,0]);
  });

});