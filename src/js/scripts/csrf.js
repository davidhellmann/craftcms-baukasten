const csrfToken = {
  init() {
    const csrfInputs = [
      ...document.querySelectorAll('input[name="CRAFT_CSRF_TOKEN"]'),
    ];
    if (csrfInputs) {
      csrfInputs.forEach(csrfInput => {
        csrfInput.value = window.Craft.csrfTokenValue;
      });
    }
  },
};

export default csrfToken;
