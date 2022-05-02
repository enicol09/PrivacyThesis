<template>
  <div>{{ this.user }}</div>
</template>
<script>
export default {
  name: "DetailsSaved",

  props: {
    user: {
      type: String,
      required: true,
    },

    password: {
      type: String,
      required: true,
    },

    data() {
      return {};
    },

    computed: {
      console: () => console,
    },
  },
};
</script>
