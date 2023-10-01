import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class PostCurrentRoute extends Route {
  @service store;
  model(params) {
    const { post_id } = params;

    return this.store.findRecord('posts', post_id);
  }
}
