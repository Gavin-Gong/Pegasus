import * as types from '../types';

const state = {
  showNav: true,
  showFooter: true,
};

const mutations = {
  [types.SHOW_NAV](stat) {
    stat.showNav = true;
  },
  [types.HIDDEN_NAV](stat) {
    stat.showNav = false;
  },
  [types.SHOW_FOOTER](stat) {
    stat.showFooter = true;
  },
  [types.HIDDEN_FOOTER](stat) {
    stat.showFooter = false;
  },
};


export default {
  state,
  mutations,
};
