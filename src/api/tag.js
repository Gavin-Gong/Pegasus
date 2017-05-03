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
export function createTag(fd) {
  return $http.post(baseUrl, Object.assign({
  }, fd));
}
export function editTag(id, fd) {
  return $http.put(`${baseUrl}/${id}`, Object.assign({
  }, fd));
}
export function deleteTag(id) {
  return $http.delete(`${baseUrl}/${id}`);
}
