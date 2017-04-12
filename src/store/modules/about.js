import { fetchAbout } from 'api/about';
import * as types from '../types';

const state = {
  data: {
    created_at: '',
    body: '',
    avatar: 'http://lorempixel.com/500/200/nightlife?id=0',
  },
};

const mutations = {
  [types.FETCH_ABOUT](stat, playload) {
    stat.data = playload;
  },
};

const actions = {
  fetchAbout({ commit }, query) {
    return fetchAbout(query).then(({ data }) => {
      commit(types.FETCH_ABOUT, data);
      return data;
    });
  },
};

export default {
  state,
  mutations,
  actions,
};
