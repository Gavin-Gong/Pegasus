import $http from 'axios';

const baseUrl = 'tags';

export function fetchTagList(params) {
  return $http.get(baseUrl, {
    params,
  });
}
export function fetchTagById(id) {
  return $http.get(`${baseUrl}/${id}`);
}
