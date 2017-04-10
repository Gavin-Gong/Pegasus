/* eslint-disable */
export function encodeQuery(obj, hasQstMark = false) {
  // convert obj to query params
  const queryString = Object.keys(obj)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(obj[key])}`)
    .join('&');
  return hasQstMark ? `?${queryString}` : queryString;
};

export function decodeQuery(qString) {
  // convert query string to object
  console.log(qString);
  let result = {};
  if (!qString) return {};
  if (qString.charAt() === '?') {
    qString = qString.replace('?', '');
  }
  if (qString.substr(-2) === '#/') {
    qString = qString.replace('#/', '');
  }
  qString.split('&').map(item => {
    let entryArr = item.split('=');
    result[entryArr[0]] = entryArr[1];
  });
  return result;
}

// TODO: delete me
export function repeatToArr(el, count = 1) {
  let Arr = [];
  while (count > 0) {
    Arr.push(el);
    count --;
  }
  return Arr;
}

export function isEmptyObj(ele) {
  return Object.keys(ele).length === 0 && ele.constructor === Object;
}
