/*<%
var splittedPath = modulePath.split('/');
var simple = splittedPath[0] === splittedPath[1];
var mn = simple ? moduleName : splittedPath[0] + moduleName.charAt(0).toUpperCase() + moduleName.slice(1);
mn = mn.replace('-', '_');
var cn = pathOptions.key.charAt(0) + '-' + mn;
%>*/
/*
 * @package  <%= projectName %>
 * @author <%= author.name %> [<%= author.email %>]
 *
 * <%= moduleName.replace('-', '_') %>
 */

const <%= mn %> = {
    cfg:  {
        name: '<%= mn %>',
        selectors: {
            <%= mn %>: '<%= cn %>',
        },
        classes: {
            active: 'is-active',
            inActive: 'is-inActive',
            hidden: 'is-hidden',
            visible: 'is-visible'
        },
        el: {
            $<%= mn %>: undefined
        },
        els: {
            $<%= mn %>: undefined
        }
    },

    setElements() {
        this.cfg.el.$<%= mn %> = document.querySelector(this.cfg.selectors.<%= mn %>);
    },

    init() {
        console.debug(`Init: ${this.cfg.name}`);
        this.setElements();
    },
};

export default <%= mn %>;
