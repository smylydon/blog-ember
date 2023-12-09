import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class EditCurrentRoute extends Route {
  @service api;

  model(params) {
    const { post_id } = params;
    return this.api.peekPost(post_id);
  }
}
