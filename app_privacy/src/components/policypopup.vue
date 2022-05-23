<template>
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
              Welcome to our policy | {{ policy.webname }}
            </h2>
            <h4 class="blue--text">
              Remember you have the right to see how we use your data
            </h4>
          </div>

          <div v-if="item.id === '2'" class="content">
            <h3 class="pl-3 font-weight-bold">
              What Types Of Data We Collect
              <v-avatar class="pl-2" :tile="true">
                <v-img
                  :src="require('@/assets/when.png')"
                  alt="logo"
                  max-height="150px"
                  max-width="150px"
                ></v-img>
              </v-avatar>
            </h3>
            <h5 class="pl-3" v-if="policy.first_name">- First Name</h5>
            <h5 class="pl-3" v-if="policy.last_name">-Last Name</h5>
            <h5 class="pl-3" v-if="policy.email_c">-Email</h5>
            <h5 class="pl-3" v-if="policy.address">-Address</h5>
            <h5 class="pl-3" v-if="policy.phone">-Phone Number</h5>

            <h5 class="pl-3" v-if="policy.zip">-Zip/Postal code</h5>

            <h5 class="pl-3" v-if="policy.media">
              - Social Media Profile (Facebook, Instagram, Sign In page)
            </h5>
            <h5 class="pl-3" v-if="policy.other">- Other, contact Us.</h5>
          </div>
          <div v-if="item.id === '3'" class="content">
            <h3 class="pl-3 font-weight-bold">
              Cookies
              <v-avatar class="pl-2" :tile="true">
                <v-img
                  :src="require('@/assets/cookie.png')"
                  alt="logo"
                  max-height="150px"
                  max-width="150px"
                ></v-img>
              </v-avatar>
            </h3>
            <h5 v-if="policy.cookies">
              Yes, we use Cookies for improving our website.
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
          <div v-if="item.id === '8'" class="content">
            <v-btn
              rounded
              block
              color="blue"
              @click="aboutpage = !aboutpage"
              to="/about"
              >See the full policy
              <v-icon right dark> mdi-send-circle </v-icon>
            </v-btn>
          </div>
          <div v-if="item.id === '9'" class="content">
            <h3 class="pl-3 font-weight-bold">
              Got Questions? Contact Us!
              <v-avatar class="pl-2" :tile="true">
                <v-img
                  :src="require('@/assets/question.png')"
                  alt="logo"
                  max-height="150px"
                  max-width="150px"
                ></v-img>
              </v-avatar>
            </h3>
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
              { id: "1", x: 2, y: 0, width: 8, height: 0.5 },
              { id: "2", x: 2, y: 2, width: 4, height: 1 },
              { id: "3", x: 6, y: 3.5, width: 4, height: 1 },
              { id: "4", x: 2, y: 3.5, width: 4, height: 2 },
              { id: "5", x: 6, y: 5, width: 4, height: 1 },
              { id: "6", x: 6, y: 0, width: 4, height: 1 },
              { id: "7", x: 2, y: 6.5, width: 8, height: 1 },

              { id: "8", x: 2, y: 9.5, width: 8, height: 0.25 },
              { id: "9", x: 2, y: 11, width: 8, height: 1 },
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
