import $http from 'axios';

const baseUrl = 'posts';

export function fetchArticleList(params) {
  const tempParams = Object.assign({
    // _sort: 'created_at',
    // _order: 'asc',
  }, params);
  console.log(tempParams);
  return $http.get(baseUrl, {
    params: tempParams,
  });
}
export function fetchArticleById(id) {
  return $http.get(`${baseUrl}/${id}`);
}
export function postArticle(content) {
  return $http.post(baseUrl, Object.assign({
    topic: {},
    tags: [],
    banner: '',
  }, content));
}

export function editArticle(id, fd) {
  return $http.put(`${baseUrl}/${id}`, Object.assign({ }, fd));
}

export function deleteArticle(id) {
  return $http.delete(`${baseUrl}/${id}`);
}
