import ClipboardJS from 'clipboard';
import Prismjs from './prism';
import { IComponent } from '../../../src/js/@types/IComponent';
import './tooltip.css';
import './prism.css';

interface ICompCode extends IComponent {
  copyToClipboard(): void;
}

const code: ICompCode = {
  name: 'code',
  copyToClipboard() {
    const clipboard = new ClipboardJS('.js-codeCopy', {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      target(trigger) {
        return trigger.nextElementSibling;
      },
    });

    clipboard.on('success', (e) => {
      e.trigger.classList.add('is-active');

      setTimeout(() => {
        e.trigger.classList.remove('is-active');
      }, 3000);
    });
  },

  init(codeblocks: NodeListOf<HTMLElement>) {
    if (codeblocks.length > 0) {
      Prismjs.init();
      this.copyToClipboard();
    }
  },
};

export default code;
