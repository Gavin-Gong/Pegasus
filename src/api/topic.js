import $http from 'axios';

const baseUrl = 'topics';

export function fetchTopicList(params) {
  return $http.get(baseUrl, {
    params,
  });
}
export function fetchTopicById(id) {
  return $http.get(`${baseUrl}/${id}`);
}
export function createTopic(fd) {
  return $http.post(baseUrl, Object.assign({
  }, fd));
}
export function editTopic(id, fd) {
  return $http.put(`${baseUrl}/${id}`, Object.assign({
  }, fd));
}
export function deleteTopic(id) {
  return $http.delete(`${baseUrl}/${id}`);
}

