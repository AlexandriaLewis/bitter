var Backbone = require('backbone');
var _ = require('underscore');
var tmpl = require('./templates');
var TweetModel = require('./tweetModel');

module.exports =  Backbone.View.extend({
  className: 'formLanding',
  model: null,
  template: _.template(tmpl.form),
  events: {
    'click .submit': 'submitTweet'
  },
  submitTweet: function (event) {
    event.preventDefault();
    var newTweet = new TweetModel(this.model.toJSON());
    newTweet.save();
  },
  initialize: function () {},
  render: function () {
    var markup = this.template(this.model.toJSON());
    this.$el.html(markup);
    return this;
  }
});
