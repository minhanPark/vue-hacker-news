<template>
  <div>
    <UserProfile>
      <div slot="username">{{userInfo.id}}</div>
      <span slot="time">{{'Joined ' + userInfo.created}},</span>
      <span slot="karma" class="karma">{{userInfo.karma}}</span>
    </UserProfile>
    <!-- <p>name: {{userInfo.id}}</p>
    <p>karma: {{userInfo.karma}}</p>
    <p>created: {{userInfo.created}}</p>-->
  </div>
</template>

<script>
import UserProfile from "../components/UserProfile.vue";
export default {
  computed: {
    userInfo() {
      return this.$store.state.user;
    },
  },
  components: {
    UserProfile,
  },
  created() {
    console.log(this.$route.params.id);
    const username = this.$route.params.id;
    this.$store.dispatch("FETCH_USER", username);
  },
};
</script>

<style>
</style>