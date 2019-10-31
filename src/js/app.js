// Import our CSS
import styles from '../css/app.scss';

import cssVars from 'css-vars-ponyfill';
cssVars({
    onlyLegacy: true,
});

// because webpack generated code does not go through babel
import 'core-js/modules/es.promise';
import 'core-js/modules/es.array.iterator';

// App main
const main = async () => {
    // Async load the vue module
    const {default: Vue} = await import(/* webpackChunkName: "vue" */ 'vue');

    // Async load LazySizes and it's plugins
    const LazySizes = await import(
        /* webpackChunkName: "LazySizes" */ 'lazysizes'
        );
    await import(
        /* webpackChunkName: "LazySizes" */ 'lazysizes/plugins/respimg/ls.respimg.js'
        );
    await import(
        /* webpackChunkName: "LazySizes" */ 'lazysizes/plugins/parent-fit/ls.parent-fit.min.js'
        );
    await import(
        /* webpackChunkName: "LazySizes" */ 'lazysizes/plugins/object-fit/ls.object-fit.js'
        );

    // fix issue when image is already in viewport and content is not loaded yet
    document.addEventListener('DOMContentLoaded', function () {
        LazySizes.init();
    });

    // load slider async
    if (document.getElementsByClassName('js-slider').length) {
        await import(/* webpackChunkName: "flickity" */ './modules/flickity.js')
            .then(flickiy => flickiy.carousel.init())
            .catch(e => console.error(`${e.name} : ${e.message}`));
    }

    // load gallery async
    if (document.getElementsByClassName('js-gallery').length) {
        await import(
            /* webpackChunkName: "photoswipe" */ './modules/photoswipe.js'
            )
            .then(photoswipe => photoswipe.default.init('.js-gallery'))
            .catch(e => console.error(`${e.name} : ${e.message}`));
    }

    // Create our vue instance
    const app = new Vue({
        el: "#app",
        delimiters: ['${', '}'],
        components: {
            'confetti': () =>
                import(
                    /* webpackChunkName: "confetti" */
                    '../vue/Confetti.vue'
                ),
        },
        data: {},
        methods: {},
        mounted() {
        },
    });

    return app;
};

// Execute async function
main().then((app) => {
    console.log('async main executed');
});

// Accept HMR as per: https://webpack.js.org/api/hot-module-replacement#accept
if (module.hot) {
    module.hot.accept();
}
