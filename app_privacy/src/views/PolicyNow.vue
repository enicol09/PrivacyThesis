<template>
  <v-main>
    <v-dialog
      style="z-index: 3000 !important"
      v-model="deleteDialog"
      persistent
      max-width="300"
    >
      <v-card class="gold">
        <v-card-title class="background black--text">
          Delete Account
        </v-card-title>
        <v-card-text class="mt-6">
          <p class="subtitle1 black--text">
            Are you sure you want to delete your account?
          </p></v-card-text
        >
        <v-card-actions class="">
          <v-spacer></v-spacer>
          <v-btn class="secondary" @click="noAction()"> No</v-btn>
          <v-btn class="secondary" @click="yesAction()">Yes </v-btn>
        </v-card-actions>
        <div v-if="itsyes === 'yes'">
          <deleteaccount :accountid="user" />
        </div>
      </v-card>
    </v-dialog>
    <v-container class="fill-height" fluid>
      <v-row align="center" justify="center" dense>
        <v-card width="1200" color="light-grey">
          <v-img height="200px" src="@/assets/blue_b.jpg">
            <v-app-bar class="mt-9 md-4" flat color="rgba(0, 0, 0, 0)">
              <v-avatar size="100">
                <img alt="user" src="@/assets/account.png" />
              </v-avatar>

              <v-spacer></v-spacer>
            </v-app-bar>

            <v-card-title class="white--black mt-3">
              <p class="ml-3 display-1">User: {{ email }}</p>
            </v-card-title>
          </v-img>

          <v-card-text>
            <div class="font-weight-bold ml-3 black--text mb-2">Details</div>

            <v-list two-line>
              <v-list-item href="https://www.google.com/gmail/about/">
                <v-list-item-icon>
                  <v-icon color="light-blue darken-2"> mdi-email </v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                  <v-list-item-title>{{ email }}</v-list-item-title>
                  <v-list-item-subtitle>Email</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>

              <v-divider inset></v-divider>

              <v-list-item>
                <v-list-item-icon>
                  <v-icon color="light-blue darken-2"> mdi-file-lock</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                  <v-list-item-title>Password</v-list-item-title>
                  <v-list-item-subtitle
                    ><router-link
                      :to="{ name: 'changePassword' }"
                      class="hover:underline"
                      >Change password?</router-link
                    ></v-list-item-subtitle
                  >
                </v-list-item-content>
              </v-list-item>

              <v-list-item>
                <v-list-item-icon>
                  <v-icon color="light-blue darken-2"> mdi-delete</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                  <v-list-item-title>Delete Account</v-list-item-title>
                  <v-list-item-subtitle>
                    <v-btn
                      text
                      text-lowercase
                      color="primary"
                      @click="deleteDialog = true"
                    >
                      Do you want to delete the account?
                    </v-btn>
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>

              <v-list-item>
                <v-list-item-icon>
                  <v-icon color="light-blue darken-2"> mdi-account</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                  <v-list-item-title>Logout</v-list-item-title>
                  <v-list-item-subtitle>
                    <v-btn
                      text
                      text-lowercase
                      color="primary"
                      @click="logout()"
                    >
                      Logout
                    </v-btn>
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-card-text>
        </v-card>
      </v-row>
    </v-container>
  </v-main>
</template>

<style>
.bg-img {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center top;
  border-radius: 2px;
}
</style>




<script>
import DetailsSaved from "@/components/DetailsSaved.vue";
import deleteaccount from "@/components/deleteaccount.vue";
import AppSnackbarVue from "@/components/AppSnackbar.vue";

class SNACKBAR {
  constructor(status, color, message, timeout) {
    this.status = status;
    this.color = color;
    this.message = message;
    this.timeout = timeout;
  }
}
export default {
  components: {
    DetailsSaved,
    deleteaccount,
  },
  data() {
    return {
      user: null,
      email: null,
      deleteDialog: false,
      itsyes: "",
    };
  },

  // methodos p en na elegxi ean to state ine null -> simple generator -> create
  // ean oi ean to ibject den einai numm ->this.policy =  this.4store.editUPdate
  methods: {
    noAction() {
      this.deleteDialog = false;
    },
    async yesAction() {
      this.deleteDialog = false;
      this.itsyes = "yes";
      console.log(this.itsyes);
    },

    logout() {
      this.$store.commit("setUser", null);
      this.$store.commit("setEditUpdatePolicy", null);
      this.$router.push("/").catch((error) => {
        // error was removed
        console.log(error.message);
        //  console.log("i am here 4")
      });
    },
  },

  created() {
    this.user = this.$store.getters.currUser.uid;
    console.log(this.user);
    this.email = this.$store.getters.currUser.email;
    console.log(this.email);
  },
};
</script>
