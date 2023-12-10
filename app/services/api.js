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
    await this.store.findAll('posts');
    return this.peekAllPosts();
  }

  peekPost(id) {
    return this.store.peekRecord('posts', id);
  }

  deletePost(id) {
    let post = this.peekPost(id);

    return new Promise((resolve, reject) => {
      if (post) {
        post.destroyRecord();
        resolve();
      } else {
        reject('record not found');
      }
    });
  }

  savePost(post) {
    return post.save();
  }

  createPost(post) {
    const newPost = this.store.createRecord('posts', post);
    return newPost.save();
  }

  async getUser(id) {
    return await this.store.findRecord('users', id);
  }

  async peekAllPosts() {
    return await this.store.peekAll('posts');
  }

  async allUsers() {
    return await this.store.findAll('users');
  }
}
