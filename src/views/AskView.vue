<template>
  <!-- <div>
    <ul class="news-list">
      <li v-for="item in ask" v-bind:key="item.id" class="post">
        <div class="points">{{item.points}}</div>
        <div>
          <p class="news-title">
            <router-link v-bind:to="`/item/${item.id}`">{{item.title}}</router-link>
          </p>
          <small class="link-text">
            {{ item.time_ago }} by
            <router-link v-bind:to="`/user/${item.user}`">{{ item.user }}</router-link>
          </small>
        </div>
      </li>
    </ul>
  </div>-->
  <ListItem></ListItem>
</template>

<script>
import ListItem from "../components/ListItem";
// import Bus from "../utils/bus.js";
import ListMixin from "../mixins/ListMixin";
// import { mapGetters } from "vuex";
export default {
  //   computed: {
  //     ...mapGetters({
  //       ask: "fetchedAsk",
  //     }),
  // ...mapState({
  //   ask: (state) => state.ask,
  // }),
  // },
  // created() {
  //   Bus.$emit("start:spinner");
  //   this.$store
  //     .dispatch("FETCH_ASK")
  //     .then(() => {
  //       console.log("fetched");
  //       Bus.$emit("end:spinner");
  //     })
  //     .catch((e) => console.log(e));
  // },
  components: {
    ListItem,
  },
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
