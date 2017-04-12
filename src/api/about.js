import $http from 'axios';

const baseUrl = 'about';

/* eslint-disable */
export function fetchAbout() {
  return $http.get(baseUrl);
}

