<template>
  <div>{{ this.deletepoli() }}</div>
</template>

<script>
export default {
  name: "deleteaccount",
  components: {},
  props: {
    accountid: Object,
  },
  data() {
    return {
      policyid: "",
    };
  },
  watch: {},
  computed: {},

  methods: {
    deletepoli() {
      var id = this.accountid;
      console.log("Elia");
      var t = this;
      t.$firebase.db.collection("users").doc(id).delete();

      this.$router.push("/").catch((error) => {
        // error was removed
        console.log(error.message);
        //  console.log("i am here 4")
      });
    },
  },
  created() {
    //this.deletepoli();
  },
  mounted() {},
};
</script>
<style>
</style>
