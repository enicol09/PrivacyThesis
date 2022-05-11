<template>
  <v-content>
    <v-container class="fill-height" fluid>
      <v-row align-content="center" justify="center">
        <v-col cols="12" sm="8" md="8">
          <v-row>
            <v-col cols="12" md="8">
              <v-card-text>
                <!-- <v-img
                  id="image"
                  :src="require('@/assets/logo8.png')"
                  max-width="100"
                  max-height="100"
                ></v-img> -->
                <h1 class="display-3 font-weight-bold light-blue--text">
                  Introducing
                </h1>
                <div class="text-left mt-4">
                  <h2 class="display-4 font-weight-bold">UIpolicy</h2>
                </div>

                <div class="text-left mt-4">
                  <h3 class="display-1 font-weight-bold light-blue--text">
                    A user-Friendly privacy policy generator.
                  </h3>
                </div>
                <div class="text-left mt-10">
                  <v-divider></v-divider>
                </div>

                <div class="text-left mt-10">
                  <v-col cols="12" justify-center>
                    <v-btn
                      rounded
                      block
                      color="light-grey"
                      @click="aboutpage = !aboutpage"
                      to="/about"
                      >Learn About Us
                      <v-icon right dark> mdi-send-circle </v-icon>
                    </v-btn>
                  </v-col>
                </div>
                <div class="text-left mt-5">
                  <v-col cols="12" justify-center>
                    <v-btn
                      rounded
                      block
                      color="light-grey"
                      @click="policy = !policy"
                      to="/privacy"
                      >Learn About Our Privacy Policy
                      <v-icon right dark> mdi-send-circle </v-icon>
                    </v-btn>
                  </v-col>
                </div>
              </v-card-text>
            </v-col>

            <v-col cols="12" md="4" mt="10" class="grey accent-3">
              <v-card-text class="white--text mt-12">
                <div class="text-left mt-10">
                  <h1 class="text-center display-1">Welcome!</h1>
                  <v-col cols="12" md="12"> <v-divider></v-divider></v-col>
                  <v-col cols="12" md="12">
                    <h2 class="text-center white--text">
                      Enter your personal details and start journey with us!
                    </h2>
                  </v-col>
                </div>

                <v-col cols="12" mt="10" md="12">
                  <v-btn
                    center
                    block
                    rounded
                    color="light-blue darken-2"
                    class="ma-2 white--text"
                    @click="signup = 'signup'"
                    to="/signup"
                  >
                    Sign up !
                    <v-icon dark></v-icon>
                  </v-btn>
                </v-col>

                <v-col cols="12" mt="10" md="12">
                  <v-divider></v-divider>
                </v-col>

                <v-col cols="12" md="12">
                  <h2 class="text-center white--text">
                    Already have an account? Sign In!
                  </h2>
                </v-col>

                <v-col cols="12" md="12">
                  <v-btn
                    center
                    block
                    rounded
                    color="light-blue darken-2"
                    class="ma-2 white--text"
                    @click="signin = 'signin'"
                    to="/signIn"
                  >
                    Sign in!
                    <v-icon dark></v-icon>
                  </v-btn>
                </v-col>
              </v-card-text>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </v-content>
</template>



<style lang="sass"scoped>
.h1
  font-size: 292px
</style>
 
<script>
import HelloWorld from "../components/HelloWorld";

export default {
  data: () => ({
    drawer: null,
    signup: false,
    signin: false,
    aboutpage: false,
    mainpage: false,
    contact: false,
    tutorial: false,
    policy: false,
  }),
  name: "Home",

  components: {
    HelloWorld,
  },
};
</script>
<style scoped>
</style>