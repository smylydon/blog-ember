import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class IndexRoute extends Route {
  @service api;
  model() {
    return this.api.initialize();
  }
}
