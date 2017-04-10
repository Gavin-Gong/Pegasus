import { fetchArticleList, fetchArticleById } from 'api/article';
import * as types from '../types';

const state = {
  list: [],
  detail: {
    id: '',
    title: '',
    banner: '',
    created_at: '',
    tags: [],
    topic: {},
  },
  recent: [],
  hot: [],
};

const mutations = {
  [types.FETCH_ARTICLE_LIST](stat, playload) {
    stat.list = playload;
  },
  [types.FETCH_ARTICLE](stat, playload) {
    stat.detail = playload;
  },
  [types.FETCH_RECENT_ARTICLE_LIST](stat, playload) {
    stat.recent = playload;
  },
  [types.FETCH_HOT_ARHTICLE_LIST](stat, playload) {
    stat.hot = playload;
  },
};

const actions = {
  fetchArticleList({ commit }, { query, type }) {
    if (!type) type = types.FETCH_ARTICLE_LIST;
    return fetchArticleList(query).then(({ data }) => {
      commit(type, data);
      return data;
    });
  },
  fetchArticleById({ commit }, id) {
    return fetchArticleById(id).then(({ data }) => {
      commit(types.FETCH_ARTICLE, data);
      return data;
    });
  },
  fetchHotArticleList({ dispatch, commit }, query = { _sort: 'view_count', _order: 'DESC', _limit: 10 }) {
    return dispatch('fetchArticleList', { query, type: types.FETCH_HOT_ARHTICLE_LIST });
  },
  fetchRecentArticleList({ dispatch, commit }, query = { _sort: 'created_at', _order: 'DESC', _limit: 10 }) {
    return dispatch('fetchArticleList', { query, type: types.FETCH_RECENT_ARTICLE_LIST });
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
