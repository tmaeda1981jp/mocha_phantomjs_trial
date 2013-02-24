/*jslint white: true, nomen: true, maxlen: 120, plusplus: true, */
/*global _:false, $:false, define:false, require:false, */

define(['underscore', 'backbone'], function(_, Backbone) {
  'use strict';
  return Backbone.Model.extend({
    defaults: {
      count: 0
    },

    increment: function() {
      this.set('count', this.get('count') + 1);
    },

    decrement: function() {
      var count = this.get('count');
      this.set('count', count === 0 ? 0 : count -= 1);
    },

    reset: function() {
      this.set('count', 0);
    }
  });
});
