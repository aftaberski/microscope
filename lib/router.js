Router.configure({
  // Default layout
  layoutTemplate: 'layout',
  // For all routes, subscribe to 'posts'
  waitOn: function(){ return Meteor.subscribe('posts');}
});

Router.route('/', {name: 'postsList'});