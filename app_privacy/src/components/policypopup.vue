<template>
  <div>
    <v-card height="75" width="fill" elevation="0" color="grey lighten-2">
      <div class="pt-3 text-center">
        <v-dialog v-model="dialog_view" width="500">
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              color="primary"
              class="ma-2 white--text"
              dark
              v-bind="attrs"
              v-on="on"
            >
              How to edit
            </v-btn>
          </template>

          <v-card>
            <v-card-title class="text-h5 grey lighten-2">
              How to use the template
            </v-card-title>

            <v-card-text> </v-card-text>

            <v-divider></v-divider>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                class="ma-2"
                :loading="loading"
                :disabled="loading"
                color="secondary"
                small
                text
                @click="dialog_view = false"
              >
                Close
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>

        <v-dialog v-model="dialog" persistent max-width="600px">
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              dark
              v-bind="attrs"
              v-on="on"
              color="blue-grey"
              class="ma-2 white--text"
            >
              Change parts
            </v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="text-h5"> Change some parts</span>
            </v-card-title>
            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="8">
                    <h3>Select the section part you want to change:</h3>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-select
                      :items="[
                        'Header',
                        'Types of Data',
                        'Share Data',
                        'Cookies',
                        'How we use',
                        'The right to know',
                        'Contact',
                      ]"
                      label="Section"
                      required
                      v-model="select"
                    ></v-select>
                  </v-col>
                  <v-col cols="12">
                    <div v-if="select === 'Header'">
                      <h4>Change Header:</h4>
                      <h5>Current:</h5>
                      <h5 class="blue--text">{{ welcome }}</h5>

                      <v-text-field label="New header" v-model="welcome">
                      </v-text-field>
                      <h4>Change Desctiption:</h4>
                      <h5>Current:</h5>
                      <h5 class="blue--text">{{ text_open }}</h5>

                      <v-text-field label="New header" v-model="text_open">
                      </v-text-field>
                    </div>

                    <div v-if="select === 'Types of Data'">
                      <h4>Change Header:</h4>
                      <h5>Current:</h5>
                      <h5 class="blue--text">{{ types }}</h5>

                      <v-text-field label="New header" v-model="types">
                      </v-text-field>
                      <h4>Change Other Type Data:</h4>
                      <h5>Current:</h5>
                      <h5 class="blue--text">{{ policy.otherspec }}</h5>

                      <v-text-field
                        label="New other selected data"
                        v-model="policy.otherspec"
                      >
                      </v-text-field>
                    </div>

                    <div v-if="select === 'Cookies'">
                      <h4>Change Header:</h4>
                      <h5>Current:</h5>
                      <h5 class="blue--text">{{ cookies_header }}</h5>

                      <v-text-field label="New header" v-model="cookies_header">
                      </v-text-field>
                      <h4>Change Desctription:</h4>
                      <h5>Current:</h5>
                      <h5 class="blue--text">{{ cookies }}</h5>

                      <v-text-field label="New description" v-model="cookies">
                      </v-text-field>

                      <h4>Change Reasons:</h4>
                      <h5>Current reason 1:</h5>
                      <h5 v-if="policy.cookiereason1" class="blue--text">
                        {{ policy.cookiereason1 }}
                      </h5>

                      <v-text-field
                        label="New reason"
                        v-model="policy.cookiereason1"
                      >
                      </v-text-field>
                      <h5>Current reason 2:</h5>
                      <h5 v-if="policy.cookiereason2" class="blue--text">
                        {{ policy.cookiereason2 }}
                      </h5>

                      <v-text-field
                        label="New reason"
                        v-model="policy.cookiereason2"
                      >
                      </v-text-field>
                      <h5>Current reason 3:</h5>
                      <h5 v-if="policy.cookiereason3" class="blue--text">
                        {{ policy.cookiereason3 }}
                      </h5>

                      <v-text-field
                        label="New reason"
                        v-model="policy.cookiereason3"
                      >
                      </v-text-field>
                    </div>

                    <div v-if="select === 'Contact'">
                      <h4>Change Header:</h4>
                      <h5>Current:</h5>
                      <h5 class="blue--text">{{ contact }}</h5>

                      <v-text-field label="New header" v-model="contact">
                      </v-text-field>

                      <h4>Change Description:</h4>
                      <h5>Email:</h5>
                      <h5>Current:</h5>
                      <h5 class="blue--text">{{ email_op }}</h5>

                      <v-text-field label="New" v-model="phone_op">
                      </v-text-field>
                      <h5>Phone:</h5>
                      <h5>Current:</h5>
                      <h5 class="blue--text">{{ phone_op }}</h5>

                      <v-text-field label="New" v-model="phone_op">
                      </v-text-field>
                      <h5>Web:</h5>
                      <h5>Current:</h5>
                      <h5 class="blue--text">{{ web_op }}</h5>

                      <v-text-field label="New" v-model="web_op">
                      </v-text-field>
                      <h5>Mail:</h5>
                      <h5>Current:</h5>
                      <h5 class="blue--text">{{ mail_op }}</h5>

                      <v-text-field label="New" v-model="post_op">
                      </v-text-field>
                      <h5>Other:</h5>
                      <h5>Current:</h5>
                      <h5 class="blue--text">{{ other_op }}</h5>

                      <v-text-field label="New" v-model="other_op">
                      </v-text-field>
                    </div>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="dialog = false">
                Close
              </v-btn>
              <v-btn color="blue darken-1" text @click="dialog = false">
                Save
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>

        <v-btn
          class="ma-2"
          :loading="loading2"
          :disabled="loading2"
          color="success"
          @click="loader = 'loading2'"
        >
          Change Icons
          <template v-slot:loader>
            <span>Loading...</span>
          </template>
        </v-btn>
      </div>
    </v-card>
    <v-spacer></v-spacer>

    <!-- TEMPLATE PART -->
    <div id="printSection" align-content="center">
      <dashboard :id="'dashExample'">
        <dash-layout
          v-for="layout in dlayouts"
          v-bind="layout"
          :debug="false"
          :key="layout.breakpoint"
        >
          <dash-item v-for="item in layout.items" v-bind="item" :key="item.id">
            <div v-if="item.id === '1'" class="content text-center">
              <h2 class="font-weight-bold darken-blue--text">
                {{ welcome }} | {{ policy.webname }}
              </h2>
              <h4 class="blue--text">
                {{ text_open }}
              </h4>
            </div>

            <div v-if="item.id === '2'" class="content" text-xs-center>
              <h3 class="pl-3 font-weight-bold">
                {{ types }}
                <v-avatar class="pl-2" :tile="true">
                  <v-img
                    :src="require('@/assets/when.png')"
                    alt="logo"
                    max-height="150px"
                    max-width="150px"
                  ></v-img>
                </v-avatar>
              </h3>
              <h5 class="pl-3" v-if="policy.first_name">First Name</h5>
              <h5 class="pl-3" v-if="policy.last_name">Last Name</h5>
              <h5 class="pl-3" v-if="policy.email_c">Email</h5>
              <h5 class="pl-3" v-if="policy.address">Address</h5>
              <h5 class="pl-3" v-if="policy.phone">Phone Number</h5>

              <h5 class="pl-3" v-if="policy.zip">Zip/Postal code</h5>

              <h5 class="pl-3" v-if="policy.media">
                Social Media Profile (Facebook, Instagram, Sign In page)
              </h5>
              <h5 class="pl-3" v-if="policy.other">{{ policy.otherspec }}</h5>
            </div>
            <div v-if="item.id === '3'" class="content">
              <h3 class="pl-3 font-weight-bold">
                {{ cookies_header }}
                <v-avatar class="pl-2" :tile="true">
                  <v-img
                    :src="require('@/assets/cookie.png')"
                    alt="logo"
                    max-height="150px"
                    max-width="150px"
                  ></v-img>
                </v-avatar>
              </h3>
              <h5 class="pl-3" v-if="policy.cookies">{{ cookies }}</h5>
              <h5 class="pl-3" v-if="policy.cookiereason1">
                - {{ policy.cookiereason1 }}
              </h5>
              <h5 class="pl-3" v-if="policy.cookiereason2">
                - {{ policy.cookiereason2 }}
              </h5>
              <h5 class="pl-3" v-if="policy.cookiereason3">
                - {{ policy.cookiereason3 }}
              </h5>
            </div>
            <div v-if="item.id === '5'" class="content">
              <h3 class="pl-3 font-weight-bold">
                How We Will Use Your Data
                <v-avatar class="pl-2" :tile="true">
                  <v-img
                    :src="require('@/assets/datause.png')"
                    alt="logo"
                    max-height="150px"
                    max-width="150px"
                  ></v-img>
                </v-avatar>
              </h3>
            </div>
            <div v-if="item.id === '6'" class="content">
              <h3 class="pl-3 font-weight-bold">
                Who Do We Share Your Data With
                <v-avatar class="pl-6" :tile="true">
                  <v-img
                    :src="require('@/assets/friends.png')"
                    alt="logo"
                    max-height="100px"
                    max-width="250px"
                  ></v-img>
                </v-avatar>
              </h3>
            </div>
            <div v-if="item.id === '4'" class="content">
              <h3 class="pl-3 font-weight-bold">
                When & How Do We Collect Your Data
                <v-avatar class="pl-2" :tile="true">
                  <v-img
                    :src="require('@/assets/how.png')"
                    alt="logo"
                    max-height="150px"
                    max-width="150px"
                  ></v-img>
                </v-avatar>
              </h3>
            </div>
            <div v-if="item.id === '7'" class="content">
              <h3 class="pl-3 font-weight-bold">
                You have the right to know about your information
                <v-avatar class="pl-2" :tile="true">
                  <v-img
                    :src="require('@/assets/right.png')"
                    alt="logo"
                    max-height="150px"
                    max-width="150px"
                  ></v-img>
                </v-avatar>
              </h3>
            </div>

            <div v-if="item.id === '9'" class="content">
              <h3 class="pl-3 font-weight-bold">
                {{ contact }}

                <v-avatar class="pl-2" :tile="true">
                  <v-img
                    :src="require('@/assets/question.png')"
                    alt="logo"
                    max-height="150px"
                    max-width="150px"
                  ></v-img>
                </v-avatar>
              </h3>

              <h5 class="pl-3" v-if="policy.th_email">
                {{ email_op }} {{ policy.th_email_d }}
              </h5>
              <h5 class="pl-3" v-if="policy.th_mail">
                {{ post_op }} {{ policy.th_mail_d }}
              </h5>
              <h5 class="pl-3" v-if="policy.th_phone">
                {{ phone_op }} {{ policy.th_phone_d }}
              </h5>
              <h5 class="pl-3" v-if="policy.th_web">
                {{ web_op }} {{ policy.weburl }}
              </h5>
              <h5 class="pl-3" v-if="policy.th_other">
                {{ other_op }} {{ policy.th_other_d }}
              </h5>
            </div>
            <template v-slot:resizeBottomRight>
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 20 20"
                focusable="false"
                role="img"
                alt="icon"
                xmlns="http://www.w3.org/2000/svg"
                fill="white"
                class="b-icon bi bi-arrow-down-right mx-auto"
                data-v-11c9e491
              >
                <g data-v-11c9e491>
                  <path
                    fill-rule="evenodd"
                    d="M14 9.5a.5.5 0 01.5.5v5a.5.5 0 01-.5.5H9a.5.5 0 010-1h4.5V10a.5.5 0 01.5-.5z"
                    clip-rule="evenodd"
                  ></path>
                  <path
                    fill-rule="evenodd"
                    d="M4.646 5.646a.5.5 0 01.708 0l9 9a.5.5 0 01-.708.708l-9-9a.5.5 0 010-.708z"
                    clip-rule="evenodd"
                  ></path>
                </g>
              </svg>
            </template>
          </dash-item>
        </dash-layout>
      </dashboard>
    </div>
  </div>
