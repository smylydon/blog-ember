import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class FormComponent extends Component {
  @action
  ready() {
    const form = this.args.form;

    if (form) {
      const formItems = form.formItems;
      if (formItems) {
        formItems
          .filter((item) => {
            return !!item.validator;
          })
          .map((item) => {
            item.update = this.update.bind(this);
            return item;
          });
      }
    }
    this.validate();
  }

  update() {
    this.validate();
  }

  validate() {
    const form = this.args.form;
    let isValid = true;

    if (form) {
      const formItems = form.formItems;
      if (formItems) {
        isValid = formItems
          .filter((item) => {
            return !!item.validator;
          })
          .map((item) => {
            return item.validator.valid;
          })
          .every((value) => value);
      }
      form.valid = isValid;

      !!form.update && form.update();
    }
  }
}
