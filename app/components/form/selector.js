import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class FormSelectorComponent extends Component {
  @tracked postTitle;

  @action
  selected({ target }) {
    this.validate(target.value.trim());
    const validator = this.args.validator;
    !!validator.update && validator.update();
  }

  @action
  ready(element) {
    this.validate(element.value.trim());
  }

  validate(value) {
    const validator = this.args.validator;

    if (validator) {
      const type = validator.validator && validator.validator.type;

      if (type === 'exists') {
        if (Number.isFinite(value)) {
          validator.validator.valid = true;
        } else {
          const result = !!value;
          validator.validator.valid = result;
        }
      }
      validator.value = value;
    }
  }
}
