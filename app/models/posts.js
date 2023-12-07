import Model, { attr } from '@ember-data/model';

export default class PostsModel extends Model {
  @attr title;
  @attr userId;
  @attr body;
  @attr('post-date', {
    defaultValue() {
      return new Date().toISOString();
    },
  })
  date;
  @attr('post-reactions', {
    defaultValue() {
      return Object.assign(
        {},
        {
          thumbsUp: 0,
          wow: 0,
          heart: 0,
          rocket: 0,
          coffee: 0,
        },
      );
    },
  })
  reactions;

  get myUserId() {
    return this.userId + '';
  }
}
