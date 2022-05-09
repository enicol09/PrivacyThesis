<template>
  <v-row class="justify-center secondary" no-gutters>
    {{ policy.user }}
  </v-row>
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
