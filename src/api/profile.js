import $http from 'axios';

const baseUrl = 'profile';

/* eslint-disable */
export function fetchProfile() {
  return $http.get(baseUrl);
}

