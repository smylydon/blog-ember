import Model, { attr } from '@ember-data/model';

export default class PostsModel extends Model {
  @attr title;
  @attr userId;
  @attr body;
  @attr('date', {
    defaultValue() {
      return new Date().toISOString();
    },
  })
  date;
}
