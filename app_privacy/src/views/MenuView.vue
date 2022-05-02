
<template>
  <v-container align-content-center justify="center" fill-height>
    <v-row class="bg-img" justify="space-around">
      <div class="text-center">
        <v-btn
          height="280px"
          width="350px"
          class="ma-2"
          color="secondary"
          @click="generator = 'generator'"
          to="/generator"
        >
          Create a new privacy policy
        </v-btn>

        <v-btn
          height="280px"
          width="350px"
          class="ma-2"
          color="success"
          @click="edit = 'edit'"
          to="/edit"
        >
          Edit an old privacy policy
        </v-btn>

        <v-btn
          height="280px"
          width="350px"
          class="ma-2"
          color="info"
          @click="pol = 'pol'"
          to="/policyr"
        >
          See what a prolicy must have
        </v-btn>
      </div>
    </v-row>
  </v-container>
</template>

<style scoped>
.bg-img {
  background-color: rgb(255, 255, 255);
  background-size: cover;
  background-position: center top;
  border-radius: 2px;
}
</style>

<script>
export default {
  data: () => ({
    drawer: null,
    aboutpage: false,
    mainpage: false,
    generator: false,
    pol: false,
    edit: false,
  }),
};
</script>
