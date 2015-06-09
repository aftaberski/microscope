Posts = new Mongo.Collection('posts')

Posts.allow({
  insert: function(userId, doc) {
    // only if you're logged in
    return !! userId;
  }
})