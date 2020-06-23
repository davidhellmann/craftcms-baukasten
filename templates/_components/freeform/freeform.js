/*
 * Description of what this file is for
 *
 * @package Baukasten
 * @author David Hellmann [david@hellmann.io]
 * freeform
 */

import axios from 'axios';

const freeform = {
  cfg:  {
    name: 'freeform',
  },

  log(msg) {
    // eslint-disable-next-line
    console.log(msg);
  },

  initForm() {
    const formContainers = document.querySelectorAll('.c-freeform');

    if (formContainers.length > 0) {
      formContainers.forEach((formContainer) => {
        const form = formContainer.querySelector('form');
        if (form) {
          this.addLabelBehavior(form);
          this.updateDynamicFormData(formContainer, form);
        }
      });
    }
  },

  // Get Required / Not Required Text from Field and set it to the label set it via CSS after
  addLabelBehavior(form) {
    const labels = form.querySelectorAll('.c-freeform__label');
    if (labels) {
      const setOptionSpan = (el, label) => {
        label.setAttribute('data-required-text', el.getAttribute('data-required-text'));
        const span = document.createElement('span');
        span.textContent = el.getAttribute('data-required-text');
        label.appendChild(span);
      };

      labels.forEach((label) => {
        const nextEl = label.nextElementSibling;
        const prevEl = label.previousElementSibling;

        if (nextEl && nextEl.hasAttribute('data-required-text')) {
          setOptionSpan(nextEl, label);
        } else if (prevEl && prevEl.hasAttribute('data-required-text')) {
          setOptionSpan(prevEl, label);
        } else { // relevant for checkboxes
          const el = label.querySelector('input[type="hidden"]');
          if (el && el.hasAttribute('data-required-text')) {
            setOptionSpan(el, label);
          }
        }
      });
    }
  },

  updateDynamicFormData(container, form) {
    if (container && form) {
      const { formHandle } = container.dataset;
      axios.get(`/freeformData?form=${formHandle}`).then((response) => {
        if (response.status === 200) {
          const { hash, honeypot, csrf } = response.data;
          if (hash && honeypot && csrf) {
            this.updateFormHash(form, hash);
            this.updateHoneypot(form, honeypot);
            this.updateCsrfToken(form, csrf);
          }
        }
      }).catch(() => {
        throw new Error('Error updating dynamic form data');
      });
    } else {
      throw new Error('Form or Container empty when trying to update dynamic form data!');
    }
  },

  updateCsrfToken(form, csrf) {
    form.querySelector(`input[name=${csrf.name}]`).value = csrf.value;
  },

  updateHoneypot(form, honeypot) {
    const honeypotInput = form.querySelector('input[name^="freeform_form_handle"]');
    honeypotInput.setAttribute('id', honeypot.name);
    honeypotInput.setAttribute('name', honeypot.name);
    honeypotInput.value = honeypot.hash;
  },

  updateFormHash(form, hash) {
    form.querySelector('input[name=formHash]').value = hash;
  },

  init() {
    (() => {
      this.initForm();
    })();
  },
};

export default freeform;
