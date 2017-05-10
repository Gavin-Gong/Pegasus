// import { fetchAbout } from 'api/about';
import * as types from '../types';

const state = {
  isAuth: !!localStorage.getItem('PEGASUS_TOKEN'),
};

const mutations = {
  [types.LOGIN](stat) {
    localStorage.setItem('PEGASUS_TOKEN', 'randomstr');
    stat.isAuth = true;
  },
  [types.LOGOUT](stat) {
    localStorage.removeItem('PEGASUS_TOKEN');
    stat.isAuth = false;
  },
};

const actions = {
};

export default {
  state,
  mutations,
  actions,
};
