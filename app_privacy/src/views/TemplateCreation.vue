<template>
  <v-main>
    <v-container class="fill-height" fluid>
      <v-row align="center" justify="center" dense>
        <!-- <v-row class="justify-center" no-gutters> -->
        <v-col
          cols="12"
          xs="12"
          sm="12"
          md="12"
          lg="10"
          xl="10"
          class="text-left pa-2"
        >
          <v-row align="center" justify="center" dense>
            <v-col
              cols="12"
              xs="12"
              sm="12"
              md="7"
              lg="8"
              xl="8"
              class="align-center text-left"
            >
              <!-- // * policies / ADD ROOM -->
              <div class="d-flex align-center">
                <div class="pb-1 text-center heading5">
                  Privacy Policies Template Creation
                </div>
                <v-spacer />
                <v-btn class="secondary" @click="formAction('Add', '')"
                  >Add New Policy</v-btn
                >
              </div>
              <!-- // * EVENT SEARCH / FILTERES -->
              <v-row no-gutters class="pa-0 mb-4">
                <v-col class="pr-1" cols="12" xs="" sm="" md="" lg="" xl=""
                  ><v-text-field
                    class="gold"
                    clearable
                    v-model="search"
                    append-icon="mdi-magnify"
                    label="Search"
                    single-line
                    hide-details
                    dark
                    filled
                    background="white"
                  ></v-text-field
                ></v-col>
              </v-row>
              <v-card>
                <v-data-table
                  :headers="headers"
                  :items="policies"
                  :items-per-page="20"
                  class="elevation-1"
                  :search="search"
                  mobile-breakpoint="0"
                >
                  <template v-slot:[`item.actions`]="{ item }">
                    <div class="d-flex justify-end">
                      <div style="width: 50px !important">
                        <v-icon
                          color="light-blue darken-2"
                          @click="
                            editPolicie = true;
                            policieItem = item;
                          "
                          right
                          dark
                        >
                          mdi-send-circle</v-icon
                        >
                      </div>
                    </div>
                  </template>
                  <SurveyPopUp />
                </v-data-table>
              </v-card>
            </v-col>
            <transition
              name="custom-classes-transition"
              enter-active-class="animate__animated animate__fadeIn"
              leave-active-class="animate__animated animate__fadeOut"
              mode="out-in"
            >
              <v-col
                cols="12"
                xs="12"
                sm="12"
                md="5"
                lg="4"
                xl="4"
                class="text-left"
                v-if="showForm"
              >
                <div class="darkgrey card pa-4 mt-2" style="border-radius: 5px">
                  <div class="heading6 white--text">{{ formType }} Survey</div>
                  <v-row align="center">
                    <v-col cols="12" class="text-left">
                      <v-form ref="policies" v-model="valid" lazy-validation>
                        <v-text-field
                          hide-details="auto"
                          :rules="[(v) => !!v || 'Add a name for the room.']"
                          required
                          class="mb-3"
                          label="Survey Name"
                          v-model="policiesForm.firstName"
                          dark
                          filled
                          background="white"
                        ></v-text-field>

                        <v-text-field
                          hide-details="auto"
                          :rules="[
                            (v) => !!v || 'Add an description for the rooom.',
                          ]"
                          label="Description"
                          v-model="policiesForm.spaceDescription"
                          dark
                          filled
                          background="white"
                        ></v-text-field>
                      </v-form>
                    </v-col>
                    <v-col cols="12" class="d-flex align-center justify-end">
                      <div class="mr-2">
                        <v-btn depressed @click="showForm = false" class="grey"
                          >Close</v-btn
                        >
                      </div>
                      <v-spacer />
                      <div class="mr-2">
                        <v-btn
                          depressed
                          v-if="formType === 'Edit'"
                          @click="
                            deleteSpace(policiesForm.id, policiesForm.spaceName)
                          "
                          color="white"
                          ><span class="black--text">Delete Survey</span></v-btn
                        >
                      </div>
                      <div>
                        <v-btn
                          depressed
                          v-if="formType === 'Add'"
                          @click="createSpace()"
                          color="secondary"
                          >Save Survey</v-btn
                        >
                        <v-btn
                          depressed
                          v-if="formType === 'Edit'"
                          @click="updateSpace()"
                          color="secondary"
                          >Update</v-btn
                        >
                      </div>
                    </v-col>
                  </v-row>
                </div>
              </v-col>
            </transition>
          </v-row>
        </v-col>

        <v-dialog
          style="z-index: 3000 !important"
          v-model="deleteDialog"
          persistent
          max-width="300"
        >
          <v-card class="gold">
            <v-card-title class="background black--text">
              Delete Survey
            </v-card-title>
            <v-card-text class="mt-6">
              <p class="subtitle1 black--text">
                Are you sure you want to delete the room
                <strong>{{ deleteName }}</strong
                >?
              </p></v-card-text
            >
            <v-card-actions class="">
              <v-spacer></v-spacer>
              <v-btn class="secondary" @click="noAction()"> No</v-btn>
              <v-btn class="secondary" @click="yesAction()">Yes</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-dialog
          style="z-index: 3000 !important"
          v-model="editPolicie"
          fullscreen
          hide-overlay
          transition="dialog-bottom-transition"
        >
          <v-card class="white">
            <v-toolbar color="pb-1 text-center heading1">
              <v-avatar :tile="true">
                <v-img
                  :src="require('@/assets/elia.png')"
                  alt="logo"
                  max-height="200px"
                  max-width="200px"
                ></v-img> </v-avatar
              >User-Friendly Policy Representation<v-spacer></v-spacer>
              <v-btn
                class="ma-2 white--text"
                rounded
                color="primary"
                @click="printDownload"
              >
                Download Policy
              </v-btn>

              <v-btn
                class="ma-2 white--text"
                rounded
                color="primary"
                @click="printSection"
              >
                <v-icon small class="mr-1">mdi-print</v-icon>Print Policy
              </v-btn>

              <v-icon class="indigo--text" @click="editPolicie = false"
                >mdi-close</v-icon
              >
            </v-toolbar>
            <VueHtml2pdf
              :manual-pagination="true"
              :enable-download="true"
              ref="DownloadComp"
            >
              <section slot="pdf-content">
                <PoliciePopUp :policy="policieItem" />
              </section>
            </VueHtml2pdf>
            <PoliciePopUp :policy="policieItem" />
            <v-divider></v-divider>
          </v-card>
        </v-dialog>
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
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
class SNACKBAR {
  constructor(status, color, message, timeout) {
    this.status = status;
    this.color = color;
    this.message = message;
    this.timeout = timeout;
  }
}
class POLICIEFORM {
  constructor(id, firstName) {
    this.id = id;
    this.firstName = firstName;
  }
}
import PoliciePopUp from "@/components/policypopup.vue";
import VueHtml2pdf from "vue-html2pdf";
export default {
  components: {
    PoliciePopUp,
    VueHtml2pdf,
  },
  data() {
    return {
      snackbarKey: 0, // notifications
      snackbar: {}, //notifications
      search: "",
      editPolicie: false,
      deleteDialog: false,
      deleteName: "",
      deleteId: "",
      showForm: false,
      policieItem: [],
      formType: "",
      policiesForm: {},
      headers: [
        {
          text: "Policy Name",
          value: "policyname",
          align: "start",
          sortable: true,
          hidden: true,
        },
        {
          text: "Date Created",
          value: "date",
          align: "start",
          sortable: true,
          hidden: false,
        },
        {
          text: "Website Name",
          value: "webname",
          align: "start",
          sortable: true,
          hidden: false,
        },
        {
          text: "Website URL",
          value: "weburl",
          align: "start",
          sortable: true,
          hidden: false,
        },

        {
          text: "Create Template",
          value: "actions",
          align: "end",

          hidden: false,
        },
      ],
      policies: [],
      valid: true,
    };
  },

  methods: {
    printSection() {
      this.$htmlToPaper("printSection");
    },
    formAction(action, item) {
      this.formType = action;
      if (action === "Add") {
        var t = this;

        t.$router.push("/generator").catch((error) => {
          // error was removed
          console.log(error.message);
          //  console.log("i am here 4")
        });
      } else {
        this.policiesForm = new POLICIEFORM(item.id, item.firstName);
        this.editPolicie = true;
        this.policieItem = item;
        // console.log(JSON.stringify(item,null,2))
        // console.log(JSON.stringify(this.policies,null,2))
      }
      this.showForm = true; // show form
      this.$nextTick(() => {
        if (this.$vuetify.breakpoint.name === "xs") {
          this.$vuetify.goTo(700);
        }
      });
    },
    async createSpace() {
      if (this.$refs.policies.validate()) {
        delete this.policiesForm.id;
        var result = await this.createDocument("policies", this.policiesForm); // add menu through mixins
        if (result.code === 1) {
          this.policiesForm = new POLICIEFORM(""); // clear user form
          this.showForm = false;
        }
      }
    },
    async updateSpace() {
      if (this.$refs.policies.validate()) {
        var result = await this.updateDocument("policies", this.policiesForm);
        if (result.code === 1) {
          this.policiesForm = new POLICIEFORM(""); // clear user form
          this.showForm = false; // hide form
        }
      }
    },
    deleteSpace(id, name) {
      this.deleteDialog = true;
      this.deleteName = name;
      this.deleteId = id;
    },
    async yesAction() {
      var result = await this.deleteDocument("survey", this.deleteId); // delete venue through mixins
      if (result.code === 1) {
        this.snackbar = new SNACKBAR(true, "success", "Survey deleted", 2000); // update snack bar with succes
        this.snackbarKey++;
        this.deleteDialog = false;
        this.showForm = false;
        this.readDocuments("survey", "policies");
      } else {
        this.deleteDialog = false;
        this.showForm = false;
      }
    },
    noAction() {
      this.deleteDialog = false;
      this.deleteName = "";
      this.deleteId = "";
    },
    // read documents by id
    readDocumentsByUserId(collection, dataObject) {
      var t = this;
      t.$firebase.db
        .collection(collection)

        .where("user", "==", JSON.stringify(this.$store.getters.currUser.uid))
        .onSnapshot((querySnapshot) => {
          var data = [];
          var Data = {};
          querySnapshot.forEach((doc) => {
            Data = doc.data();
            Data.id = doc.id;
            data.push(Data);
          });
          this[dataObject] = data;
        });
    },

    printDownload() {
      this.$refs.DownloadComp.generatePdf();
    },
  },
  create() {
    // on create set default data objects
    this.policiesForm = new POLICIEFORM(""); // clear user form
  },
  async mounted() {
    this.readDocumentsByUserId("policies", "policies"); // get list of policies from database
    console.log(this.policies.length);
  },
};
</script>