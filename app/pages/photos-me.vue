<template>
  <div style="background-color: #f9d4db; height: 100 %">
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
              PHOTO
            </h1>
          </div>
          <div>
            <h2 style="color: #bb4f7a; padding-left: 3px; padding-top: 40px">
              Story through my picture
            </h2>
          </div>
        </v-flex>
      </v-col>
    </v-row>
    <!-- photo -->
    <v-row style="padding-top: 165px">
      <v-col md="3"></v-col>
      <v-col cols="auto">
        <v-card>
          <v-row>
            <v-col align="center">
              <v-hover v-slot="{ hover }">
                <v-card
                  width="400"
                  :class="{ 'on-hover': hover }"
                  class="v-tagcard"
                >
                  <v-img :src="require('~/assets/image/bachelo.jpg')">
                    <v-card-title class="transparent--text">
                      <v-row :class="{ 'show-text': hover }" justify="center">
                        <p class="text-h6" style="padding-top: 80px">
                          Bachelor of Computer Engineering
                        </p>
                      </v-row>
                    </v-card-title>
                  </v-img>
                </v-card>
              </v-hover>
            </v-col>
            <v-col>
              <v-hover v-slot="{ hover }">
                <v-card
                  width="400"
                  :class="{ 'on-hover': hover }"
                  class="v-tagcard"
                >
                  <v-img :src="require('~/assets/image/flower.jpg')">
                    <v-card-title class="transparent--text">
                      <v-row :class="{ 'show-text': hover }" justify="end">
                        <p class="text-h6">Before start work</p>
                      </v-row>
                    </v-card-title>
                  </v-img>
                </v-card>
              </v-hover>
            </v-col>
          </v-row>
          <v-row>
            <v-col align="center">
              <v-hover v-slot="{ hover }">
                <v-card
                  width="400"
                  :class="{ 'on-hover': hover }"
                  class="v-tagcard"
                >
                  <v-img :src="require('~/assets/image/before_bachalo.jpg')">
                    <v-card-title class="transparent--text">
                      <v-row :class="{ 'show-text': hover }" justify="end">
                        <p class="text-h6">
                          Before getting a bachelor's degree
                        </p>
                      </v-row>
                    </v-card-title>
                  </v-img>
                </v-card>
              </v-hover>
            </v-col>
            <v-col align="center">
              <v-hover v-slot="{ hover }">
                <v-card
                  width="400"
                  :class="{ 'on-hover': hover }"
                  class="v-tagcard"
                  style="margin-top: 30px"
                >
                  <v-img :src="require('~/assets/image/island_laan.jpg')">
                    <v-card-title class="transparent--text">
                      <v-row :class="{ 'show-text': hover }" justify="end">
                        <p class="text-h6">Koh Larn Travel</p>
                      </v-row>
                    </v-card-title>
                  </v-img>
                </v-card>
              </v-hover>
            </v-col>
          </v-row>
          <v-row>
            <v-col align="center">
              <v-hover v-slot="{ hover }">
                <v-card
                  width="400"
                  :class="{ 'on-hover': hover }"
                  class="v-tagcard"
                >
                  <v-img :src="require('~/assets/image/test_work.jpg')">
                    <v-card-title class="transparent--text">
                      <v-row :class="{ 'show-text': hover }" justify="center">
                        <p class="text-h6">
                          Intern at the Department of Juvenile Observation and
                          Protection
                        </p>
                      </v-row>
                    </v-card-title>
                  </v-img>
                </v-card>
              </v-hover>
            </v-col>
            <v-col align="center">
              <v-hover v-slot="{ hover }">
                <v-card
                  width="400"
                  :class="{ 'on-hover': hover }"
                  class="v-tagcard"
                  style="margin-top: 20px"
                >
                  <v-img :src="require('~/assets/image/cafe_sukumvit.jpg')">
                    <v-card-title class="transparent--text">
                      <v-row :class="{ 'show-text': hover }" justify="center">
                        <p class="text-h6">Cafe at ICI</p>
                      </v-row>
                    </v-card-title>
                  </v-img>
                </v-card>
              </v-hover>
            </v-col>
          </v-row>
          <v-row>
            <v-col align="center">
              <v-hover v-slot="{ hover }">
                <v-card
                  width="400"
                  :class="{ 'on-hover': hover }"
                  class="v-tagcard"
                >
                  <v-img :src="require('~/assets/image/senion.jpg')">
                    <v-card-title class="transparent--text">
                      <v-row :class="{ 'show-text': hover }" justify="end">
                        <p class="text-h6">JUNIOR</p>
                      </v-row>
                    </v-card-title>
                  </v-img>
                </v-card>
              </v-hover>
            </v-col>
            <v-col align="center">
              <v-hover v-slot="{ hover }">
                <v-card
                  width="400"
                  :class="{ 'on-hover': hover }"
                  class="v-tagcard"
                  style="margin-top: 54px"
                >
                  <v-img :src="require('~/assets/image/pattaya.jpg')">
                    <v-card-title class="transparent--text">
                      <v-row :class="{ 'show-text': hover }" justify="end">
                        <p class="text-h6">Cafe at Pattaya</p>
                      </v-row>
                    </v-card-title>
                  </v-img>
                </v-card>
              </v-hover>
            </v-col>
          </v-row>
          <v-row>
            <v-col align="center">
              <v-hover v-slot="{ hover }">
                <v-card
                  width="400"
                  :class="{ 'on-hover': hover }"
                  class="v-tagcard"
                  style="margin-top: 50px"
                >
                  <v-img :src="require('~/assets/image/seconc.jpg')">
                    <v-card-title class="transparent--text">
                      <v-row :class="{ 'show-text': hover }" justify="end">
                        <p class="text-h6">SOPHOMORE</p>
                      </v-row>
                    </v-card-title>
                  </v-img>
                </v-card>
              </v-hover>
            </v-col>
            <v-col align="center">
              <v-hover v-slot="{ hover }">
                <v-card
                  width="400"
                  :class="{ 'on-hover': hover }"
                  class="v-tagcard"
                >
                  <v-img :src="require('~/assets/image/cafe_japanes.jpg')">
                    <v-card-title class="transparent--text">
                      <v-row :class="{ 'show-text': hover }" justify="end">
                        <p class="text-h6">Cafe at Kafae Tuktheaw</p>
                      </v-row>
                    </v-card-title>
                  </v-img>
                </v-card>
              </v-hover>
            </v-col>
          </v-row>
          <v-row>
            <v-col align="center">
              <v-hover v-slot="{ hover }">
                <v-card
                  width="400"
                  :class="{ 'on-hover': hover }"
                  class="v-tagcard"
                  style="margin-left: 20px"
                >
                  <v-img :src="require('~/assets/image/junion.jpg')">
                    <v-card-title class="transparent--text">
                      <v-row :class="{ 'show-text': hover }" justify="center">
                        <p class="text-h6" style="padding-top: 297px">
                          FRESHMAN
                        </p>
                      </v-row>
                    </v-card-title>
                  </v-img>
                </v-card>
              </v-hover>
            </v-col>
            <v-col align="center">
              <v-hover v-slot="{ hover }">
                <v-card
                  width="400"
                  :class="{ 'on-hover': hover }"
                  class="v-tagcard"
                  style="margin-right: 10px"
                >
                  <v-img :src="require('~/assets/image/present.jpg')">
                    <v-card-title class="transparent--text">
                      <v-row :class="{ 'show-text': hover }" justify="end">
                        <p class="text-h6" style="padding-top: 297px">
                          Thank you
                        </p>
                      </v-row>
                    </v-card-title>
                  </v-img>
                </v-card>
              </v-hover>
            </v-col>
          </v-row>
        </v-card>
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
          <v-btn fab dark small color="#6FADD2" to="/work-portfolio-me">
            <img :src="require('~/assets/work.svg')" />
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
