import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
export default class PostComponent extends Component {
  @tracked isSingle = false;
}
