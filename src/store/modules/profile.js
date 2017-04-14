import { fetchProfile } from 'api/profile';
import * as types from '../types';

const state = {
  data: {
    created_at: '',
    avatar: '',
    name: '',
    bio: '',
    socials: [],
    address: '',
    post_count: '',
    streak_day_count: '',
  },
};

const mutations = {
  [types.FETCH_PROFILE](stat, playload) {
    stat.data = playload;
  },
};

const actions = {
  fetchProfile({ commit }, query) {
    return fetchProfile(query).then(({ data }) => {
      commit(types.FETCH_PROFILE, data);
      return data;
    });
  },
};

export default {
  state,
  mutations,
  actions,
};
