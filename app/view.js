/*jslint white: true, nomen: true, maxlen: 120, plusplus: true, */
/*global _:false, $:false, define:false, require:false, */

define(['jquery', 'underscore', 'backbone'], function($, _, Backbone) {
  'use strict';
  return Backbone.View.extend({
    el: 'body',
    events: {
      'click #inc_btn': 'onClickIncrementButton',
      'click #dec_btn': 'onClickDecrementButton',
      'click #reset_btn': 'onClickResetButton'
    },

    initialize: function() {
      _.bindAll(this, 'onClickIncrementButton', 'onClickDecrementButton', 'onClickResetButton', 'updateCount');
      this.listenTo(this.model, 'change:count', this.updateCount);
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
      $('#counter').text(this.model.get('count'));
    }
  });
});
