import $http from 'axios';

const baseUrl = 'profile';

/* eslint-disable */
export function fetchProfile() {
  return $http.get(baseUrl);
}
export function putProfile(id, fd) {
  return $http.put(`${baseUrl}/${id}`, fd);
}

