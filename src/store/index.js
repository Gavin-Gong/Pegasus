import Vue from 'vue';
import Vuex from 'vuex';
import * as actions from './actions';
import * as getters from './getters';
import article from './modules/article';
import tag from './modules/tag';
import topic from './modules/topic';
import about from './modules/about';

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
  },
  strict: debug,
});
