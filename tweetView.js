var Backbone = require('backbone');
var _ = require('underscore');
var tmpl = require('./templates');
var LikeModel = require('./likesModel');

module.exports =  Backbone.View.extend({
  // el: 'tweetsLanding',
  model: null,
  template: _.template(tmpl.tweet),
  events: {
    'click .heart': 'addLike',
    'click .destroy': 'removeTweet'
  },
  addLike: function (event) {
    event.preventDefault();
    var newLike = new LikeModel(this.model.toJSON());
    newLike.save();
  },
  removeTweet: function(){
    event.preventDefault();
    this.model.destroy();
  },
  initialize: function () {},
  render: function () {
    var markup = this.template(this.model.toJSON());
    this.$el.html(markup);
    return this;
  }
});
