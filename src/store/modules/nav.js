import * as types from '../types';

const state = {
  showNav: true,
};

const mutations = {
  [types.SHOW_NAV](stat) {
    stat.showNav = true;
  },
  [types.HIDDEN_NAV](stat) {
    stat.showNav = false;
  },
};


export default {
  state,
  mutations,
};
