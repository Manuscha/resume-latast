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
              CONTACT
            </h1>
          </div>
          <div>
            <h2 style="color: #bb4f7a; padding-left: 3px; padding-top: 40px">
              You can contact me at ......
            </h2>
          </div>
        </v-flex>
      </v-col>
    </v-row>
    <!-- photo -->
    <v-row style="padding-top: 165px">
      <v-col md="3"></v-col>
      <v-col md="6" align="center">
        <v-card color="#FCE8EA" outlined width="700" class="pa-6">
          <v-row>
            <v-col cols="12">
              <v-row>
                <v-col md="3" align="center">
                  <div
                    style="font-weight: bold; font-size: 31px; color: #bb4f7a"
                  >
                    E-mail :
                  </div>
                </v-col>
                <v-col align="left">
                  <p
                    style="color: #bb4f7a; font-size: 22px"
                    class="pr-10 mt-2 mr-10"
                  >
                    warin.varin.1402@gmail.com
                  </p>
                </v-col>
              </v-row>
            </v-col>
            <v-col cols="12">
              <v-row>
                <v-col md="5" align="center">
                  <p style="font-weight: bold; font-size: 31px; color: #bb4f7a">
                    Phone number:
                  </p>
                </v-col>
                <v-col align="left">
                  <p style="color: #bb4f7a; font-size: 22px" class="pa-3">
                    098-247-9751
                  </p></v-col
                >
              </v-row>
            </v-col>
            <v-col cols="12">
              <v-row>
                <v-col md="5" align="center">
                  <p style="font-weight: bold; font-size: 31px; color: #bb4f7a">
                    Social network:
                  </p>
                </v-col>
                <v-col align="left">
                  <v-btn
                    icon
                    color="indigo"
                    class="mt-2"
                    href="https://www.facebook.com/profile.php?id=100005978190729"
                    target="_blank"
                  >
                    <v-icon x-large> mdi-facebook </v-icon>
                  </v-btn>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-card>
        <v-row class="pt-6">
          <v-col>
            <v-card width="850" outlined color="#FCE8EA">
              <v-row>
                <v-col cols="12">
                  <div class="text-center" style="margin-top: 20px">
                    <p
                      style="color: #bb4f7a; font-size: 18px; font-weight: bold"
                    >
                      Please rate satisfaction
                    </p>
                    <v-rating
                      color="#bb4f7a"
                      background-color="#bb4f7a"
                      v-model="rating"
                      icon-label="custom icon label text {0} of {1}"
                    ></v-rating>
                  </div>
                </v-col>
                <v-col>
                  <v-col cols="12">
                    <p
                      style="color: #bb4f7a; font-size: 18px; font-weight: bold"
                    >
                      Please your name :
                    </p>
                    <v-text-field
                      label="name"
                      outlined
                      color="#bb4f7a"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <p
                      style="color: #bb4f7a; font-size: 18px; font-weight: bold"
                    >
                      Please your comment :
                    </p>
                    <v-textarea
                      outlined
                      color="#bb4f7a"
                      label="Comment"
                    ></v-textarea>
                  </v-col>
                  <v-col align="end">
                    <v-dialog v-model="dialog" width="500">
                      <template v-slot:activator="{ on, attrs }">
                        <v-btn
                          rounded
                          color="#bb4f7a"
                          dark
                          v-bind="attrs"
                          v-on="on"
                          disabled
                          >SEND
                        </v-btn>
                      </template>

                      <v-card color="#D1C4E9">
                        <v-card-text
                          style="
                            padding-top: 50px;
                            text-align-last: center;
                            color: #bb4f7a;
                          "
                          class="text-h5"
                          >Thank you for the rating and comments.
                        </v-card-text>

                        <v-card-actions
                          style="place-content: center; padding-top: 29px"
                        >
                          <v-btn color="#bb4f7a" dark @click="dialog = false"
                            >OKEY
                          </v-btn>
                        </v-card-actions>
                      </v-card>
                    </v-dialog>
                  </v-col>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
      <v-col md="3"> </v-col>
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
          <v-btn fab dark small color="#6FADD2" to="/work-portfolio-me">
            <img :src="require('~/assets/work.svg')" />
          </v-btn>
          <v-btn fab dark small color="#6FADD2" to="/photos-me">
            <img :src="require('~/assets/photo.svg')" />
          </v-btn>
          <v-btn fab dark small color="#EC407A" to="">
            <v-icon>mdi-heart</v-icon>
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
    rating: 4,
    sheet: false,
    dialog: false,
  }),
  watch: {},
  methods: {},
  mounted() {},
};
</script>
