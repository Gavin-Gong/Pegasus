import $http from 'axios';

const baseUrl = 'posts';

export function fetchArticleList(params) {
  return $http.get(baseUrl, {
    params,
  });
}
export function fetchArticleById(id) {
  return $http.get(`${baseUrl}/${id}`);
}