</template>

<script>
import { Dashboard, DashLayout, DashItem } from "vue-responsive-dash";
import Test from "@/components/Test";
export default {
  name: "App",
  props: {
    policy: Object,
  },
  components: {
    Dashboard,
    DashLayout,
    DashItem,
    Test,
  },
  data: function () {
    return {
      xswap: true,
      cookies: "Yes, we do use cookies in our website for those reasons:",
      cookies_header: "Cookies",
      contact: "Got Questions? Contact Us!",
      email_op: "By email at:",
      post_op: "By post mail at:",
      phone_op: "By phone at:",
      web_op: "Through the website at:",
      other_op: "Through :",
      dialog: false,
      types: " What Types Of Data We Collect",
      dialog_view: false,
      select: "",
      text_open: "Remember you have the right to see how we use your data",
      welcome: "Welcome to our policy",
      items: [
        { title: "Dashboard", icon: "mdi-view-dashboard" },
        { title: "Photos", icon: "mdi-image" },
        { title: "About", icon: "mdi-help-box" },
      ],
      right: null,
    };
  },
  methods: {
    doSwap() {
      this.xswap = !this.xswap;
    },
  },
  computed: {
    dlayouts() {
      var layouts;
      if (this.xswap) {
        layouts = [
          {
            breakpoint: "lg",
            breakpointWidth: 1200,
            numberOfCols: 12,
            items: [
              { id: "1", x: 2, y: 0, width: 8, height: 0.75 },
              { id: "2", x: 2, y: 2, width: 4, height: 1.75 },
              { id: "3", x: 6, y: 3.5, width: 4, height: 1.25 },
              { id: "4", x: 2, y: 3.5, width: 4, height: 2 },
              { id: "5", x: 6, y: 5, width: 4, height: 1 },
              { id: "6", x: 6, y: 0, width: 4, height: 1 },
              { id: "7", x: 2, y: 6.5, width: 8, height: 1 },
              { id: "9", x: 2, y: 9.5, width: 8, height: 1.4 },
            ],
          },
        ];
      } else {
        layouts = [
          {
            breakpoint: "lg",
            breakpointWidth: 1200,
            numberOfCols: 12,
            items: [
              {
                id: "10",
                x: 0,
                y: 0,
                width: 16,
                height: 30,
              },
            ],
          },
        ];
      }
      return layouts;
    },
  },

  created() {
    console.log(this.policy);
  },
};
</script>


<style>
.content {
  height: 100%;
  width: 100%;
  border: 2px solid #0091b9;
  border-radius: 5px;
  background-color: #ffffffe9;
}
</style>
