var Backbone = require('backbone');
var _ = require('underscore');
var tweetModel = require('./tweetModel');

module.exports = Backbone.Collection.extend({
  model: tweetModel,
  url: 'http://tiny-tiny.herokuapp.com/collections/bittertweet/',
  initialize: function(){
    console.log("tweet collection is init");
  }
})
