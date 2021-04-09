const pagination = {
  cfg: {
    selector: '.c-pagination, .c-paginationSimple',
  },

  addEventListeners() {
    const paginationElements = [
      ...document.querySelectorAll(this.cfg.selector),
    ];

      paginationElements.forEach(paginationElement => {
        const links = [...paginationElement.querySelectorAll('a')];

        links.forEach(link => {
          link.addEventListener('click', evt => {
            const atag = evt.currentTarget;
            const base64url = atag.dataset.link;
            const url = atob(base64url);
            const { search } = atag.dataset;

            if (search) {
              window.location = url + search;
            } else {
              window.location = url;
            }
          });
        });
      });
  },

  init() {
    this.addEventListeners();
  },
};

export default pagination;
