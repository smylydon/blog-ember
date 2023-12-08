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

  deletePost(id) {
    return this.store.delete('posts', id);
  }

  async getUser(id) {
    return await this.store.findRecord('users', id);
  }

  async allPosts() {
    return await this.store.findAll('posts');
  }

  async allUsers() {
    return await this.store.findAll('users');
  }
}
