<template>
  <div id="printSection">
    <v-row class="justify-center secondary" no-gutters>
      {{ policy.user }}
      ola kala tora edo tha bgenei to omorfo user-friendly policy
    </v-row>
  </div>
</template>

<script>
export default {
  name: "PolicyPopUp",
  components: {},
  props: {
    policy: Object,
  },
  data() {
    return {
      array: [],
      itemPerRoomArray: [],
    };
  },
  watch: {},
  computed: {},

  methods: {},
  created() {},
  mounted() {},
};
</script>
<style>
</style>
