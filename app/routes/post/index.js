import Route from '@ember/routing/route';
import { tracked } from '@glimmer/tracking';
import { service } from '@ember/service';

export default class PostIndexRoute extends Route {
  @service api;

  @tracked postTitle;
  @tracked postAuthor;
  @tracked postContent;
}
