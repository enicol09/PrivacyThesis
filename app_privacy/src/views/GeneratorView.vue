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

        <v-btn text @click="remove()"> Cancel </v-btn>
      </v-stepper-content>

      <v-stepper-content step="2">
        <v-card
          class="mb-10"
          color="grey lighten-4"
          align-content="center"
          height="850px"
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
                  class="d-flex pr-1"
                  color="blue"
                  value="First Name"
                  hide-details
                ></v-checkbox>
                <v-checkbox
                  v-model="policy.last_name"
                  label="Last Name"
                  color="blue"
                  value="Last Name"
                  hide-details
                ></v-checkbox>
                <v-checkbox
                  v-model="policy.email_c"
                  label="Email"
                  color="blue"
                  value="Email Address"
                  hide-details
                ></v-checkbox>

                <v-checkbox
                  v-model="policy.phone"
                  label="Phone"
                  color="blue"
                  value="Phone Number"
                  hide-details
                ></v-checkbox>
                <v-checkbox
                  v-model="policy.address"
                  label="Address"
                  color="blue"
                  value="Address"
                  hide-details
                ></v-checkbox>
                <v-checkbox
                  v-model="policy.zip"
                  label="ZIP/Postal code"
                  color="blue"
                  value="ZIP/Postal code"
                  hide-details
                ></v-checkbox>
                <v-checkbox
                  v-model="policy.media"
                  label="Social Media Profile ( Facebook, Instagram, Sign In page)"
                  color="blue"
                  value="Social Media Profile ( Facebook, Instagram, Sign In page)"
                  hide-details
                ></v-checkbox>
                <v-checkbox
                  v-model="policy.other"
                  label="Other"
                  color="blue"
                  value="Other"
                  hide-details
                ></v-checkbox>

                <div v-if="policy.other">
                  <h3 class="pt-3 pa-1">Please specify other</h3>
                  <v-text-field
                    v-model="policy.otherspec"
                    type="Other data"
                    label="Other data"
                    persistent-hint
                    background-color="white"
                    outlined
                    required
                    :rules="FieldRules"
                  ></v-text-field>
                </div>

                <h3 class="pt-3 pa-1">
                  Do you user any tracking-analytics tools, such as Google
                  Analytics?
                </h3>
                <v-checkbox
                  v-model="policy.yes_analytics"
                  label="Yes, we use analytics and tracking tools"
                  color="blue"
                  value="Other"
                  hide-details
                ></v-checkbox>
                <v-checkbox
                  v-model="policy.no_analytics"
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

        <v-btn text @click="remove()"> Cancel </v-btn>
      </v-stepper-content>

      <v-stepper-content step="3">
        <v-card class="mb-12" color="grey lighten-4" height="1500px">
          <v-row>
            <v-col class="d-flex" cols="12" sm="6">
              <v-flex align-self-center sm8 class="pa-2">
                <h2 class="pa-1 blue--text">How you use your users' data:</h2>
                <h3 class="pt-3 pa-1">Do you show relating ads?</h3>
                <v-checkbox
                  v-model="policy.yes_ads"
                  label="Yes, we do"
                  color="blue"
                  value="Other"
                  hide-details
                ></v-checkbox>
                <v-checkbox
                  v-model="policy.no_ads"
                  label="No, we are not"
                  color="blue"
                  value="Other"
                  hide-details
                ></v-checkbox>

                <h3 class="pt-3 pa-1">Do you send any emails to the users?</h3>
                <v-checkbox
                  v-model="policy.yes_email"
                  label="Yes, we do sent emails"
                  color="blue"
                  value="Other"
                  hide-details
                ></v-checkbox>
                <v-checkbox
                  v-model="policy.no_emails"
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
                  label="Yes, we do use them"
                  color="blue"
                  value="Other"
                  hide-details
                ></v-checkbox>
                <v-checkbox
                  v-model="policy.no_comm"
                  label="No, we are not"
                  color="blue"
                  value="Other"
                  hide-details
                ></v-checkbox>

                <h3 class="pt-3 pa-1">
                  Can users pay for any products or services?
                </h3>
                <v-checkbox
                  v-model="policy.yes_payp"
                  label="Yes, they can"
                  color="blue"
                  value="Other"
                  hide-details
                ></v-checkbox>
                <v-checkbox
                  v-model="policy.no_payp"
                  label="No, they can not"
                  color="blue"
                  value="Other"
                  hide-details
                ></v-checkbox>

                <h3 class="pt-3 pa-1">How do you store user's data?</h3>
                <v-checkbox
                  v-model="policy.st_database"
                  label="Database"
                  color="blue"
                  value="db"
                  hide-details
                ></v-checkbox>
                <v-checkbox
                  v-model="policy.st_copy"
                  label="Copy Files "
                  color="blue"
                  value="Other"
                  hide-details
                ></v-checkbox>
                <v-checkbox
                  v-model="policy.st_other"
                  label="Other "
                  color="blue"
                  value="Other"
                  hide-details
                ></v-checkbox>

                <h3 class="pt-3 pa-1">Do you use remarketing services?</h3>
                <v-checkbox
                  v-model="policy.yes_remarketing"
                  label="Yes, we do"
                  color="blue"
                  value="Other"
                  hide-details
                ></v-checkbox>
                <v-checkbox
                  v-model="policy.no_remarketing"
                  label="No, we do not "
                  color="blue"
                  value="Other"
                  hide-details
                ></v-checkbox>

                <h3 class="pt-3 pa-1">Do you use cookies?</h3>
                <v-checkbox
                  v-model="policy.cookies"
                  label="Yes, we do use cookies"
                  color="blue"
                  value="Other"
                  hide-details
                ></v-checkbox>
                <div v-if="policy.cookies">
                  <h3 class="pt-3 pa-1">Please specify the reasons:</h3>
                  <v-text-field
                    v-model="policy.cookiereason1"
                    type="Policy cookie first reason"
                    label="Policy cookie first reason"
                    persistent-hint
                    background-color="white"
                    outlined
                    required
                    :rules="FieldRules"
                  ></v-text-field>
                  <v-text-field
                    v-model="policy.cookiereason2"
                    type="Policy cookie second reason"
                    label="Policy cookie second reason"
                    persistent-hint
                    background-color="white"
                    outlined
                    required
                  ></v-text-field>
                  <v-text-field
                    v-model="policy.cookiereason3"
                    type="Policy cookie third reason"
                    label="Policy cookie third reason"
                    persistent-hint
                    background-color="white"
                    outlined
                    required
                  ></v-text-field>
                </div>
              </v-flex>
            </v-col>
          </v-row>
        </v-card>

        <v-btn color="primary" @click="e1 = 4"> Continue </v-btn>

        <v-btn @click="remove()" text> Cancel </v-btn>
      </v-stepper-content>

      <v-stepper-content step="4">
        <v-card class="mb-12" color="grey lighten-4" height="800px">
          <h2 class="pa-1 blue--text">Contact Details:</h2>
          <h3 class="pt-3 pa-1">How a user can contact you?</h3>
          <v-checkbox
            v-model="policy.th_email"
            label="By email"
            color="blue"
            value="db"
            hide-details
          ></v-checkbox>
          <div v-if="policy.th_email">
            <h5 class="pt-3 pa-1">Please specify the email</h5>
            <v-text-field
              v-model="policy.th_email_d"
              type="Email"
              label="Email"
              persistent-hint
              background-color="white"
              outlined
              required
              :rules="FieldRules"
            ></v-text-field>
          </div>
          <v-checkbox
            v-model="policy.th_phone"
            label="By phone"
            color="blue"
            hide-details
          ></v-checkbox>
          <div v-if="policy.th_phone">
            <h5 class="pt-3 pa-1">Please specify the phone</h5>
            <v-text-field
              v-model="policy.th_phone_d"
              type="Phone"
              label="Phone"
              persistent-hint
              background-color="white"
              outlined
              required
              :rules="FieldRules"
            ></v-text-field>
          </div>
          <v-checkbox
            v-model="policy.th_mail"
            label="By post mail"
            color="blue"
            value="Other"
            hide-details
          ></v-checkbox>
          <div v-if="policy.th_mail">
            <h5 class="pt-3 pa-1">Please specify the post address</h5>
            <v-text-field
              v-model="policy.th_mail_d"
              type="mail"
              label="mail"
              persistent-hint
              background-color="white"
              outlined
              required
              :rules="FieldRules"
            ></v-text-field>
          </div>
          <v-checkbox
            v-model="policy.th_web"
            label="Through the website"
            color="blue"
            value="Other"
            hide-details
          ></v-checkbox>
          <v-checkbox
            v-model="policy.th_other"
            label="Other"
            color="blue"
            value="Other"
            hide-details
          ></v-checkbox>
          <div v-if="policy.th_other">
            <h5 class="pt-3 pa-1">Please specify other</h5>
            <v-text-field
              v-model="policy.th_other_d"
              type="other"
              label="other"
              persistent-hint
              background-color="white"
              outlined
              required
              :rules="FieldRules"
            ></v-text-field>
          </div>
        </v-card>

        <v-dialog v-model="dialog" persistent max-width="600px">
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="primary" v-bind="attrs" v-on="on"> Save </v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="text-h5">Name your Policy</span>
            </v-card-title>
            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12" sm="6" md="4">
                    Give Policy Name:
                    <v-text-field
                      prepend-icon="mdi-tooltip-edit"
                      label="Policy Name"
                      required
                      v-model="policy.policyname"
                    ></v-text-field>

                    Give Current Date:
                    <v-menu
                      ref="menu"
                      v-model="menu"
                      :close-on-content-click="false"
                      :return-value.sync="policy.date"
                      transition="scale-transition"
                      offset-y
                      min-width="auto"
                    >
                      <template v-slot:activator="{ on, attrs }">
                        <v-text-field
                          v-model="policy.date"
                          label="Picker in menu"
                          prepend-icon="mdi-calendar"
                          readonly
                          v-bind="attrs"
                          v-on="on"
                        ></v-text-field>
                      </template>
                      <v-date-picker v-model="policy.date" no-title scrollable>
                        <v-spacer></v-spacer>
                        <v-btn text color="primary" @click="menu = false">
                          Cancel
                        </v-btn>
                        <v-btn
                          text
                          color="primary"
                          @click="$refs.menu.save(policy.date)"
                        >
                          OK
                        </v-btn>
                      </v-date-picker>
                    </v-menu>
                  </v-col>
                </v-row></v-container
              >
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="dialog = false">
                Close
              </v-btn>
              <v-btn color="blue darken-1" text @click="push_to_db()">
                Save
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-btn color="primary" text @click="backtomenu()"> Cancel </v-btn>
        <!-- <v-btn text @click="push_to_db()"> Save </v-btn> -->
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
        th_email_d: "",
        th_mail: "",
        th_mail_d: "",
        th_phone: "",
        th_phone_d: "",
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
        cookiereason1: "",
        cookiereason2: "",
        cookiereason3: "",
        no_analytics: "",
        selectionEntity: "",
        previousSelectionEntity: "",
        selectedItemswhere: "",
        previousSelectionwhere: "",
        user: "",
        th_other: "",
        th_other_d: "",
        policyname: "",
        cookies: "",
        otherspec: "",
        date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
          .toISOString()
          .substr(0, 10),
      },

      menu: false,
      modal: false,
      menu2: false,
      dialog: false,
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

  // methodos p en na elegxi ean to state ine null -> simple generator -> create
  // ean oi ean to ibject den einai numm ->this.policy =  this.4store.editUPdate
  methods: {
    setnull() {
      console.log("elias");
      this.policy.th_other = "";
      this.policy.th_other_d = "";
      this.policy.cookiereason1 = "";
      this.policy.cookiereason2 = "";
      this.policy.cookiereason3 = "";
      this.policy.cookies = "";
      this.policy.id = "";
      this.policy.th_web = "";
      this.policy.th_email = "";
      this.policy.th_email_d = "";
      this.policy.th_mail = "";
      this.policy.th_mail_d = "";
      this.policy.th_phone = "";
      this.policy.th_phone_d = "";
      this.policy.first_name = "";
      this.policy.last_name = "";
      this.policy.zip = "";
      this.policy.media = "";
      this.policy.address = "";
      this.policy.email_c = "";
      this.policy.country = "";
      this.policy.weburl = "";
      this.policy.webname = "";
      this.policy.phone = "";
      this.policy.other = "";
      this.policy.yes_remarketing = "";
      this.policy.no_remarketing = "";
      this.policy.st_other = "";
      this.policy.st_copy = "";
      this.policy.yes_payp = "";
      this.policy.no_payp = "";
      this.policy.st_database = "";
      this.policy.yes_comm = "";
      this.policy.no_comm = "";
      this.policy.yes_email = "";
      this.policy.no_emails = "";
      this.policy.yes_ads = "";
      this.policy.no_ads = "";
      this.policy.yes_analytics = "";
      this.policy.no_analytics = "";
      this.policy.selectionEntity = "";
      this.policy.previousSelectionEntity = "";
      this.policy.selectedItemswhere = "";
      this.policy.previousSelectionwhere = "";
      this.policy.user = "";
      this.policy.policyname = "";
      this.policy.otherspec = "";
    },

    backtomenu() {
      var t = this;
      this.setnull();
      this.$store.commit("setEditUpdatePolicy", this.policy);
      t.$router.push("/menu").catch((error) => {
        console.log(error.message);
      });
    },
    push_to_db() {
      if (this.policy.id == "") {
        console.log("ti");
        var t = this;
        var user_id = JSON.stringify(this.$store.getters.currUser.uid);
        this.policy.user = user_id;
        t.$firebase.db
          .collection("policies")
          .doc()
          .set(this.policy)
          .then((Result) => {
            console.log("result: " + Result);
          })
          .catch((err) => {
            console.log(err);
          });

        this.remove();

        // * redirect user to homepage

        this.$router.push("/menu").catch((error) => {
          console.log(error.message);
        });
      } else {
        console.log(this.policy.id);
        this.$firebase.db
          .collection("policies")
          .doc(this.policy.id)
          .update(this.policy);

        this.remove();

        // * redirect user to homepage

        this.$router.push("/menu").catch((error) => {
          console.log(error.message);
        });
      }
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

    creation_time() {
      console.log(this.$store.getters.editUpdatePolicy);
      if (this.$store.getters.editUpdatePolicy != null) {
        this.policy = this.$store.getters.editUpdatePolicy;
      }
    },
    remove() {
      var t = this;
      this.setnull();
      console.log(this.policy);
      this.$store.commit("setEditUpdatePolicy", this.policy);
      t.$router.push("/menu").catch((error) => {
        console.log(error.message);
      });
    },
  },

  created() {
    this.creation_time();
  },
};
</script>