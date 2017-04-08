import { fetchArticleList, fetchArticleById } from 'api/article';
import * as types from '../types';

const state = {
  list: [],
  detail: {
    title: '',
    banner: '',
    created_at: '',
    tags: [],
    topics: [],
  },
};

const mutations = {
  [types.FETCH_ARTICLE_LIST](stat, playload) {
    stat.list = playload;
  },
  [types.FETCH_ARTICLE](stat, playload) {
    stat.detail = playload;
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
  fetchArticleById({ commit }, id) {
    return fetchArticleById(id).then(({ data }) => {
      commit(types.FETCH_ARTICLE, data);
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
