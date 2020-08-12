import Bus from "../utils/bus";

export default {
  // 컴포넌트 옵션을 넣는다
  created() {
    Bus.$emit("start:spinner");
    this.$store
      .dispatch("FETCH_LIST", this.$route.name)
      .then(() => {
        console.log("fetched");
        Bus.$emit("end:spinner");
      })
      .catch((e) => console.log(e));
  },
};
