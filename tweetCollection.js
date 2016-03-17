var Backbone = require('backbone');
var _ = require('underscore');
var tweetModel = require('./tweetModel');

module.exports = Backbone.Collection.extend({
  model: tweetModel,
  initialize: function(){
    console.log("tweet collection is init");
  }
})
