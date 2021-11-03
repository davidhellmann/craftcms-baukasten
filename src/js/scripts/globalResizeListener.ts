/**
 * globalResizeListener
 */

import _throttle from 'lodash-es/throttle';
import { IComponent } from '../@types/IComponent';

interface ICompGlobalResizeListener extends IComponent {
  documentElement: HTMLElement;
  timer: null | ReturnType<typeof setTimeout>;
  isDoneResizing(): void;
  isResizing(): void;
  saveViewPortWidthsToLocalStorage(): void;
  init(): void;
}

const globalResizeListener: ICompGlobalResizeListener = {
  name: 'globalResizeListener',
  documentElement: document.documentElement,
  timer: null,

  isDoneResizing() {
    this.documentElement.classList.remove('is-resizing');
    this.documentElement.classList.add('is-resized');
  },

  isResizing() {
    this.documentElement.classList.add('is-resizing');
    this.documentElement.classList.remove('is-resized');
  },

  saveViewPortWidthsToLocalStorage() {
    const vw = Math.max(
      document.documentElement.clientWidth || 0,
      window.innerWidth || 0,
    ).toString();
    const vh = Math.max(
      document.documentElement.clientHeight || 0,
      window.innerHeight || 0,
    ).toString();
    const sh = Math.max(
      document.body.scrollHeight || 0,
      document.documentElement.scrollHeight || 0,
    ).toString();

    localStorage.setItem('vw', vw);
    localStorage.setItem('vh', vh);
    localStorage.setItem('sh', sh);
  },

  init() {
    const winResize = _throttle(() => {
      this.saveViewPortWidthsToLocalStorage();
      this.isResizing();

      if (this.timer) {
        clearTimeout(this.timer);
      }
      this.timer = setTimeout(() => {
        this.isDoneResizing();
      }, 250);
    }, 250);

    this.saveViewPortWidthsToLocalStorage();
    window.addEventListener('resize', winResize);
  },
};

export default globalResizeListener;
