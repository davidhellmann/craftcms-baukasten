/*
 * Description of what this file is for
 *
 * @package  <%= projectName %>
<% for (var i=0; i < authors.length; i++) { -%>
 * @author <%= authors[i].name %> [<%= authors[i].email %>]
<% } -%>
 * <%= moduleName.replace('-', '_') %>
 */

const <%= moduleName.replace('-', '_') %> = {
    cfg:  {
        name: '<%= moduleName.replace('-', '_') %>',
        selectors: {
            <%= moduleName.replace('-', '_') %>: '<%= pathOptions.key.charAt(0) %>-<%= moduleName.replace('-', '_') %>',
        },
        classes: {
            active: 'is-active',
            inActive: 'is-inActive',
            hidden: 'is-hidden',
            visible: 'is-visible'
        },
        el: {
            $<%= moduleName.replace('-', '_') %>: undefined
        },
        els: {
            $<%= moduleName.replace('-', '_') %>: undefined
        }
    },

    setElements() {
        this.cfg.el.$<%= moduleName.replace('-', '_') %> = document.querySelector(this.cfg.selectors.<%= moduleName.replace('-', '_') %>);
    },

    init() {
        console.debug(`Init: ${this.cfg.name}`);
        this.setElements();
    },
};

export default <%= moduleName.replace('-', '_') %>;
