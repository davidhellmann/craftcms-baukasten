// Import our CSS
import styles from '../css/app.scss';

// because webpack generated code does not go through babel
import 'core-js/modules/es.promise';
import 'core-js/modules/es.array.iterator';
import objectFitImages from 'object-fit-images';

// App main
const main = async () => {
  // Async load the vue module
  const { default: Vue } = await import(/* webpackChunkName: "vue" */ 'vue');

  // Async load LazySizes and it's plugins
  const LazySizes = await import(
    /* webpackChunkName: "LazySizes" */ 'lazysizes'
  );
  await import(
    /* webpackChunkName: "LazySizes" */ 'lazysizes/plugins/respimg/ls.respimg.js'
  );
  await import(
    /* webpackChunkName: "LazySizes" */ 'lazysizes/plugins/object-fit/ls.object-fit.js'
  );

  // fix issue when image is already in viewport and content is not loaded yet
  document.addEventListener('DOMContentLoaded', function() {
    LazySizes.init();
  });

  document.addEventListener('lazyloaded', e => {
    const target = e.target.parentNode;
    if (target) {
      setTimeout(() => {
        target.style.backgroundColor = 'transparent';
      }, 250);
    }
  });

  // Adds Browser Classes to the document
  // await import(/* webpackChunkName: "browserDetect" */ './scripts/bowser.js')
  //   .then(browserDetect => browserDetect.default.init())
  //   .catch(e => console.error(`${e.name} : ${e.message}`));

  // disableHover
  await import(
    /* webpackChunkName: "disableHover" */ './scripts/disableHover.js'
  )
    .then(disableHover => disableHover.default.init())
    .catch(e => console.error(`${e.name} : ${e.message}`));

  // Code Snippets
  if (document.querySelectorAll('.a-code').length) {
    await import(
      /* webpackChunkName: "code" */ '../templates/_atoms/code/_script.js'
    )
      .then(code => code.carousel.init())
      .catch(e => console.error(`${e.name} : ${e.message}`));
  }

  // resizeClass
  await import(/* webpackChunkName: "resizeClass" */ './scripts/resizeClass.js')
    .then(resizeClass => resizeClass.default.init())
    .catch(e => console.error(`${e.name} : ${e.message}`));

  // load slider async
  if (document.querySelectorAll('.js-slider').length) {
    await import(/* webpackChunkName: "flickity" */ './modules/flickity.js')
      .then(flickiy => flickiy.carousel.init())
      .catch(e => console.error(`${e.name} : ${e.message}`));
  }

  // load gallery async
  if (document.querySelectorAll('.js-gallery').length) {
    await import(/* webpackChunkName: "photoswipe" */ './modules/photoswipe.js')
      .then(photoswipe => photoswipe.default.init('.js-gallery'))
      .catch(e => console.error(`${e.name} : ${e.message}`));
  }

  // Create our vue instance
  new Vue({
    el: '#confetti',
    components: {
      confetti: () =>
        import(
          /* webpackChunkName: "confetti" */
          '../vue/Confetti.vue'
        ),
    },
    data: {},
    methods: {},
    mounted() {},
  });
};

// Execute async function
main().then(() => {
  console.log('async main executed');
});

// Accept HMR as per: https://webpack.js.org/api/hot-module-replacement#accept
if (module.hot) {
  module.hot.accept();
}
