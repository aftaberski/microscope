Router.configure({
  // Default layout
  layoutTemplate: 'layout',
  // For all routes, subscribe to 'posts'
  // On runs when user first visits app b/c will be loaded in browser's memory
  loadingTemplate: 'loading',
  waitOn: function(){ return Meteor.subscribe('posts');}
});

Router.route('/', {name: 'postsList'});
Router.route('/posts/:_id', {
  name: 'postPage',
  data: function() {return Posts.findOne(this.params._id);}
});