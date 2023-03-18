import { expect } from 'chai';
import getQuote, { getRandomQuote } from '../lib/index.js';

describe('Running tests for methods', () => {
  describe('getQuote', () => {
    it('should return an object', (done) => {
      const randomQuote = getQuote();
      expect(randomQuote).to.be.an('object')
      done();
    })
    it('should contain quote and author', (done) => {
      const randomQuote = getQuote();
      expect(randomQuote).to.have.property('author');
      expect(randomQuote).to.have.property('quote');
      done();
    });
    it('should not contain empty quote', (done) => {
      const randomQuote = getQuote();
      expect(randomQuote.quote).to.not.be.empty;
      done();
    });
    it('should not contain empty author', (done) => {
      const randomQuote = getQuote();
      expect(randomQuote.author).to.not.be.empty;
      done();
    });
    it('should not return author field if { author: false } is passed', (done) => {
      const randomQuote = getQuote({ author: false });
      expect(randomQuote).to.not.have.property('author');
      expect(randomQuote).to.have.property('quote');
      done();
    });
  })

  describe('getRandomQuote', () => {
    it('should return a string', (done) => {
      const randomQuote = getRandomQuote();
      expect(randomQuote).to.be.an('string');
      done();
    })
    it('should have length greater than 5', (done) => {
      const randomQuote = getRandomQuote();
      expect(randomQuote).to.have.length.greaterThan(5);
      done()
    })
  })
})