/*jslint white: true, nomen: true, maxlen: 120, plusplus: true, */
/*global _:false, $:false, define:false, require:false, describe:false,
 it:false, before:false, after:false, beforeEach:false, afterEach:false, 
 sinon:false, context:false, */

define(['jquery', '../../app/view', '../../app/model'], function($, View, Model) {
  'use strict';

  describe('view', function() {
    var counterView, counter;

    describe('#render', function() {
      it('incrementボタンが表示されていること', function() {
        counter = new Model();
        counterView = new View({model: counter}).render();
        counterView.$el.find('#inc_btn').length.should.equal(1);
      });
      it('decrementボタンが表示されていること', function() {
        counter = new Model();
        counterView = new View({model: counter}).render();
        counterView.$el.find('#dec_btn').length.should.equal(1);
      });
      it('resetボタンが表示されていること', function() {
        counter = new Model();
        counterView = new View({model: counter}).render();
        counterView.$el.find('#reset_btn').length.should.equal(1);
      });
      it('counterの初期値0が表示されていること', function() {
        counter = new Model();
        counterView = new View({model: counter}).render();
        parseInt(counterView.$el.find('#count').text(), 10).should.equal(0);
      });
    });

    describe('click event', function() {
      beforeEach(function() {
        counter = new Model();
        counterView = new View({model: counter}).render();
      });
      describe('incrementボタンをクリック', function() {
        it('#countに表示されている数が1増えること', function() {
          counter.set('count', 0);
          counterView.updateCount();
          counterView.$el.find('#inc_btn').trigger('click');
          parseInt(counterView.$el.find('#count').text(), 10).should.equal(1);
        });
      });
      describe('decrementボタンをクリック', function() {
        context('#countに表示されている数が0の場合', function() {
          it('#countに表示される数は0のままであること. ', function() {
            counter.set('count', 0);
            counterView.updateCount();
            counterView.$el.find('#dec_btn').trigger('click');
            parseInt(counterView.$el.find('#count').text(), 10).should.equal(0);
          });
        });
        context('#countに表示されている数が1以上の場合', function() {
          it('#countに表示される数は1減ること. ', function() {
            counter.set('count', 3);
            counterView.updateCount();
            counterView.$el.find('#dec_btn').trigger('click');
            parseInt(counterView.$el.find('#count').text(), 10).should.equal(2);
          });
        });
      });
      describe('resetボタンをクリック', function() {
        it('#countに表示されている数が0になること', function() {
          counter.set('count', 50);
          counterView.updateCount();
          counterView.$el.find('#reset_btn').trigger('click');
          parseInt(counterView.$el.find('#count').text(), 10).should.equal(0);
        });
      });
    });
  });
});
