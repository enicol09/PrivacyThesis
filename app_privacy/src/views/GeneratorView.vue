<template>
  <v-stepper v-model="e1">
    <!-- <div><details-saved :user="email" /></div> -->
    <v-stepper-header>
      <v-stepper-step :complete="e1 > 1" step="1">
        General Information Step
      </v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step :complete="e1 > 2" step="2">
        Personal Data Collection Step
      </v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step :complete="e1 > 2" step="3">
        Personal Data Collection</v-stepper-step
      >
      <v-divider></v-divider>

      <v-stepper-step step="4"> Contact Details</v-stepper-step>
    </v-stepper-header>

    <v-stepper-items>
      <v-stepper-content step="1">
        <v-card
          class="mb-10"
          color="grey lighten-4"
          align-content="center"
          height="675px"
        >
          <div></div>
          <v-row>
            <v-col class="d-flex" cols="12" sm="6">
              <v-flex align-self-center sm8 class="pa-2">
                <h2 class="pa-1 blue--text">General Information:</h2>
                <h3 class="pa-1">Enter your Country?</h3>
                <v-text-field
                  outlined
                  background-color="white"
                  class="pt-2"
                  label="Country"
                  v-model="policy.country"
                  hide-details="auto"
                  required
                  :rules="countryRules"
                ></v-text-field>
                <h3 class="pa-1">Where will your Privacy Policy be used?</h3>
                <v-select
                  v-model="policy.selectedItemswhere"
                  :items="items"
                  label="Privacy Policy"
                  outlined
                  requires
                  :rules="FieldRules"
                  background-color="white"
                >
                  ></v-select
                >

                <h3 class="pa-1">What is your app/website name ?</h3>
                <v-text-field
                  v-model="policy.webname"
                  type="webname"
                  label="Website name"
                  hint="example : UIpolicy"
                  persistent-hint
                  required
                  :rules="FieldRules"
                  background-color="white"
                  outlined
                ></v-text-field>

                <h3 class="pa-1">What is your website url ?</h3>
                <v-text-field
                  v-model="policy.weburl"
                  type="weburl"
                  label="Website Url"
                  hint="example : http:://www.UIpolicy.com/"
                  persistent-hint
                  background-color="white"
                  outlined
                  required
                  :rules="FieldRules"
                ></v-text-field>

                <h3 class="pa-1">What is your website's entity?</h3>
                <v-select
                  v-model="policy.selectionEntity"
                  :items="items_ent"
                  label="Entity"
                  required
                  :rules="FieldRules"
                  outlined
                  background-color="white"
                ></v-select>
              </v-flex>
            </v-col>
          </v-row>
        </v-card>
        <v-btn color="primary" @click="continue_step_one()">Continue</v-btn>

        <v-btn text to="/menu"> Cancel </v-btn>
      </v-stepper-content>

      <v-stepper-content step="2">
        <v-card
          class="mb-10"
          color="grey lighten-4"
          align-content="center"
          height="650px"
        >
          <div></div>
          <v-row>
            <v-col class="d-flex" cols="12" sm="6" background-color="white">
              <v-flex align-self-center sm8 class="pa-2">
                <h2 class="pa-1 blue--text">What data you collect:</h2>
                <h3 class="pa-1">
                  What kind of personal information do you collect from the
                  users?
                </h3>

                <v-checkbox
                  v-model="policy.first_name"
                  label="First Name"
                  v-on:click="policy.first_name = true"
                  v-bind:false-value="0"
                  v-bind:true-value="1"
                  color="blue"
                  value="First Name"
                  hide-details
                ></v-checkbox>
                <v-checkbox
                  v-model="policy.last_name"
                  v-on:click="policy.last_name = true"
                  label="Last Name"
                  color="blue"
                  value="Last Name"
                  hide-details
                ></v-checkbox>
                <v-checkbox
                  v-model="policy.email_c"
                  v-on:click="policy.email_c = true"
                  label="Email"
                  color="blue"
                  value="Email Address"
                  hide-details
                ></v-checkbox>
                <v-checkbox
                  v-model="policy.phone"
                  v-on:click="policy.phone = true"
                  label="Phone"
                  color="blue"
                  value="Phone Number"
                  hide-details
                ></v-checkbox>
                <v-checkbox
                  v-model="policy.address"
                  v-on:click="policy.addresss = true"
                  label="Address"
                  color="blue"
                  value="Address"
                  hide-details
                ></v-checkbox>
                <v-checkbox
                  v-model="policy.zip"
                  v-on:click="policy.zip = true"
                  label="ZIP/Postal code"
                  color="blue"
                  value="ZIP/Postal code"
                  hide-details
                ></v-checkbox>
                <v-checkbox
                  v-model="policy.media"
                  v-on:click="policy.media = true"
                  label="Social Media Profile ( Facebook, Instagram, Sign In page)"
                  color="blue"
                  value="Social Media Profile ( Facebook, Instagram, Sign In page)"
                  hide-details
                ></v-checkbox>
                <v-checkbox
                  v-model="policy.other"
                  v-on:click="policy.other = true"
                  label="Other"
                  color="blue"
                  value="Other"
                  hide-details
                ></v-checkbox>

                <h3 class="pt-3 pa-1">
                  Do you user any tracking-analytics tools, such as Google
                  Analytics?
                </h3>
                <v-checkbox
                  v-model="policy.yes_analytics"
                  v-on:click="policy.yes_analytics = true"
                  label="Yes, we use analytics and tracking tools"
                  color="blue"
                  value="Other"
                  hide-details
                ></v-checkbox>
                <v-checkbox
                  v-model="policy.no_analytics"
                  v-on:click="policy.no_analytics = true"
                  label="No, we are not use analytics and tracking tools"
                  color="blue"
                  value="Other"
                  hide-details
                ></v-checkbox>
              </v-flex>
            </v-col>
          </v-row>
        </v-card>
        <v-btn color="primary" @click="e1 = 3"> Continue </v-btn>

        <v-btn text> Cancel </v-btn>
      </v-stepper-content>

      <v-stepper-content step="3">
        <v-card class="mb-12" color="grey lighten-4" height="1050px">
          <h2 class="pa-1 blue--text">How you use your users' data:</h2>
          <h3 class="pt-3 pa-1">Do you show relating ads?</h3>
          <v-checkbox
            v-model="policy.yes_ads"
            v-on:click="policy.yes_ads = true"
            label="Yes, we do"
            color="blue"
            value="Other"
            hide-details
          ></v-checkbox>
          <v-checkbox
            v-model="policy.no_ads"
            v-on:click="policy.no_ads = true"
            label="No, we are not"
            color="blue"
            value="Other"
            hide-details
          ></v-checkbox>

          <h3 class="pt-3 pa-1">Do you send any emails to the users?</h3>
          <v-checkbox
            v-model="policy.yes_email"
            v-on:click="policy.yes_email = true"
            label="Yes, we do sent emails"
            color="blue"
            value="Other"
            hide-details
          ></v-checkbox>
          <v-checkbox
            v-model="policy.no_emails"
            v-on:click="policy.no_emails = true"
            label="No, we are not"
            color="blue"
            value="Other"
            hide-details
          ></v-checkbox>

          <h3 class="pt-3 pa-1">
            Do you use user's personal data for commercial?
          </h3>
          <v-checkbox
            v-model="policy.yes_comm"
            v-on:click="policy.yes_comm = true"
            label="Yes, we do use them"
            color="blue"
            value="Other"
            hide-details
          ></v-checkbox>
          <v-checkbox
            v-model="policy.no_comm"
            v-on:click="policy.no_comm = true"
            label="No, we are not"
            color="blue"
            value="Other"
            hide-details
          ></v-checkbox>

          <h3 class="pt-3 pa-1">Can users pay for any products or services?</h3>
          <v-checkbox
            v-model="policy.yes_payp"
            v-on:click="policy.yes_payp = true"
            label="Yes, they can"
            color="blue"
            value="Other"
            hide-details
          ></v-checkbox>
          <v-checkbox
            v-model="policy.no_payp"
            v-on:click="policy.no_payp = true"
            label="No, they can not"
            color="blue"
            value="Other"
            hide-details
          ></v-checkbox>

          <h3 class="pt-3 pa-1">How do you store user's data?</h3>
          <v-checkbox
            v-model="policy.st_database"
            v-on:click="policy.st_database = true"
            label="Database"
            color="blue"
            value="db"
            hide-details
          ></v-checkbox>
          <v-checkbox
            v-model="policy.st_copy"
            v-on:click="policy.st_copy = true"
            label="Copy Files "
            color="blue"
            value="Other"
            hide-details
          ></v-checkbox>
          <v-checkbox
            v-model="policy.st_other"
            v-on:click="policy.st_other = true"
            label="Other "
            color="blue"
            value="Other"
            hide-details
          ></v-checkbox>

          <h3 class="pt-3 pa-1">Do you use remarketing services?</h3>
          <v-checkbox
            v-model="policy.yes_remarketing"
            v-on:click="policy.yes_remarketing = true"
            label="Yes, we do"
            color="blue"
            value="Other"
            hide-details
          ></v-checkbox>
          <v-checkbox
            v-model="policy.no_remarketing"
            v-on:click="policy.no_remarketing = true"
            label="No, we do not "
            color="blue"
            value="Other"
            hide-details
          ></v-checkbox>
        </v-card>

        <v-btn color="primary" @click="e1 = 4"> Continue </v-btn>

        <v-btn text> Cancel </v-btn>
      </v-stepper-content>

      <v-stepper-content step="4">
        <v-card class="mb-12" color="grey lighten-4" height="550px">
          <h2 class="pa-1 blue--text">Contact Details:</h2>
          <h3 class="pt-3 pa-1">How a user can contact you?</h3>
          <v-checkbox
            v-model="policy.th_email"
            v-on:click="policy.th_email = true"
            label="By email"
            color="blue"
            value="db"
            hide-details
          ></v-checkbox>
          <v-checkbox
            v-model="policy.th_phone"
            label="By phone"
            color="blue"
            v-on:click="policy.th_phone = true"
            value="Other"
            hide-details
          ></v-checkbox>
          <v-checkbox
            v-model="policy.th_mail"
            label="By post mail"
            v-on:click="policy.th_mail = true"
            color="blue"
            value="Other"
            hide-details
          ></v-checkbox>
          <v-checkbox
            v-model="policy.th_web"
            v-on:click="policy.th_web = true"
            label="Through the website"
            color="blue"
            value="Other"
            hide-details
          ></v-checkbox>
        </v-card>
        <v-btn color="primary" @click="backtomenu()"> Continue </v-btn>

        <v-btn text @click="push_to_db()"> Save </v-btn>
      </v-stepper-content>
    </v-stepper-items>
  </v-stepper>
