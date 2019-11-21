/*
 * @package  craft-baukasten
 * @author David Hellmann [david@hellmann.io]
 *
 * spacer
 */

const spacer = {
    cfg:  {
        name: 'spacer',
        selectors: {
            spacer: 'c-spacer',
        },
        classes: {
            active: 'is-active',
            inActive: 'is-inActive',
            hidden: 'is-hidden',
            visible: 'is-visible'
        },
        el: {
            $spacer: undefined
        },
        els: {
            $spacer: undefined
        }
    },

    setElements() {
        this.cfg.el.$spacer = document.querySelector(this.cfg.selectors.spacer);
    },

    init() {
        console.debug(`Init: ${this.cfg.name}`);
        this.setElements();
    },
};

export default spacer;
