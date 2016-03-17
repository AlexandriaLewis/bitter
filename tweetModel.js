var Backbone = require('backbone');

module.exports = Backbone.Model.extend({
  url: 'http://tiny-tiny.herokuapp.com/collections/bittertweet/',
  id: '_id',
  initialize: function () {
    console.log('tweet model init');
  }
});
