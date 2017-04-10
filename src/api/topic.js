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

