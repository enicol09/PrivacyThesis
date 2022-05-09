this.deletepoli();
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
      console.log(JSON.stringify(policy));
      var t = this;
      t.$firebase.db.collection("policies").doc(policy).delete();
    },
  },

  created() {},
  mounted() {},
};
</script>
<style>
</style>
