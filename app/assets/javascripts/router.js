// For more information see: http://emberjs.com/guides/routing/

App.Router.map(function() {
  this.resource('contacts', { path: '/' });
  this.resource('contact', { path: '/contacts/:id' });
});
