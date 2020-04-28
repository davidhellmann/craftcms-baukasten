// because webpack generated code does not go through babel
import 'core-js/modules/es.promise';
import 'core-js/modules/es.array.iterator';

// Clear Console
// https://stackoverflow.com/questions/53070807/how-can-set-up-my-vue-js-site-to-clear-the-browsers-javascript-console-on-every/53933757#53933757
if (module.hot) {
  module.hot.accept(); // already had this init code

  module.hot.addStatusHandler(status => {
    if (status === 'prepare') console.clear();
  });
}

// Add JS Loaded class to the body
document.documentElement.classList.add('js-loaded');

// App main
const main = async () => {
  // Import Vendors
  await import(/* webpackChunkName: "vendors" */ './_vendors.js');

  // Import Scripts
  await import(/* webpackChunkName: "scripts" */ './_scripts.js');

  // Import Components
  await import(/* webpackChunkName: "components" */ './_components.js');

  // Import Vue Components
  await import(/* webpackChunkName: "vueComponents" */ './_vue-components.js');
};

// Execute async function
main().then(() => {
  console.log(
    '                                                               ',
  );
  console.log(
    '===============================================================',
  );
  console.log(
    '||                                                           ||',
  );
  console.log(
    '||   CRAFT BAUKASTEN                                         ||',
  );
  console.log(
    '||   App is running…                                         ||',
  );
  console.log(
    '||                                                           ||',
  );
  console.log(
    '||   Maintainer    David Hellmnann / @fredmansky             ||',
  );
  console.log(
    '||   Website       https://davidhellmann.com                 ||',
  );
  console.log(
    '||   GitHub Repo   https://github.com/davidhellmann/craft    ||',
  );
  console.log(
    '||   Agency        https://fredmansky.com                    ||',
  );
  console.log(
    '||                                                           ||',
  );
  console.log(
    '||   Thanks to     https://nystudio107.com/                  ||',
  );
  console.log(
    '||                                                           ||',
  );
  console.log(
    '===============================================================',
  );
  console.log(
    '                                                               ',
  );
});

// Accept HMR as per: https://webpack.js.org/api/hot-module-replacement#accept
if (module.hot) {
  module.hot.accept();
}
