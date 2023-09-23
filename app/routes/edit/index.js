import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class EditIndexRoute extends Route {
  @service router;

  beforeModel() {
    this.router.transitionTo('index');
  }
}
