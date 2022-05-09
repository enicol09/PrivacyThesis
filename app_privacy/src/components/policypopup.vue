<template>
  <div id="printSection">
    <template>
      <v-main>
        <v-container class="fill-height" fluid>
          <v-row align="center" justify="center" dense>
            <v-card width="1200" color="light-grey">
              <v-img height="200px" src="@/assets/blue_b.jpg">
                <v-app-bar class="mt-9 md-4" flat color="rgba(0, 0, 0, 0)">
                  <v-avatar size="100">
                    <img alt="user" src="@/assets/logo_t.png" />
                  </v-avatar>

                  <v-spacer></v-spacer>
                </v-app-bar>

                <v-card-title class="white--black mt-3">
                  <p class="ml-3 display-1">Elia Nicolaou</p>
                </v-card-title>
              </v-img>

              <v-card-text>
                <div class="font-weight-bold ml-3 black--text mb-2">
                  Details
                </div>

                <v-list two-line>
                  <v-list-item>
                    <v-list-item-icon>
                      <v-icon color="light-blue darken-2"> mdi-phone </v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                      <v-list-item-title>00 357 96862363</v-list-item-title>
                      <v-list-item-subtitle>Mobile</v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>

                  <v-divider inset></v-divider>

                  <v-list-item href="https://www.google.com/gmail/about/">
                    <v-list-item-icon>
                      <v-icon color="light-blue darken-2"> mdi-email </v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                      <v-list-item-title
                        >enicol09@ucy.ac.cy.com</v-list-item-title
                      >
                      <v-list-item-subtitle>Email</v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>

                  <v-divider inset></v-divider>

                  <v-list-item href="https://www.ucy.ac.cy/en/">
                    <v-list-item-icon>
                      <v-icon color="light-blue darken-2">
                        mdi-map-marker
                      </v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                      <v-list-item-title
                        >University of Cyprus</v-list-item-title
                      >
                      <v-list-item-subtitle>Online</v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                </v-list>
              </v-card-text>
            </v-card>
          </v-row>
        </v-container>
      </v-main>
    </template>
  </div>
</template>
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
