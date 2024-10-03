<template>
  <div
    style="background-color: #F9D4DB;display;block;height:100vh; overflow-x: hidden; overflow-y: hidden;"
  >
    <img
      :src="require('~/assets/mypic.jpg')"
      style="max-width: 50vw; position: fixed; bottom: 0px"
    />
    <!-- ข้อมูล -->
    <v-flex id="scroll-target" style="max-height: 105%" class="overflow-y-auto">
      <v-row
        v-scroll:#scroll-target="onScroll"
        style="height: 1000px"
        class="pl-4"
      >
        <v-col md="6"></v-col>
        <v-col md="6" align="start">
          <v-row style="padding-top: 152px">
            <v-col>
              <div
                style="
                  background-color: #fbe2e6;
                  line-height: 2.5em;
                  width: 764px;
                  margin: auto;
                  padding: 18px;
                "
              >
                <p style="font-weight: bold; font-size: 31px; color: #bb4f7a">
                  Education
                </p>
                <p style="color: #bb4f7a; font-size: 22px" class="pa-3">
                  2015 - 2019: University of Phayao, Computer Engineering
                </p>
                <p style="font-weight: bold; font-size: 31px; color: #bb4f7a">
                  Work Experience
                </p>
                <p style="color: #bb4f7a; font-size: 22px" class="pa-3">
                  2019 - present: Global Wireless Co.,Ltd , Web Developer
                </p>
              </div>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <p
                style="
                  font-weight: bold;
                  font-size: 31px;
                  color: #bb4f7a;
                  padding-left: 60px;
                "
              >
                Main Skill
              </p>

              <div style="height: 500px; width: 700px; padding-left: 200px">
                <canvas id="myChart" width="500" height="500" v-once></canvas>
              </div>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <p
                style="
                  font-weight: bold;
                  font-size: 31px;
                  color: #bb4f7a;
                  padding-left: 60px;
                "
              >
                Other Skill
              </p>
              <v-row justify="space-around">
                <v-tooltip right>
                  <template v-slot:activator="{ on, attrs }">
                    <img
                      :src="require('~/assets/sequelize.png')"
                      v-bind="attrs"
                      v-on="on"
                    />
                  </template>
                  <span>Sequelize</span>
                </v-tooltip>
                <v-tooltip left>
                  <template v-slot:activator="{ on, attrs }">
                    <img
                      :src="require('~/assets/vuetify.png')"
                      v-bind="attrs"
                      v-on="on"
                    />
                  </template>
                  <span>Vuetify</span>
                </v-tooltip>
                <v-tooltip left>
                  <template v-slot:activator="{ on, attrs }">
                    <img
                      :src="require('~/assets/lodash.png')"
                      v-bind="attrs"
                      v-on="on"
                    />
                  </template>
                  <span>Lodash</span>
                </v-tooltip>
                <v-tooltip left>
                  <template v-slot:activator="{ on, attrs }">
                    <img
                      :src="require('~/assets/momentjs.png')"
                      v-bind="attrs"
                      v-on="on"
                    />
                  </template>
                  <span>Moment.js</span>
                </v-tooltip>
                <v-tooltip left>
                  <template v-slot:activator="{ on, attrs }">
                    <img
                      :src="require('~/assets/gitlab.png')"
                      v-bind="attrs"
                      v-on="on"
                    />
                  </template>
                  <span>Gitlab</span>
                </v-tooltip>
              </v-row>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <p
                style="
                  font-weight: bold;
                  font-size: 31px;
                  color: #bb4f7a;
                  padding-left: 60px;
                "
              >
                Language
              </p>
              <div style="padding-left: 88px">
                <ul>
                  <li
                    style="color: #bb4f7a; font-size: 22px; bottom: 111px"
                    class="pa-3"
                  >
                    Thai
                  </li>
                </ul>
                <div
                  style="
                    background: white;
                    width: 453px;
                    height: 30px;
                    border-radius: 200px;
                    position: relative;
                    left: 8rem;
                    top: -2.55rem;
                  "
                >
                  <div
                    style="
                      background: rgb(116, 140, 184);
                      width: 411px;
                      height: 20px;
                      border-radius: 200px;
                      position: relative;
                      left: 0.4rem;
                      top: 0.35rem;
                    "
                  ></div>
                  <h2
                    style="
                      color: #bb4f7a;
                      position: relative;
                      top: -1.4rem;
                      left: 30rem;
                      display: inline-block;
                    "
                  >
                    98/100
                  </h2>
                </div>
                <ul>
                  <li style="color: #bb4f7a; font-size: 22px" class="pa-3">
                    English
                  </li>
                </ul>
                <v-card
                  color="#ffffff"
                  dark
                  width="453"
                  height="50"
                  style="position: relative; top: -3.5rem; left: 8rem"
                >
                  <v-card-text
                    style="
                      color: #748cb8;
                      font-weight: bold;
                      position: relative;
                      top: -5px;
                    "
                  >
                    Studying English
                    <v-progress-linear
                      indeterminate
                      color="#748CB8"
                      class="mb-0"
                    ></v-progress-linear>
                  </v-card-text>
                </v-card>
                <ul>
                  <li style="color: #bb4f7a; font-size: 22px" class="pa-3">
                    Korean
                  </li>
                </ul>
                <v-card
                  color="#ffffff"
                  dark
                  width="453"
                  height="50"
                  style="position: relative; top: -3.5rem; left: 8rem"
                >
                  <v-card-text
                    style="
                      color: #748cb8;
                      font-weight: bold;
                      position: relative;
                      top: -5px;
                    "
                  >
                    Studying Korean
                    <v-progress-linear
                      indeterminate
                      color="#748CB8"
                      class="mb-0"
                    ></v-progress-linear>
                  </v-card-text>
                </v-card>
              </div>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-flex>
    <!-- ชื่อ -->
    <v-flex
      v-show="offsetTop < 60"
      style="
        background-color: #ffffff;
        height: 73px;
        opacity: 0.86;
        top: 1vw;
        position: absolute;
        left: 46%;
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
          Manuschanok khamvan
        </h1>
      </div>
      <div>
        <h2 style="color: #bb4f7a; padding-left: 93px; padding-top: 20px">
          I'm the programmer since 2019
        </h2>
      </div>
    </v-flex>
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
          <v-btn fab dark small color="#336FA5" to="/work-portfolio-me">
            <img :src="require('~/assets/work.svg')" />
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
    <!-- กรอบขาวตรงกลาง -->
    <div
      style="
        background-color: #ffffff;
        height: 389px;
        opacity: 0.6;
        top: 13vw;
        left: 49.2%;
        position: absolute;
        line-height: 2.5em;
      "
      class="pa-4"
    ></div>
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
  }),
  watch: {
    dialog(val) {
      if (!val) return;

      setTimeout(() => (this.dialog = false), 4000);
    },
  },
  methods: {
    onScroll(e) {
      this.offsetTop = e.target.scrollTop;
    },
  },
  mounted() {
    var ctx = document.getElementById("myChart");
    if (ctx) {
      var myChart = new Chart(ctx, {
        type: "polarArea",
        data: {
          labels: ["node.js", "Javascript", "MySql", "Vue.js", "css"],
          datasets: [
            {
              data: [60, 60, 55, 50, 30],
              backgroundColor: [
                "rgba(165,103,142,0.6)",
                "rgba(51,83,158,0.6)",
                "rgba(127,172,214,0.6)",
                "rgba(191,184,218,0.6)",
                "rgba(232,183,212,0.6)",
              ],
              borderColor: [
                "#A5678E",
                " #33539E",
                "#7FACD6",
                "#BFB8DA",
                "#E8B7D4",
              ],
              borderWidth: 2,
              barPercentage: 0.3,
            },
          ],
        },
        options: {
          options: {
            scales: {
              xAxes: [
                {
                  stacked: true,
                },
              ],
              yAxes: [
                {
                  stacked: true,
                },
              ],
            },
          },
        },
      });
    }
  },
};
</script>
