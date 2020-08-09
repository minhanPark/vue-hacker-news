<template>
  <div>
    <section>
      <!-- 질문 상세 정보 -->
      <!-- <div class="user-container">
        <div>
          <i class="fas fa-user"></i>
        </div>
        <div class="user-description">
          <router-link :to="`/user/${itemInfo.user}`">{{itemInfo.user}}</router-link>
          <div class="time">{{itemInfo.time_ago}}</div>
        </div>
      </div>-->
      <UserProfile>
        <div slot="username">
          <router-link :to="`/user/${itemInfo.user}`">{{itemInfo.user}}</router-link>
        </div>
        <template slot="time">{{'Posted ' + itemInfo.time_ago}}</template>
      </UserProfile>
    </section>
    <section>
      <!-- 질문 댓글 -->
      <h2>{{itemInfo.title}}</h2>
    </section>
    <div v-html="itemInfo.content"></div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import UserProfile from "../components/UserProfile.vue";
export default {
  computed: {
    ...mapGetters({
      itemInfo: "fetchedItem",
    }),
  },
  components: {
    UserProfile,
  },
  created() {
    const itemId = this.$route.params.id;
    this.$store.dispatch("FETCH_ITEM", itemId);
  },
};
</script>

<style scoped>
.user-container {
  display: flex;
  align-items: center;
  padding: 0.5rem;
}
.fa-user {
  font-size: 2.5rem;
}
.user-description {
  padding-left: 8px;
}
.time {
  font-size: 0.7rem;
}
</style>