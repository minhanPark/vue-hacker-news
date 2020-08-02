<template>
  <div>
    <p v-for="item in ask" v-bind:key="item.id">
      <a v-bind:href="item.url">{{ item.title }}</a>
      <small>{{ item.time_ago }}, {{ item.user }}</small>
    </p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({
      ask: "fetchedAsk",
    }),
    // ...mapState({
    //   ask: (state) => state.ask,
    // }),
  },
  created() {
    this.$store.dispatch("FETCH_ASK");
  },
};
</script>

<style></style>
