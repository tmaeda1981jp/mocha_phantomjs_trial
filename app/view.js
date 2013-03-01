/*jslint white: true, nomen: true, maxlen: 120, plusplus: true, */
/*global _:false, $:false, define:false, require:false, */

define(['jquery', 'underscore', 'backbone'], function($, _, Backbone) {
  'use strict';
  return Backbone.View.extend({
    id: 'counter',
    template: '\
      <input id="inc_btn" type="button" value="increment" />\
      <input id="dec_btn" type="button" value="decrement" />\
      <input id="reset_btn" type="button" value="reset" />\
      <p id="count">0</p>\
    ',
    events: {
      'click #inc_btn': 'onClickIncrementButton',
      'click #dec_btn': 'onClickDecrementButton',
      'click #reset_btn': 'onClickResetButton'
    },

    initialize: function() {
      _.bindAll(this, 'onClickIncrementButton', 'onClickDecrementButton', 'onClickResetButton', 'updateCount');
      this.listenTo(this.model, 'change:count', this.updateCount);
    },

    render: function() {
      this.$el.html(_.template(this.template, {}));
      return this;
    },

    onClickIncrementButton: function() {
      this.model.increment();
    },

    onClickDecrementButton: function() {
      this.model.decrement();
    },
    
    onClickResetButton: function() {
      this.model.reset();
    },
    
    updateCount: function() {
      this.$el.find('#count').text(this.model.get('count'));
    }
  });
});
