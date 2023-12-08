import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { service } from '@ember/service';

export default class EditComponent extends Component {
  @service api;

  @tracked postTitle;
  @tracked postAuthor;
  @tracked postContent;
  @tracked form;
  @tracked valid = true;

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
  deletePost() {
    console.log('delete post.............');
  }

  @action
  savePost() {
    console.log('savePost post.............');
  }
}
