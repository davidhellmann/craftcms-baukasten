/*
 * @package  <%= projectName %>
 * @author <%= author.name %> [<%= author.email %>]
 *
 * <%= moduleName.replace('-', '_') %>Basic
 */

const <%= moduleName.replace('-', '_') %>Basic = {
    cfg:  {
        name: '<%= moduleName.replace('-', '_') %> Basic',
        selectors: {
            <%= moduleName.replace('-', '_') %>: '<%= pathOptions.key.charAt(0) %>-<%= moduleName.replace('-', '_') %>-basic',
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

export default <%= moduleName.replace('-', '_') %>Basic;
