var Backbone = require('backbone');

module.exports = Backbone.Model.extend({
  urlRoot: 'http://tiny-tiny.herokuapp.com/collections/bitterpill',
  idAttribute: '_id',
  initialize: function () {
    console.log('likes model has init');
  }
});
