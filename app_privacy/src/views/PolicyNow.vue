<template>
  <v-main>
    <v-carousel
      cycle
      height="500"
      hide-delimiter-background
      show-arrows-on-hover
    >
      <v-carousel-item v-for="(slide, i) in slides" :key="i">
        <v-sheet :color="colors[i]" height="100%">
          <v-row class="fill-height" align="center" justify="center">
            <div class="text-h2">{{ slide }} Slide</div>
          </v-row>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
  </v-main>
</template>

<script>
export default {
  data() {
    return {
      colors: ["blue", "grey", "light blue", "light grey", "green"],
      slides: ["First", "Second", "Third", "Fourth", "Fifth"],
    };
  },
};
</script>