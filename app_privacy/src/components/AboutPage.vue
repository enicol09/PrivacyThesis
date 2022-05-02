<template>
  <v-container>
    <v-timeline :dense="$vuetify.breakpoint.smAndDown">
      <v-timeline-item color="light-blue darken-2" fill-dot right>
        <v-card>
          <v-card-title class="light-blue darken-2">
            <h3 class="white--text font-weight-bold">
              Creating User-Friendly privacy policies
            </h3>
          </v-card-title>
          <v-container>
            <v-row>
              <v-col cols="12" md="10">
                We are creating User-Friendly policies based on your company's
                needs. We are getting information regarding the information you
                collect, and we creating the ideal privacy for you in order to
                represent it in a user-friendly way.
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-timeline-item>

      <v-timeline-item color="grey" fill-dot left>
        <v-card>
          <v-card-title class="grey">
            <h3 class="white--text font-weight-bold">Why user-friendly?</h3>
          </v-card-title>
          <v-container>
            <v-row>
              <v-col cols="12" md="8">
                Only 1 in 5 people are reading privacy policies. We are trying
                to create policies that they are easier to be understood by
                individuals.
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-timeline-item>

      <v-timeline-item color="light-blue darken-2" fill-dot right>
        <v-card>
          <v-card-title class="light-blue darken-2">
            <h3 class="white--text font-weight-bold">
              Create and Edit your policy
            </h3>
          </v-card-title>
          <v-container>
            <v-row>
              <v-col cols="12" md="10">
                We are creating your policy and present it in a user-friendly
                way, then we give you the opportunity to edit a small amount of
                things in your policy.
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-timeline-item>
    </v-timeline>
  </v-container>
</template>
