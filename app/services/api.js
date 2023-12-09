import Service from '@ember/service';
import { service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class ApiService extends Service {
  @service store;
  @tracked users = [];

  async initialize() {
    this.store.findAll('users').then((users) => {
      this.users = users.map((user) => {
        return {
          id: user.id,
          item: user.name,
        };
      });
    });
    return this.allPosts();
  }

  async getPost(id) {
    return await this.store.findRecord('posts', id);
  }

  async peekPost(id) {
    return await this.store.peekRecord('posts', id);
  }

  async deletePost(id) {
    let post = await this.peekPost(id);
    post.destroyRecord();
  }

  async getUser(id) {
    return await this.store.findRecord('users', id);
  }

  async allPosts() {
    return await this.store.findAll('posts');
  }

  async peekAllPosts() {
    return await this.store.peekAll('posts');
  }

  async allUsers() {
    return await this.store.findAll('users');
  }
}
