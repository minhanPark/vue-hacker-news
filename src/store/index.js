import Vue from "vue";
import Vuex from "vuex";
import {
  fetchNewsList,
  fetchAskList,
  fetchJobsList,
  fetchUserInfo,
  fetchItem,
} from "../api/index";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    news: [],
    ask: [],
    jobs: [],
    user: {},
    item: {},
  },
  getters: {
    fetchedAsk(state) {
      return state.ask;
    },
  },
  mutations: {
    SET_NEWS(state, news) {
      state.news = news;
    },
    SET_ASK(state, ask) {
      state.ask = ask;
    },
    SET_JOBS(state, jobs) {
      state.jobs = jobs;
    },
    SET_USER(state, user) {
      state.user = user;
    },
    SET_ITEM(state, item) {
      state.item = item;
    },
  },
  actions: {
    FETCH_NEWS(context) {
      fetchNewsList()
        .then((res) => {
          console.log(res);
          context.commit("SET_NEWS", res.data);
        })
        .catch((e) => console.log(e));
    },
    FETCH_ASK(context) {
      fetchAskList()
        .then((res) => context.commit("SET_ASK", res.data))
        .catch((e) => console.log(e));
    },
    FETCH_JOBS(context) {
      fetchJobsList()
        .then((res) => context.commit("SET_JOBS", res.data))
        .catch((e) => console.log(e));
    },
    FETCH_USER({ commit }, name) {
      fetchUserInfo(name)
        .then((res) => commit("SET_USER", res.data))
        .catch((e) => console.log(e));
    },
    FETCH_ITEM({ commit }, item) {
      fetchItem(item)
        .then(({ data }) => commit("SET_ITEM", data))
        .catch((e) => console.log(e));
    },
  },
});
