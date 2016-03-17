var Backbone = require('backbone');
var _ = require('underscore');
var tmpl = require('./templates');
var FormModel = require('./formModel');
var TweetModel = require('./tweetModel');

module.exports =  Backbone.View.extend({
  el: 'formLanding',
  model: null,
  template: _.template(tmpl.form),
  events: {
    'click .submit': 'submitTweet'
  },
  submitTweet: function (event) {
    event.preventDefault();
    var newTweet = {
      username: this.$el.find('input[name="username"]').val(),
      tweet: this.$el.find('textarea[name="tweet"]').val(),
    };
    var form = new TweetModel(this.model.toJSON());
    form.save();
  },
  initialize: function () {},
  render: function () {
    var markup = this.template(this.model.toJSON());
    this.$el.html(markup);
    return this;
  }
});
