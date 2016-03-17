
var Backbone = require('backbone');
var TweetCollection = require('./tweetCollection');
var TweetCollectionView = require('./tweetCollectionView');
// var LikesCollection = require('./likesCollection');
// var LikesCollectionView = require('./likeCollectionView');
var FormView = require('./formView');


module.exports = Backbone.Router.extend({
  subview: null,
  routes: {
      "": "homepage",
      "home": "homepage"
  },
  homepage: function () {
    var that = this; // constructor context
    var tweetCol = new TweetCollection();
    // collection flickrCol is still empty
    tweetCol.fetch().then(function (data) {
      // console.log(tweetCol.models.length);
      // data is ready
      var collection = new TweetCollection(data);
      that.renderSubview(new TweetCollectionView({collection: collection}));
    });
    var formView = new FormView();
  },
  renderSubview: function (subview) {

    this.subview && this.subview.remove();

    this.subview = subview;

  }

})
