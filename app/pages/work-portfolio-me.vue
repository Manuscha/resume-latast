<template>
  <div style="background-color: #f9d4db; height: 100%">
    <!-- ชื่อ -->
    <v-row>
      <v-col align="center">
        <v-flex
          style="
            background-color: #ffffff;
            height: 73px;
            opacity: 0.86;
            line-height: 2.5em;
          "
          class="pa-4"
        >
          <div>
            <h1
              style="
                font-weight: bold;
                font-size: 42px;
                color: #bb4f7a;
                opacity: initial;
              "
            >
              PORTFOLIO
            </h1>
          </div>
          <div>
            <h2 style="color: #bb4f7a; padding-left: 3px; padding-top: 40px">
              This was portfolio as assign.
            </h2>
          </div>
        </v-flex>
      </v-col>
    </v-row>
    <!-- PORTFOLIO -->
    <v-row style="padding-top: 165px">
      <v-col md="3"></v-col>
      <v-col cols="6">
        <v-row>
          <v-col>
            <v-card class="mx-auto" max-width="400" outlined>
              <v-list-item three-line>
                <v-list-item-content>
                  <v-list-item-title class="headline mb-1">
                    <div style="color: #d5666c">Graduation Project</div>
                  </v-list-item-title>
                  <v-list-item-subtitle class="pt-3"
                    >Greyhound divisely hello coldly
                    fonwderfully</v-list-item-subtitle
                  >

                  <v-list-item-subtitle class="text--lighten-1 grey--text pt-3"
                    >You can download my project!</v-list-item-subtitle
                  >
                </v-list-item-content>
              </v-list-item>

              <v-card-actions class="pt-9">
                <v-btn
                  outlined
                  rounded
                  block
                  color="#D5666C"
                  href="/assets.zip"
                >
                  <v-icon left> mdi-cloud-download </v-icon>
                  Download
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
        <v-row class="pt-9">
          <v-col>
            <v-card class="mx-auto" max-width="550" outlined>
              <v-list-item three-line>
                <v-list-item-content>
                  <v-list-item-title class="headline mb-1">
                    <div style="color: #a6c3a5">
                      The first project that came to work
                    </div>
                  </v-list-item-title>
                  <v-list-item-subtitle class="pt-3"
                    >Project name's BMA,Only do backend,I use node.js, mySQL,
                    sequelize, Postman and other, By working in connection with
                    Mobile Application.
                  </v-list-item-subtitle>
                  <v-list-item-subtitle class="text--lighten-1 grey--text pt-3"
                    >You can download for look exemple
                    code!</v-list-item-subtitle
                  >
                </v-list-item-content>
              </v-list-item>

              <v-card-actions class="pt-9">
                <v-btn
                  outlined
                  rounded
                  block
                  color="#A6C3A5"
                  href="/exemple_code.txt"
                  target="_blank"
                >
                  <v-icon left> mdi-cloud-download </v-icon>
                  Download
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
        <v-row class="pt-9">
          <v-col>
            <v-card class="mx-auto" max-width="500" outlined>
              <v-list-item three-line>
                <v-list-item-content>
                  <v-list-item-title class="headline mb-1">
                    <div style="color: #60837f">The second</div>
                  </v-list-item-title>
                  <v-list-item-subtitle class="pt-3"
                    >Project name's Deep Platform, I do backend and fontend, I
                    use vuetify, node.js, javascript, axios, mySQL and
                    other.</v-list-item-subtitle
                  >
                  <v-list-item-subtitle class="text--lighten-1 grey--text pt-3"
                    >You can download for look exemple
                    code!</v-list-item-subtitle
                  >
                </v-list-item-content>
              </v-list-item>

              <v-card-actions class="pt-9">
                <v-btn
                  outlined
                  rounded
                  block
                  color="#60837F"
                  href="/exemple_code_2.txt"
                  target="_blank"
                >
                  <v-icon left> mdi-cloud-download </v-icon>
                  Download
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
      <v-col md="3"></v-col>
    </v-row>

    <!-- ปุ่ม home -->
    <v-row>
      <v-col md="1">
        <v-speed-dial
          v-model="fab"
          :bottom="bottom"
          :right="right"
          :direction="direction"
          :open-on-hover="hover"
          :transition="transition"
          style="
            bottom: 13px;
            left: px;
            position: fixed;
            right: 34px;
            z-index: 99;
          "
        >
          <template v-slot:activator>
            <v-btn v-model="fab" color="#728DBA" dark fab>
              <v-icon v-if="fab"> mdi-close </v-icon>
              <v-icon v-else> mdi-menu </v-icon>
            </v-btn>
          </template>
          <v-btn fab dark small color="#144774" to="/">
            <v-icon>mdi-home</v-icon>
          </v-btn>
          <v-btn fab dark small color="#336FA5" to="/aboute-me">
            <v-icon>mdi-account-circle</v-icon>
          </v-btn>
          <v-btn fab dark small color="#6FADD2" to="/photos-me">
            <img :src="require('~/assets/photo.svg')" />
          </v-btn>
          <v-btn fab dark small color="#9ECAE3" to="/contact-contact-me">
            <v-icon>mdi-phone</v-icon>
          </v-btn>
        </v-speed-dial>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Chart from "chart.js";
export default {
  data: () => ({
    offsetTop: 0,
    dialog: false,
    direction: "top",
    fab: false,
    hover: true,
    bottom: true,
    right: true,
    transition: "scale",
    transparent: "rgba(255, 255, 255, 0)",
  }),
  watch: {
    dialog(val) {
      if (!val) return;

      setTimeout(() => (this.dialog = false), 4000);
    },
  },
  methods: {},
  mounted() {},
};
</script>

<style lang="css" scoped>
.v-tagcard {
  transition: opacity 0.1s ease-in-out;
}

.v-tagcard:not(.on-hover) {
  opacity: 0.2;
}

.show-text {
  color: rgb(255, 255, 255) !important;
}
</style>
