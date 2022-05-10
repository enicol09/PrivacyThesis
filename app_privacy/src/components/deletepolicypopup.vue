<template>
  <div>{{ this.deletepoli() }}</div>
</template>

<script>
export default {
  name: "deletepolicy",
  components: {},
  props: {
    policy: Object,
  },
  data() {
    return {
      policyid: "",
      array: [],
      itemPerRoomArray: [],
    };
  },
  watch: {},
  computed: {},

  methods: {
    deletepoli() {
      var policy = this.policy.id;
      console.log("Elia");
      var t = this;
      t.$firebase.db.collection("policies").doc(policy).delete();
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
