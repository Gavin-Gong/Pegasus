import { fetchTagList, fetchTagById } from 'api/tag';
import * as types from '../types';

const state = {
  list: [],
  detail: [],
};

const mutations = {
  [types.FETCH_TAG_LIST](stat, playload) {
    stat.list = playload;
  },
  [types.FETCH_TAG](stat, playload) {
    stat.detail = playload;
  },
};

const actions = {
  fetchTagList({ commit }, query) {
    return fetchTagList(query).then(({ data }) => {
      commit(types.FETCH_TAG_LIST, data);
      return data;
    });
  },
  fetchTag({ commit }, id) {
    return fetchTagById(id).then(({ data }) => {
      commit(types.FETCH_TAG, data);
      return data;
    });
  },
};

export default {
  state,
  mutations,
  actions,
};
