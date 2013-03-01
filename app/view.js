/*jslint white: true, nomen: true, maxlen: 120, plusplus: true, */
/*global _:false, $:false, define:false, require:false, */

define(['jquery', 'underscore', 'backbone'], function($, _, Backbone) {
  'use strict';
  return Backbone.View.extend({
    el: '#counter',
    template: _.template($('#counter_tmp').html()),
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
      this.$el.html(this.template());
      return this.$el;
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
      $('#count').text(this.model.get('count'));
    }
  });
});
