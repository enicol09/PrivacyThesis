<template>
  <v-main>
    <v-container class="fill-height" fluid>
      <v-row align="center" justify="center" dense>
        <v-col cols="12" sm="8" md="4" lg="4">
          <section>
            <v-img
              src="@/assets/logo8.png"
              alt="Ui Policy"
              contain
              height="200"
            ></v-img>
            <h1 class="text-center mb-4 font-bold text-lg">
              Forgot Password? Please Enter
            </h1>
            <article class="md:w-1/3 p-5 border rounded bg-gray-100 mx-auto">
              <transition name="fade">
                <p
                  class="
                    bg-red-100
                    p-5
                    my-5
                    border border-red-200
                    rounded
                    text-red-500
                  "
                  v-if="error"
                >
                  {{ error }}
                </p>
              </transition>
              <form @submit.prevent>
                <div class="mb-4">
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
                </div>
                <div class="mb-4">
                  <button
                    type="submit"
                    @click="sendEmail"
                    class="rounded-0"
                    color="#000000"
                    x-large
                    block
                    dark
                  >
                    <transition name="fade" mode="out-in">
                      class="rounded-0" color="#000000"
                      <span v-if="!emailSending">Send</span>
                      <span v-else>Sending...</span>
                    </transition>
                  </button>
                </div>
              </form>
            </article>
          </section>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
import firebase from "firebase";
export default {
  data() {
    return {
      email: "",
      error: null,
      emailSending: false,

      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
      ],
    };
  },
  methods: {
    sendEmail() {
      if (!this.email) {
        this.error = "Please type in a valid email address.";
        return;
      }
      this.error = null;
      this.emailSending = true;
      firebase
        .auth()
        .sendPasswordResetEmail(this.email)
        .then(() => {
          this.emailSending = false;
        })
        .catch((error) => {
          this.emailSending = false;
          this.error = error.message;
        });
    },
  },
};
</script>