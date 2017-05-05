import $http from 'axios';

const baseUrl = 'statistics';

/* eslint-disable */
export function fetchStatistics() {
  return $http.get(baseUrl);
}


