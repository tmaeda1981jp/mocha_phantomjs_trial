/*jslint white: true, nomen: true, maxlen: 120, */
/*global requirejs:false */
require.config({
  baseUrl: '../app/',
  paths: {
    jquery: 'lib/jquery',
    underscore: 'lib/underscore',
    backbone: 'lib/backbone',
    mocha: '../test/node_modules/mocha/mocha',
    sinon: '../test/node_modules/sinon/pkg/sinon',
    chai: '../test/node_modules/chai/chai',
    schai: '../test/node_modules/sinon-chai/lib/sinon-chai'
  },
  shim: {
    underscore: {
      exports: '_'
    },
    backbone: {
      deps: ['jquery', 'underscore'],
      exports: 'Backbone'
    },
    mocha: {
      exports: 'mocha'
    },
    sinon: {
      exports: 'sinon'
    }
  }
});
require([
  'jquery', 'underscore', 'backbone',
  'mocha', 'sinon', 'chai', 'schai'
], function(
  $, _, Backbone, 
  mocha, sinon, chai, 
  schai, should, expect
) {
  'use strict';
  console.log("OK");
});
