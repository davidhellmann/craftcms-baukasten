import { IComponent } from '../@types/IComponent';

declare global {
  // eslint-disable-next-line no-unused-vars
  interface Window {
    Craft:any;
  }
}

const csrfToken: IComponent = {
  name: 'CSRF Token',

  init(csrfTokenEls: Array<HTMLInputElement>) {
    csrfTokenEls?.forEach((csrfInput) => {
      // eslint-disable-next-line no-param-reassign
      csrfInput.value = window.Craft.csrfTokenValue;
    });
  },
};

export default csrfToken;
