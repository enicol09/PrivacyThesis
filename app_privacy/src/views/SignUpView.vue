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
              <h3 class="text-center body2 p-2">
                Please use the form below to register as a user.
              </h3>
              <!-- start of USER-INPUT -->

              <v-window v-model="step">
                <!--GENERAL-DETAILS-WINDOW-->
                <v-window-item :value="1">
                  <v-form ref="registerUser" v-model="valid" lazy-validation>
                    <v-text-field
                      outlined
                      prepend-inner-icon="mdi-email"
                      class="pt-4"
                      v-model.trim="user.email"
                      label="Enter your email"
                      hide-details="auto"
                      :rules="emailRules"
                    ></v-text-field>
                    <v-text-field
                      outlined
                      class="pt-2"
                      v-model="user.fullName"
                      label="Full Name"
                      hide-details="auto"
                      :rules="nameRules"
                      required
                    ></v-text-field>

                    <div class="d-flex mt-3 pr-4">
                      <v-checkbox
                        color="blue"
                        border="black"
                        v-model="user.privacyPolicyConsent"
                        :rules="[(v) => !!v]"
                        required
                        class="d-flex pr-1"
                        style="
                          position: relative !important;
                          bottom: 20 !important;
                        "
                      >
                      </v-checkbox>

                      <div class="text-center">
                        I have completed this form as accurately as possible and
                        accept the
                        <span
                          style="cursor: pointer !important"
                          v-on:click="privacyDialog = true"
                          class="font-weight-bold secondary--text"
                        >
                          Terms and Conditions
                        </span>
                      </div>
                    </div>
                  </v-form>
                  <!--NEXT-BUTTON-->
                  <div class="text-right">
                    <v-btn
                      dark
                      @click="next"
                      :loading="loading1"
                      :disabled="loading1"
                      large
                      color="#000000"
                      class="rounded-0 mt-3"
                      >Next</v-btn
                    >
                  </div>
                </v-window-item>

                <!--PASSWORD-WINDOW-->
                <v-window-item :value="2">
                  <v-form ref="userPassword" v-model="valid1" lazy-validation>
                    <v-text-field
                      v-model.trim="password"
                      outlined
                      class="pt-4"
                      prepend-inner-icon="mdi-lock"
                      hide-details="auto"
                      label="Password"
                      :append-icon="show ? 'icons8-eye' : 'icons8-invisible'"
                      :type="show ? 'text' : 'password'"
                      @click:append="show = !show"
                      :rules="passwordRules"
                      required
                    ></v-text-field>

                    <v-text-field
                      v-model.trim="confirmPassword"
                      outlined
                      class="pt-2 pb-1"
                      hide-details="auto"
                      label="Confirm Password"
                      :append-icon="show1 ? 'icons8-eye' : 'icons8-invisible'"
                      :type="show1 ? 'text' : 'password'"
                      @click:append="show1 = !show1"
                      :rules="[confirmRules, passwordConfirmationRule]"
                      required
                    ></v-text-field>
                  </v-form>
                  <!--Register button -->
                  <v-row class="px-4 mb-4">
                    <v-btn @click="step--" class="mt-3 secondary">Back</v-btn>
                    <v-spacer></v-spacer>
                    <v-btn
                      dark
                      color="#000000"
                      @click="register"
                      :loading="loading"
                      :disabled="loading"
                      class="rounded-0 mt-3"
                      >Register</v-btn
                    >
                  </v-row>
                </v-window-item>
              </v-window>

              <!-- end of USER-INPUT -->

              <v-dialog
                style="z-index: 3000 !important"
                v-model="privacyDialog"
                fullscreen
                hide-overlay
                transition="dialog-bottom-transition"
              >
              </v-dialog>
            </v-card-text>
          </v-card> </v-col
      ></v-row>
    </v-container>
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
import moment from "moment";
class SNACKBAR {
  constructor(status, color, message, timeout) {
    this.status = status;
    this.color = color;
    this.message = message;
    this.timeout = timeout;
  }
}

export default {
  name: "SignUpView",
  components: {},
  data() {
    return {
      snackbarKey: 0, // notifications
      snackbar: {}, //notifications
      step: 1,
      valid: true,
      valid1: true,
      show: false,
      show1: false,

      // User Form which is gonna exist in the db
      user: {
        userID: "",
        userLevel: 10,
        userType: "standard",
        fullName: "",
        contactNumber: "",
        email: "",
        company: "",
        jobTitle: "",
        privacyPolicyConsent: false,
        accountCreatedAt: "",
      },

      password: "", // password input
      confirmPassword: "", // check password
      loading: false,
      loader1: null,
      loading1: false,
      privacyDialog: false,
      lookupValues: [],

      // * VALIDATIONS RULES
      nameRules: [(v) => !!v || "Full name is required"],
      confirmRules: [(v) => !!v || "Confirm password required"],
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
      ],
      passwordRules: [(v) => !!v || "Password is required"],
      telephoneNumberRules: [(v) => !!v || "Telephone Number is required"],
      integration: [],
      registerErrorMessage: null,
    };
  },
  watch: {
    loader1() {
      const l = this.loader1;
      this[l] = !this[l];

      setTimeout(() => (this[l] = false), 3000);

      this.loader1 = null;
    },
  },
  computed: {
    // * Checks if the password matches the confirm password
    passwordConfirmationRule() {
      return () =>
        this.password === this.confirmPassword || "Password must match";
    },
  },
  methods: {
    next() {
      if (this.$refs.registerUser.validate()) {
        this.step++; // * move to the next step
      } else {
        // // console.log("not valid");
        // ! did not pass validation
        this.snackbar = new SNACKBAR(
          true,
          "error",
          "Fill out all the fields correctly in order to proceed.",
          10000
        ); // update snack bar with error
        this.snackbarKey++;
      }
    },
    register() {
      var t = this;
      setTimeout(function () {
        // * create user
        t.$firebase.auth
          .createUserWithEmailAndPassword(t.user.email, t.password)
          .then((user) => {
            t.user.userID = user.user.uid; // * assign firebase auth user id to firebase user in collection
            t.user.accountCreatedAt = moment().toISOString();

            // * add to the users collection
            t.$firebase.db
              .collection("users")
              .doc(user.user.uid)
              .set(t.user)
              .then((Result) => {
                console.log("result: " + Result);
              })
              .catch((err) => {
                t.snackbar = new SNACKBAR(true, "error", err, 5000);
              });
            var currUser = t.$firebase.auth.currentUser;
            currUser
              .sendEmailVerification()
              .then(function () {})
              .catch(function (error) {
                // ! verification email error
                t.snackbar = new SNACKBAR(true, "error", err, 5000);
              });
            // * redirect user to homepage

            t.$router.push("/signIn").catch((error) => {
              t.snackbar = new SNACKBAR(true, "error", err, 5000);
            });
          })
          .catch((err) => {
            // ! firebase registering error
            t.registerErrorMessage = err;
            t.snackbar = new SNACKBAR(true, "error", err, 5000); // update snack bar with error
            t.snackbarKey++;
          });
      }, 1000);
    },
  },
};
</script>

<style scoped>
.v-input--selection-controls {
  margin-top: 0px;
  padding-top: 0px;
}
</style>

