import Route from '@ember/routing/route';

export default class EditCurrentRoute extends Route {
  model(params) {
    const { post_id } = params;
    return post_id;
  }
}
