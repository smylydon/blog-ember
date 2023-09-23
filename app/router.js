import EmberRouter from '@ember/routing/router';
import config from 'blog/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('not-found', { path: '/*path' });
  this.route('post', function () {
    this.route('index', { path: '/' });
    this.route('current', { path: '/:post_id' });
  });

  this.route('edit', function () {
    this.route('current', { path: '/:post_id' });
  });
});
