import { IComponent } from '../@types/IComponent';

interface ICompSayHello extends IComponent {
  init(): void;
}

const sayHello: ICompSayHello = {
  name: 'sayHello',
  init() {
    const a = [
      '\n%c   Made with \u2665 and Baukasten   ',
      'color: #fff; background: #255043; padding:20px 0; margin-bottom: 2px; font-size: 1.2rem; font-weight: 500; font-family: monospace;',
    ];
    const b = [
      '%c    https://baukasten.io                    \n',
      'color: #fff; background: #eee; padding:10px 0; font-size: 0.845rem; font-weight: 500; font-family: monospace;',
    ];

    if (navigator.userAgent.toLowerCase().includes('chrome')) {
      window.console.log.apply(console, a);
      window.console.log.apply(console, b);
    } else {
      window.console.log('');
      window.console.log('Made with \u2665 and Baukasten - https://baukasten.io');
      window.console.log('');
    }
  },
};

export default sayHello;
