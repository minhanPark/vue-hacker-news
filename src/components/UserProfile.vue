<template>
  <div class="user-container">
    <div>
      <i class="fas fa-user"></i>
    </div>
    <div class="user-description">
      <!-- <router-link :to="`/user/${userInfo.id}`">{{userInfo.id}}</router-link> -->
      <!-- <div>{{userInfo.id}}</div> -->
      <slot name="username"></slot>
      <div class="time">
        <!-- {{userInfo.created}} -->
        <slot name="time"></slot>
      </div>
      <slot name="karma"></slot>
    </div>
  </div>
</template>

<script>
export default {
  //   computed: {
  //     userInfo() {
  //       return this.$store.state.user;
  //     },
  //   },
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
.karma {
  font-size: 0.7rem;
}
</style>