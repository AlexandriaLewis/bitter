var Backbone = require('backbone');
var LikeModel = require('./likesModel');
module.exports = Backbone.Collection.extend({
  model: LikeModel,
  url: 'http://tiny-tiny.herokuapp.com/collections/bittertweet',
  initialize: function () {
    console.log('likes collection has init');
  }
});
