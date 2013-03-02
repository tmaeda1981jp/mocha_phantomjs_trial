/*jslint white: true, nomen: true, maxlen: 120, plusplus: true, */
/*global _:false, $:false, define:false, require:false, describe:false,
 it:false, before:false, after:false, beforeEach:false, afterEach:false, 
 sinon:false, context:false, */
'use strict';

define(['../../app/model'], function(Counter) {
  describe('model', function() {
    describe('#increment', function() {
      it('countが1増えること．', function() {
        var counter = new Counter(),
            current = counter.get('count');
        counter.increment();
        counter.get('count').should.equal(current + 1);
      });
    });

    describe('#decrement', function() {
      context('countが0の場合', function() {
        it('0のままであること', function() {
          var counter = new Counter();
          counter.decrement();
          counter.get('count').should.equal(0);
        });
      });
      context('countが1以上の場合', function() {
        it('1減ること', function() {
          var counter = new Counter();
          counter.set('count', 5);
          counter.decrement();
          counter.get('count').should.equal(4);
        });
      });
    });

    describe('#reset', function() {
      it('countが0になること', function() {
        var counter = new Counter();
        counter.set('count', 5);
        counter.reset();
        counter.get('count').should.equal(0);
      });
    });
  });
});
