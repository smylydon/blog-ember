import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { service } from '@ember/service';

export default class EditComponent extends Component {
  @service api;

  @tracked postTitle;
  @tracked postAuthor;
  @tracked postContent;
}
