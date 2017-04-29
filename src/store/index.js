import Vue from 'vue';
import Vuex from 'vuex';
import * as actions from './actions';
import * as getters from './getters';
import article from './modules/article';
import tag from './modules/tag';
import topic from './modules/topic';
import about from './modules/about';
import profile from './modules/profile';
// import nav from './modules/nav';
import global from './modules/global';
import auth from './modules/auth';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  actions,
  getters,
  modules: {
    article,
    tag,
    topic,
    about,
    profile,
    global,
    auth,
  },
  strict: debug,
});
