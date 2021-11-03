export interface IComponent {
  name: string;
  selectors?: {
    [key: string]: string;
  };
  settings?: {
    [key: string]: string | boolean | number;
  };
  classes?: {
    [key: string]: string;
  };
  status?: {
    [key: string]: string | boolean | number;
  };
  el?: {
    [key: string]: HTMLElement | null;
  };
  els?: {
    [key: string]: Array<HTMLElement> | null;
  };

  init(el: HTMLElement | Array<HTMLElement>): void;
}
