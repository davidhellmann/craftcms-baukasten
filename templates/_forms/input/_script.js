/**
 * input
 */

const input = {
  cfg: {
    inputGroup: document.querySelectorAll('.a-input'),
  },

  checkValue(el) {
    const _value = el.value;

    if (_value !== '') {
      el.classList.add('has-content');
    } else {
      el.classList.remove('has-content');
    }
  },

  /* eslint-disable */
    addWrapperClass(el) {
        const _parent = el.parentNode;

        if (
            el.validity.badInput === true ||
            el.validity.customError === true ||
            el.validity.patternMismatch === true ||
            el.validity.rangeOverflow === true ||
            el.validity.rangeUnderflow === true ||
            el.validity.stepMismatch === true ||
            el.validity.tooLong === true ||
            el.validity.tooShort === true ||
            el.validity.typeMismatch === true ||
            el.validity.valid === false ||
            el.validity.valueMissing === true
        ) {
            _parent.classList.remove('is-valid');
            _parent.classList.add('is-invalid');
        } else {
            _parent.classList.remove('is-invalid');
            _parent.classList.add('is-valid');
        }
    },
    /* eslint-enable */

  init() {
    for (let i = 0; i < this.cfg.inputGroup.length; i += 1) {
      const _input = this.cfg.inputGroup[i].querySelector('.a-input__input');

      this.checkValue(_input);

      if (_input.classList.contains('has-content')) {
        this.addWrapperClass(_input);
      }

      _input.addEventListener('keyup', el => {
        el.currentTarget.classList.add('has-focused');
        this.checkValue(el.currentTarget);
        this.addWrapperClass(el.currentTarget);
      });

      _input.addEventListener('change', el => {
        el.currentTarget.classList.add('has-focused');
        this.checkValue(el.currentTarget);
        this.addWrapperClass(el.currentTarget);
      });
    }
  },
};

export default input;
