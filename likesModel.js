var Backbone = require('backbone');

module.exports = Backbone.Model.extend({
  urlRoot: 'http://tiny-tiny.herokuapp.com/collections/bittertweet',
  idAttribute: '_id',
  initialize: function () {
    console.log('likes model has init');
  }
});
