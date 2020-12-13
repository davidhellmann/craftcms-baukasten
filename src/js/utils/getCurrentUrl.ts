/**
 * getCurrentUrl
 */

const getCurrentUrl = () => {
  return `${window.location.protocol}//${window.location.host}${window.location.pathname}`;
};

export default getCurrentUrl;