</template>



<script>
import DetailsSaved from "@/components/DetailsSaved.vue";
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
  },
  data() {
    return {
      policy: {
        th_web: "",
        th_email: "",
        th_mail: "",
        th_phone: "",
        first_name: "",
        last_name: "",
        zip: "",
        media: "",
        address: "",
        email_c: "",
        country: "",
        weburl: "",
        webname: "",
        phone: "",
        other: "",
        yes_remarketing: "",
        no_remarketing: "",
        st_other: "",
        st_copy: "",
        yes_payp: "",
        no_payp: "",
        st_database: "",
        yes_comm: "",
        no_comm: "",
        yes_email: "",
        no_emails: "",
        yes_ads: "",
        no_ads: "",
        yes_analytics: "",
        no_analytics: "",
        selectionEntity: "",
        previousSelectionEntity: "",
        selectedItemswhere: "",
        previousSelectionwhere: "",
      },
      e1: 1,
      snackbarKey: 0, // notifications
      snackbar: {},
      sharedItems: DetailsSaved.data,
      items: ["Policy for a website", "Policy for mobile app"],
      items_ent: [
        "Corporation",
        "Non-Profit Business",
        "Individual Vlog",
        "Social Media Site",
        "Other",
      ],

      //*VALIDATION RULES*//
      countryRules: [(v) => !!v || "Country is required"],
      FieldRules: [(v) => !!v || "This field is required"],
    };
  },

  methods: {
    backtomenu() {
      var t = this;
      t.$router.push("/menu").catch((error) => {
        console.log(error.message);
      });
    },
    push_to_db() {
      var t = this;
      var user_id = JSON.stringify(this.$store.getters.currUser.uid);
      t.$firebase.db
        .collection("policies")
        .doc(user_id)
        .set(this.policy)
        .then((Result) => {
          console.log("result: " + Result);
        })
        .catch((err) => {
          console.log(err);
        });

      // * redirect user to homepage

      t.$router.push("/menu").catch((error) => {
        console.log(error.message);
      });
    },

    continue_step_one() {
      if (
        this.policy.weburl == null ||
        this.policy.country == "" ||
        this.policy.webname == "" ||
        this.policy.previousSelectionwhere == null ||
        this.policy.previousSelectionEntity == null
      ) {
        this.snackbar = new SNACKBAR(
          true,
          "error",
          "Information is missing",
          5000
        );
        this.snackbarKey++;
      } else {
        this.e1 = 2;
      }
    },
  },
};
</script>