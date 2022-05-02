<template>
  <v-main>
    <v-container class="fill-height" fluid>
      <v-row align="center" justify="center" dense>
        <v-col cols="12" sm="8" md="4" lg="4">
          <v-card elevation="0">
            <v-img
              src="@/assets/logo8.png"
              alt="Ui Policy"
              contain
              height="200"
            ></v-img>
            <v-card-text>
              <v-form ref="emailInput" v-model="valid" lazy-validation>
                <v-text-field
                  label=" Enter your email"
                  name="email"
                  prepend-inner-icon="mdi-email"
                  type="email"
                  class="rounded-0"
                  outlined
                  v-model="email"
                  :rules="emailRules"
                ></v-text-field>
              </v-form>
              <v-form ref="passInput" v-model="valid1" lazy-validation>
                <v-text-field
                  label=" Enter your password"
                  name="password"
                  prepend-inner-icon="mdi-lock"
                  type="password"
                  class="rounded-0"
                  outlined
                  v-model="password"
                  :rules="passwordRules"
                ></v-text-field>
              </v-form>

              <div><details-saved :user="email" password="password" /></div>
              <v-btn
                class="rounded-0"
                color="#000000"
                x-large
                block
                dark
                @click="loginUser()"
                >Login
              </v-btn>
              <div><details-saved :user="email" :password="password" /></div>
              <v-card-actions class="text--secondary">
                <v-checkbox color="#000000" label="Remember me"></v-checkbox>
                <v-spacer></v-spacer>
                <!-- <router-link :to="{ name: 'SignUp' }">Sign Up</router-link> -->
                No account?
                <a href="#" class="pl-2" style="color: #000000">Sign Up</a>
              </v-card-actions>
            </v-card-text>
            <v-card-actions class="ml-6 mr-6 text-center">
              <p>
                By continuing, you agree to PrivacyUi's<a
                  href="#"
                  class="pl-2"
                  style="color: #000000"
                >
                  Policy</a
                >
                and
                <a href="#" class="pl-2" style="color: #000000">Terms of Use</a>
              </p>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <!--notification-component-->
    <transition
      name="custom-classes-transition"
      enter-active-class="animate__animated animate__fadeIn"
      leave-active-class="animate__animated animate__fadeOut"
      mode="out-in"
    >
      <appsnackbar
        :status="snackbar.status"
        :color="snackbar.color"
        :timeout="snackbar.timeout"
        :message="snackbar.message"
        :key="snackbarKey"
      />
    </transition>
  </v-main>
</template>


<script>
import firebase from "firebase/app";
import DetailsSaved from "@/components/DetailsSaved";

class SNACKBAR {
  constructor(status, color, message, timeout) {
    this.status = status;
    this.color = color;
    this.message = message;
    this.timeout = timeout;
  }
}

export default {
  name: "SignInView",

  components: {
    DetailsSaved,
  },

  data: () => ({
    snackbarKey: 0, // notifications
    snackbar: {}, //notifications
    email: "",
    password: "",
    pass: "",
    drawer: null,
    aboutpage: false,
    mainpage: false,
    contact: false,
    tutorial: false,
    valid: true, // validation for email
    valid1: true, // validation for pass
    login: false,
    items: [
      { title: "What to expect", icon: "mdi-information", to: "/about" },
      { title: "Contact Us", icon: "mdi-card-account-phone ", to: "/about" },
      { title: "Tutorial", icon: "mdi-help-box", to: "/about" },
    ],
    passwordRules: [(v) => !!v || "Password is required"],
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
  }),
  methods: {
    loginUser() {
      var t = this;
      var email = this.email.toLowerCase();
      if (this.$refs.passInput.validate()) {
        // console.log("i am here 3")
        this.$firebase.auth
          .signInWithEmailAndPassword(email, t.password)
          .then((data) => {
            this.$store.commit("setUser", data.user);
            console.log(
              "USER " + JSON.stringify(this.$store.getters.currUser, null, 2)
            );
            setTimeout(function () {
              t.$router.push("/menu").catch((error) => {
                // error was removed
                console.log(error.message);
                //  console.log("i am here 4")
              });
            }, 1500);
          })
          .catch((err) => {
            // ! login error
            t.snackbar = new SNACKBAR(true, "error", err.message, 5000); // update snack bar with error
            t.snackbarKey++;
          });
      } else {
        // ! validation error
        this.snackbar = new SNACKBAR(
          true,
          "error",
          "The password or the email you entered is not valid.",
          5000
        ); // update snack bar with error
        this.snackbarKey++;
      }
    },
  },
};
</script>

<style lang="css" scoped>
</style>