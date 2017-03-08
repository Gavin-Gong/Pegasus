export default (obj, hasQstMark = false) => {
  // convert obj to query params

  const queryString = Object.keys(obj)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(obj[key])}`)
    .join('&');
  return hasQstMark ? `?${queryString}` : queryString;
};
