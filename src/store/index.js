import Vue from "vue";
import Vuex from "vuex";
import {
  fetchNewsList,
  fetchAskList,
  fetchJobsList,
  fetchUserInfo,
  fetchItem,
  fetchList,
} from "../api/index";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    news: [],
    ask: [],
    jobs: [],
    user: {},
    item: {},
    list: [],
  },
  getters: {
    fetchedAsk(state) {
      return state.ask;
    },
    fetchedItem(state) {
      return state.item;
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
    SET_LIST(state, list) {
      state.list = list;
    },
  },
  actions: {
    async FETCH_NEWS(context) {
      // return fetchNewsList()
      //   .then((res) => {
      //     console.log(res);
      //     context.commit("SET_NEWS", res.data);
      //     return res;
      //   })
      //   .catch((e) => console.log(e));
      const response = await fetchNewsList();
      context.commit("SET_NEWS", response.data);
      return response;
    },
    async FETCH_ASK(context) {
      // return fetchAskList()
      //   .then((res) => {
      //     context.commit("SET_ASK", res.data);
      //     return res;
      //   })
      //   .catch((e) => console.log(e));
      const response = await fetchAskList();
      context.commit("SET_ASK", response.data);
      return response;
    },
    async FETCH_JOBS(context) {
      // return fetchJobsList()
      //   .then((res) => {
      //     context.commit("SET_JOBS", res.data);
      //     return res;
      //   })
      //   .catch((e) => console.log(e));
      const response = await fetchJobsList();
      context.commit("SET_JOBS", response.data);
      return response;
    },
    FETCH_USER({ commit }, name) {
      return fetchUserInfo(name)
        .then((res) => commit("SET_USER", res.data))
        .catch((e) => console.log(e));
    },
    FETCH_ITEM({ commit }, item) {
      return fetchItem(item)
        .then(({ data }) => commit("SET_ITEM", data))
        .catch((e) => console.log(e));
    },
    FETCH_LIST({ commit }, pageName) {
      return fetchList(pageName)
        .then((res) => {
          commit("SET_LIST", res.data);
          return res;
        })
        .catch((e) => console.log(e));
    },
  },
});
