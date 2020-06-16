/* eslint-disable no-var,object-shorthand,func-names,no-undef,no-param-reassign */
(function($R) {
  $R.add('plugin', 'baukasten', {
    init: function(app) {
      this.app = app;
      this.toolbar = app.toolbar;
      this.selection = app.selection;
    },

    start: function() {
      var dropdownData = {
        primary: {
          title: 'Primary',
          api: 'plugin.baukasten.togglePrimary',
        },
        secondary: {
          title: 'Secondary',
          api: 'plugin.baukasten.toggleSecondary',
        },
        outlined: {
          title: 'Outlined',
          api: 'plugin.baukasten.toggleOutlined',
        },
      };

      var btnData = {
        title: 'Button',
      };

      // create the button
      var $button = this.toolbar.addButton('baukasten', btnData);

      // set dropdown
      $button.setDropdown(dropdownData);
    },

    togglePrimary: function() {
      this.toggle('c-link--primary', 'a');
    },

    toggleSecondary: function() {
      this.toggle('c-link--secondary', 'a');
    },

    toggleOutlined: function() {
      this.toggle('c-link--outlined', 'a');
    },

    toggle: function(classToToggle, element) {
      var selectedLinks = this.selection.getInlines({
        all: true,
        tags: [element],
      });

      selectedLinks.forEach(function(element) {
        // Cross-browser toggle class
        if (element.classList) {
          if (element.classList.contains(classToToggle)) {
            element.classList.remove(classToToggle);
          } else {
            element.classList = [classToToggle];
          }
        }
      });
    },
  });
})(Redactor);
