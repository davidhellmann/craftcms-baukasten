/**
 * textarea
 */

const textarea = {
  cfg: {
    textareaGroup: document.querySelectorAll('.a-textarea'),
  },

  checkValue(el) {
    const _value = el.value;

    if (_value !== '') {
      el.classList.add('has-content');
    } else {
      el.classList.remove('has-content');
    }
  },

  addWrapperClass(el) {
    const _parent = el.parentNode.parentNode.parentNode;

    if (
      el.validity.badInput === true ||
      el.validity.customError === true ||
      el.validity.tooLong === true ||
      el.validity.valid === false
    ) {
      _parent.classList.remove('is-valid');
      _parent.classList.add('is-invalid');
    } else {
      _parent.classList.remove('is-invalid');
      _parent.classList.add('is-valid');
    }
  },

  init() {
    for (let i = 0; i < this.cfg.textareaGroup.length; i += 1) {
      const _textarea = this.cfg.textareaGroup[i].querySelector('.a-textarea__textarea');

      this.checkValue(_textarea);

      if (_textarea.classList.contains('has-content')) {
        this.addWrapperClass(_textarea);
      }

      _textarea.addEventListener('keyup', el => {
        el.currentTarget.classList.add('has-focused');
        this.checkValue(el.currentTarget);
        this.addWrapperClass(el.currentTarget);
      });

      _textarea.addEventListener('change', el => {
        el.currentTarget.classList.add('has-focused');
        this.checkValue(el.currentTarget);
        this.addWrapperClass(el.currentTarget);
      });
    }
  },
};

export default textarea;
