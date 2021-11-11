import { createPopper } from '@popperjs/core';
import { IComponent } from '../../../src/js/@types/IComponent';
import './navigationMain.pcss';

interface ICompNavigationMain extends IComponent {
  handleSecondLayer(el: HTMLElement): void;
}

const navigationMain: ICompNavigationMain = {
  name: 'navigationMain',

  handleSecondLayer(navigationMainEl) {
    const menuItemsWithSub = [
      ...navigationMainEl.querySelectorAll<HTMLElement>(
        '.c-navigationMain__listButton[data-level="1"]',
      ),
    ];

    menuItemsWithSub?.forEach((item) => {
      const secondLayer = item?.parentElement?.querySelector<HTMLElement>(
        '.c-navigationMain__subItemsWrapper[data-level="1"]',
      );

      if (secondLayer) {
        const popper = createPopper(item, secondLayer, {
          placement: 'bottom',
          modifiers: [
            {
              name: 'preventOverflow',
              options: {
                boundary: navigationMainEl,
              },
            },
            {
              name: 'offset',
              options: {
                offset: [0, 16],
              },
            },
          ],
        });
        popper.update();
      }
    });
  },

  init(navigationMainEl: HTMLElement) {
    this.handleSecondLayer(navigationMainEl);
  },
};

export default navigationMain;
