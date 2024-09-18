/**
 * getCurrentUrl
 */

type GetCurrentUrl = () => string;

const getCurrentUrl: GetCurrentUrl = () => {
  return `${window.location.protocol}//${window.location.host}${window.location.pathname}`;
};

export default getCurrentUrl;
