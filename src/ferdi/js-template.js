/*
 * @package  <%= projectName %>
 * @author <%= author.name %> [<%= author.email %>]
 *
 * <%= moduleName.replace('-', '_') %>
 */

const <%= moduleName.replace('-', '_') %> = {
    cfg:  {
        name: '<%= moduleName.replace('-', '_') %>',
        selectors: {
            <%= moduleName.replace('-', '_') %>: 'c-<%= moduleName.replace('-', '_') %>',
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
