import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { service } from '@ember/service';

export default class EditComponent extends Component {
  @service api;
  @service router;

  @tracked postTitle;
  @tracked postAuthor;
  @tracked postContent;
  @tracked form;
  @tracked valid = false;

  constructor(owner, args) {
    super(owner, args);
    this.postTitle = {
      type: 'input',
      name: 'postTitle',
      value: '',
      validator: {
        valid: false,
        type: 'length',
        size: 3,
      },
    };
    this.postContent = {
      type: 'textarea',
      name: 'postContent',
      value: '',
      validator: {
        valid: false,
        type: 'length',
        size: 3,
      },
    };

    this.postAuthor = {
      type: 'selector',
      name: 'postAuthor',
      value: 0,
      validator: {
        valid: false,
        type: 'exists',
      },
    };

    this.form = {
      name: 'editForm',
      valid: false,
      formItems: [this.postAuthor, this.postContent, this.postTitle],
      update: this.update.bind(this),
    };
  }

  get items() {
    return this.api.users;
  }

  update() {
    this.valid = this.form.valid;
  }

  @action
  async deletePost() {
    const id = !!this.args.post && this.args.post.id;
    try {
      await this.api.deletePost(id);
    } catch (err) {
      console.log(err);
    } finally {
      this.router.transitionTo('index');
    }
  }

  @action
  async savePost() {
    const post = this.args.post;
    post.set('title', this.postTitle.value);
    post.set('body', this.postContent.value);
    post.set('userid', this.postAuthor.value);

    try {
      await this.api.savePost(post);
    } catch (err) {
      console.log(err);
    } finally {
      this.router.transitionTo('index');
    }
  }
}
