/*jslint white: true, nomen: true, maxlen: 120, plusplus: true, */
/*global _:false, $:false, define:false, require:false, describe:false,
 it:false, before:false, after:false, beforeEach:false, afterEach:false, 
 sinon:false, */
'use strict';

define([], function() {
  describe('1+1', function() {
    it('1+1=2', function() {
      (1+1).should.be.equal(2);
    });
  });
});
