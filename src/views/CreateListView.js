import ListView from "./ListView.vue";
import Bus from "../utils/bus";

export default function createListView(name) {
  return {
    name: name,
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
    render(createElement) {
      return createElement(ListView);
    },
  };
}
