import Vue from "vue";
import VueRouter from "vue-router";
import NewsView from "../views/NewsView.vue";
import AskView from "../views/AskView.vue";
import JobsView from "../views/JobsView.vue";
import ItemView from "../views/ItemView.vue";
import UserView from "../views/UserView.vue";
import AskDetailView from "../views/AskDetailView.vue";
import Bus from "../utils/bus";
import { store } from "../store/index";
//import createListView from "../views/CreateListView.js";

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      redirect: "/news",
    },
    {
      path: "/news",
      name: "news",
      //component: createListView("NewsView"),
      component: NewsView,
      beforeEnter(to, from, next) {
        Bus.$emit("start:spinner");
        store
          .dispatch("FETCH_LIST", to.name)
          .then(() => {
            console.log("fetched");
            next();
          })
          .catch((e) => console.log(e));
      },
    },
    {
      path: "/ask",
      name: "ask",
      //component: createListView("AskView"),
      component: AskView,
      beforeEnter(to, from, next) {
        Bus.$emit("start:spinner");
        store
          .dispatch("FETCH_LIST", to.name)
          .then(() => {
            console.log("fetched");
            next();
          })
          .catch((e) => console.log(e));
      },
    },
    {
      path: "/jobs",
      name: "jobs",
      //component: createListView("JobsView"),
      component: JobsView,
      beforeEnter(to, from, next) {
        Bus.$emit("start:spinner");
        store
          .dispatch("FETCH_LIST", to.name)
          .then(() => {
            console.log("fetched");
            next();
          })
          .catch((e) => console.log(e));
      },
    },
    {
      path: "/item",
      component: ItemView,
    },
    {
      path: "/user/:id",
      component: UserView,
    },
    {
      path: "/item/:id",
      component: AskDetailView,
    },
  ],
});
