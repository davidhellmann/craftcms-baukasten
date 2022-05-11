import { IComponent } from '../@types/IComponent';

interface ICompToggleContent extends IComponent {
  toggleContent(): void;
}

const toggleContent: ICompToggleContent = {
  name: 'toggleContent',
  selectors: {
    triggers: '.js-toggleContent--trigger',
    content: '.js-toggleContent--content',
  },
  classes: {
    isOpen: 'is-open',
  },
  els: {
    $triggers: null,
  },

  setElements() {
    if (this.selectors && this.els) {
      this.els.$triggers = document.querySelectorAll<HTMLElement>(this.selectors.triggers);
    }
  },

  toggleContent() {
    if (this.els && this.els.$triggers) {
      this.els.$triggers.forEach((el) => {
        el.addEventListener('click', () => {
          if (this.classes && this.classes.isOpen && this.selectors && el.nextElementSibling) {
            el.classList.toggle(this.classes.isOpen);
            if (el.nextElementSibling.matches(this.selectors.content)) {
              el.nextElementSibling.classList.toggle(this.classes.isOpen);
            }
          }
        });
      });
    }
  },

  init() {
    this.setElements?.();
    this.toggleContent?.();
  },
};

export default toggleContent;
