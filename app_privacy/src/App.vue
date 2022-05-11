<template>
  <v-app id="inspire">
    <v-app-bar app color="light-grey 4">
      <v-avatar :tile="true">
        <v-img
          :src="require('@/assets/elia.png')"
          alt="logo"
          max-height="150px"
          max-width="150px"
        ></v-img>
      </v-avatar>
      <!-- <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon> -->
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
      <v-toolbar-title> UIpolicy </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        text
        rounded
        color="light-blue darken-2"
        class="ma-2 white--text"
        @click="mainpage = !mainpage"
        to="/"
      >
        MainPage
        <v-icon right dark> mdi-information </v-icon>
      </v-btn>

      <v-btn
        text
        rounded
        color="light-blue darken-2"
        class="ma-2 white--text"
        @click="aboutpage = !aboutpage"
        to="/about"
      >
        What we do
        <v-icon right dark> mdi-information </v-icon>
      </v-btn>

      <v-btn
        text
        rounded
        color="light-blue darken-2"
        class="ma-2 white--text"
        @click="contact = !contact"
        to="/contact"
      >
        Contact us
        <v-icon right dark> mdi-card-account-phone </v-icon>
      </v-btn>

      <v-btn
        text
        rounded
        color="light-blue darken-2"
        class="ma-2 white--text"
        @click="tutorial = !tutorial"
        to="/tutorial"
      >
        Tutorial
        <v-icon right dark> mdi-message-video </v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="blue--text text--accent-4"
        >
          <v-list-item @click="mainpage = !mainpage" to="/">
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>

          <v-list-item @click="logout()" to="/">
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Log out</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    drawer: null,
    login: false,
    aboutpage: false,
    mainpage: false,
    contact: false,
    tutorial: false,
    items: [
      { title: "What to expect", icon: "mdi-information", to: "/about" },
      { title: "Contact Us", icon: "mdi-card-account-phone ", to: "/about" },
      { title: "Tutorial", icon: "mdi-help-box", to: "/about" },
    ],
  }),
  methods: {
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
};
</script>