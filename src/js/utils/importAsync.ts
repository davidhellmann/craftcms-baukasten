const handleError = (err: Error) => {
  console.error(`${err.name}: ${err.message}`);
  throw new Error('There was an issue importing a script or component.');
};

const importAsync = async (
  cssSelector: string | boolean,
  path: string,
  passElementsToInit = true,
  passElementsAsArray = false,
) => {
  if (cssSelector === false) {
    const { default: component } = await import(`${path}`).catch(handleError);
    component.init();
  }

  if (typeof cssSelector === 'string') {
    const els: NodeListOf<HTMLElement> | null = document.querySelectorAll<HTMLElement>(cssSelector);

    if (els instanceof NodeList && els.length > 0) {
      const { default: component } = await import(`${path}`).catch(handleError);

      if (passElementsAsArray) {
        component.init(passElementsToInit ? els : null);
      } else {
        els.forEach((el: HTMLElement) => {
          component.init(passElementsToInit ? el : null);
        });
      }
    }
  }
};

export default importAsync;
