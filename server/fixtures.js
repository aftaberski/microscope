if (Posts.find().count() === 0) {
  var now = new Date().getTime();

  // Creating two users
  var annaId = Meteor.users.insert({
    profile: { name: 'Anna' }
  });
  var anna = Meteor.users.findOne(annaId);
  var sachaId = Meteor.users.insert({
    profile: { name: 'Sacha' }
  });
  var sacha = Meteor.users.findOne(sachaId);

  var telescopeId = Posts.insert({
    title: 'Introducing Telescope',
    userId: sacha._id,
    author: sacha.profile.name,
    url: 'http://sachagreif.com/introducing-telescope/',
    submitted: new Date(now - 7 * 3600 * 1000),
    commentsCount: 2
  });

  Comments.insert({
    postId: telescopeId,
    userId: anna._id,
    author: anna.profile.name,
    submitted: new Date(now - 5 * 3600 * 1000),
    body: 'Interesting project Sacha, can I get involved?'
  });

  Comments.insert({
    postId: telescopeId,
    userId: sacha._id,
    author: sacha.profile.name,
    submitted: new Date(now - 3 * 3600 * 1000),
    body: 'You sure can anna!'
  });

  Posts.insert({
    title: 'Meteor',
    userId: anna._id,
    author: anna.profile.name,
    url: 'http://meteor.com',
    submitted: new Date(now - 10 * 3600 * 1000),
    commentsCount: 0
  });

  Posts.insert({
    title: 'The Meteor Book',
    userId: anna._id,
    author: anna.profile.name,
    url: 'http://themeteorbook.com',
    submitted: new Date(now - 12 * 3600 * 1000),
    commentsCount: 0
  });
}