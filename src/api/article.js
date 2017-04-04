import $http from 'axios';

const baseUrl = 'post';

export function fetchArticleList(params) {
  return $http.get(baseUrl, params);
}
export function fetchArticle(params) {
  return $http.get(baseUrl, params);
}
