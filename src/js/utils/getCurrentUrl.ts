/**
 * getCurrentUrl
 */

const getCurrentUrl = (): string => {
  return `${window.location.protocol}//${window.location.host}${window.location.pathname}`;
};

export default getCurrentUrl;
