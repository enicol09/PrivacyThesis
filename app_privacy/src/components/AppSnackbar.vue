<template>
  <div class="text-center ma-2">
    <v-snackbar
      dark
      bottom
      v-model="snackbarStatus"
      :color="color"
      :timeout="timeout"
    >
      <span class="white--text">{{ message }}</span>
      <template v-slot:action="{ attrs }">
        <v-btn color="white" text v-bind="attrs" @click="snackbarStatus = false"
          >Close</v-btn
        >
      </template>
    </v-snackbar>
  </div>
</template>

<script>
export default {
  props: {
    status: {
      type: Boolean,
      default: false,
    },
    color: {
      type: String,
      default: "black",
    },
    timeout: {
      type: Number,
      default: 5000,
    },
    message: {
      type: String,
      default: "",
    },
  },
  computed: {
    snackbarStatus: {
      get: function () {
        return this.status;
      },
      set: function () {},
    },
  },
};
</script>