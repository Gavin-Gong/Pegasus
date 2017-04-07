import { fetchArticleList } from 'api/article';
import * as types from '../types';

const state = {
  list: [],
  detail: [],
};

const mutations = {
  [types.FETCH_ARTICLE_LIST](stat, playload) {
    stat.list = playload;
  },
};

const actions = {
  fetchArticleList({ commit }, query) {
    console.log(query);
    return fetchArticleList(query).then(({ data }) => {
      commit(types.FETCH_ARTICLE_LIST, data);
      return data;
    });
  },
  // TODO: append data
  // addToList({ commit }, query) {

  // },
};

export default {
  state,
  mutations,
  actions,
};
