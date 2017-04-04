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
  fetchArticleList({ commit }) {
    return fetchArticleList().then(({ data }) => {
      commit(types.FETCH_ARTICLE_LIST, data);
    });
  },
};

export default {
  state,
  mutations,
  actions,
};
