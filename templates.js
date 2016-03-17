module.exports = {
  tweet: [
    '<div class="tweet panel-body">',
      '<div class="avatar"><img src="https://www.placecage.com/c/300/<%= num %>" alt=""></div>',
      '<button type="button" class="heart btn btn-default"><span class="glyphicon glyphicon-heart"></span></button>',
      '<button type="button" class="destroy btn btn-warning"><span class="glyphicon glyphicon-fire"></span></button>',
      '<h4><%= username %></h5>',
      '<p><%= tweet %></p>',
    '</div>'
  ].join(''),
  form: [
    '<form role="form">',
      '<div class="form-group"><input type="text" class="form-control" name="username" placeholder="Username"></div>',
      '<div class="form-group"><textarea class="form-control" name="tweet" rows="2" cols="50" placeholder="What\'s happening?"></textarea></div>',
      '<button type="submit" class="submit btn btn-default">Submit</button>',
    '</form>'
  ].join('')
}

//https://www.placecage.com/c/300/320
//var rando = Math.floor(Math.random() * (400 - 300)) + 1;
