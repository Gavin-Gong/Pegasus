import { fetchStatistics } from 'api/statistics';
import * as types from '../types';

const state = {
  data: {

  },
};

const mutations = {
  [types.FETCH_STATISTICS](stat, playload) {
    stat.data = playload;
  },
};

const actions = {
  fetchStatistics({ commit }) {
    return fetchStatistics().then(({ data }) => {
      commit(types.FETCH_STATISTICS, data);
      return data;
    });
  },
};

export default {
  state,
  mutations,
  actions,
};
