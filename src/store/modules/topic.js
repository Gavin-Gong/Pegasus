import { fetchTopicList, fetchTopicById } from 'api/topic';
import * as types from '../types';

const state = {
  list: [],
  detail: {
    title: '',
    count: 0,
    background: '',
  },
};

const mutations = {
  [types.FETCH_TOPIC_LIST](stat, playload) {
    stat.list = playload;
  },
  [types.FETCH_TOPIC](stat, playload) {
    stat.detail = playload;
  },
};

const actions = {
  fetchTopicList({ commit }, query) {
    return fetchTopicList(query).then(({ data }) => {
      commit(types.FETCH_TOPIC_LIST, data);
      return data;
    });
  },
  fetchTopic({ commit }, id) {
    return fetchTopicById(id).then(({ data }) => {
      commit(types.FETCH_TOPIC, data);
      return data;
    });
  },
};

export default {
  state,
  mutations,
  actions,
};
