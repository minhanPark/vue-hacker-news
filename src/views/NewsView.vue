<template>
  <!-- <div>
    <ul class="news-list">
      <li v-for="item in this.$store.state.news" v-bind:key="item.id" class="post">
        <div class="points">{{item.points}}</div>
        <div>
          <p class="news-title">
            <a v-bind:href="item.url" target="_blank">{{ item.title }}</a>
          </p>
          <small class="link-text">
            {{ item.time_ago }} by
            <router-link v-bind:to="`/user/${item.user}`" class="link-text">{{ item.user }}</router-link>
          </small>
        </div>
      </li>
    </ul>
  </div>-->
  <ListItem></ListItem>
</template>

<script>
import ListItem from "../components/ListItem";
//import Bus from "../utils/bus.js";
import ListMixin from "../mixins/ListMixin";

export default {
  // created() {
  //   this.$store.dispatch("FETCH_NEWS");
  // },
  components: {
    ListItem,
  },
  // created() {
  //   Bus.$emit("start:spinner");
  //   this.$store
  //     .dispatch("FETCH_NEWS")
  //     .then(() => {
  //       console.log("fetched");
  //       Bus.$emit("end:spinner");
  //     })
  //     .catch((e) => console.log(e));
  // },
  mixins: [ListMixin],
};
</script>

<style scoped>
.news-list {
  margin: 0;
  padding: 0;
}
.post {
  list-style: none;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;
}
.points {
  width: 80px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #41b883;
}
.news-title {
  margin: 0;
}
.link-text {
  color: #828282;
}
</style>
