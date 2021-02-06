// From https://web.dev/native-lazy-loading/#how-do-i-handle-browsers-that-don't-yet-support-native-lazy-loading
if (!'loading' in HTMLImageElement.prototype) {
  // Dynamically import the LazySizes library
  const script = document.createElement('script');
  script.src =
    '{{ craft.twigpack.getModuleUri("lazysizes-wrapper.js", "legacy") }}';
  document.body.appendChild(script);
}
