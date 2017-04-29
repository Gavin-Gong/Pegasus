// import { fetchAbout } from 'api/about';
import * as types from '../types';

const state = {
  isAuth: !!localStorage.getItem('PEGASUS_AUTH'),
};

const mutations = {
  [types.LOGIN](stat) {
    localStorage.setItem('PEGASUS_AUTH', 'randomstr');
    stat.isAuth = true;
  },
  [types.LOGOUT](stat) {
    localStorage.removeItem('PEGASUS_AUTH');
    stat.isAuth = false;
  },
};

const actions = {
  // fetchAbout({ commit }, query) {
  //   return fetchAbout(query).then(({ data }) => {
  //     commit(types.FETCH_ABOUT, data);
  //     return data;
  //   });
  // },
};

export default {
  state,
  mutations,
  actions,
};
