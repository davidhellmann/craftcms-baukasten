import {IComponent} from '../@types/IComponent'

const csrfToken: IComponent = {
  name: 'CSRF Token',

  init(csrfTokenEls: Array<HTMLElement>) {
    csrfTokenEls?.forEach(csrfInput => {
      // @ts-ignore
      csrfInput.value = window._Craft.csrfTokenValue;
    });
  },
};

export default csrfToken;
