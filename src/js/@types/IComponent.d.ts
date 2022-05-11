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
    [key: string]: NodeListOf<HTMLElement> | null;
  };

  init(el: HTMLElement | NodeListOf<HTMLElement>): void;
  setElements?(): void;
}
