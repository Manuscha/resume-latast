<template>
  <div>
    <div
      style="background-color: #F9D4DB;display;block;height:100vh;overflow: hidden;"
    >
      <v-row class="d-none d-lg-flex d-xl-flex">
        <img
          :src="require('~/assets/mypic.jpg')"
          style="max-width: 50vw; position: fixed; bottom: 0px"
        />
        <div style="position: fixed; top: 1vh; left: 5%; width: 95%">
          <div style="position: relative">
            <div
              style="
                font-size: 9vw;
                color: #ffffff;
                display: inline-block;
                width: initial;
              "
              class="header"
            >
              Welcome to
            </div>
            <div
              style="
                font-size: 9vw;
                color: #bb4f7a;
                display: inline-block;
                padding-left: 0.1em;
              "
              class="header"
            >
              my web
            </div>
            <div
              style="
                background-color: #ffffff;
                height: 73px;
                opacity: 0.86;
                top: 12vw;
                position: absolute;
                left: 46%;
                line-height: 2.5em;
              "
              class="pa-4"
            >
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

            <div
              style="
                background-color: #fbe2e6;
                width: 600px;
                top: 21vw;
                position: absolute;
                left: 53%;
                line-height: 2.5em;
              "
              class="pa-4"
            >
              <h1 style="font-weight: bold; font-size: 42px; color: #bb4f7a">
                Me
              </h1>
              <ul style="margin-top: 20px">
                <li style="color: #bb4f7a">ทุกสิ่งที่ทำไปมีเหตุผลเสมอ</li>
              </ul>
              <ul>
                <li style="color: #bb4f7a">
                  Everything that has been done There is always a reason for it.
                </li>
              </ul>
              <ul>
                <li style="color: #bb4f7a">
                  했던 모든 일에는 항상 이유가 있습니다
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div
          style="
            background-color: #ffffff;
            height: 389px;
            opacity: 0.6;
            top: 20vw;
            left: 48.5%;
            position: absolute;
            line-height: 2.5em;
          "
          class="pa-4"
        ></div>
        <div
          style="
            padding: 5px;
            border: 2px solid white;
            right: -9%;
            bottom: 4vh;
            position: absolute;
          "
        >
          <div
            style="background-color: #ffffff; width: 906px; line-height: 2.5em"
            class="pa-4"
          >
            <v-col cols="12" style="text-align: center">
              <v-btn-toggle v-model="text" tile color="#bb4f7a" group>
                <v-btn
                  style="right: 50%; font-weight: bold"
                  text
                  to="/aboute-me"
                >
                  ABOUT
                </v-btn>

                <v-btn
                  style="right: 35%; font-weight: bold"
                  text
                  to="/work-portfolio-me"
                >
                  WORK
                </v-btn>

                <v-btn
                  style="right: 15%; font-weight: bold"
                  text
                  to="/photos-me"
                >
                  PHOTO
                </v-btn>

                <v-btn
                  style="right: -3%; font-weight: bold"
                  text
                  to="/contact-contact-me"
                >
                  CONTACT
                </v-btn>
              </v-btn-toggle>
            </v-col>
          </div>
        </div>
      </v-row>
      <v-row class="d-lg-none d-xl-none">
        <v-col lg="3" md="3"></v-col>
        <v-col
          lg="6"
          md="6"
          sm="12"
          xs="12"
          align="center"
          style="padding-top: 380px"
        >
          <v-icon x-large class="pb-6"> mdi-lock </v-icon>
          <p class="text-h4" style="color: #bb4f7a">
            Supports screen sizes over 1904 px.
          </p>
        </v-col>
        <v-col lg="3" md="3"></v-col>
      </v-row>
    </div>
    <!-- <div
      style="background-color: #F9D4DB;display;block;height:100vh;overflow: hidden;"
    >
      <v-row>
        <v-col lg="3" md="3"></v-col>
        <v-col
          lg="6"
          md="6"
          sm="12"
          xs="12"
          align="center"
          style="padding-top: 380px"
        >
          <v-icon x-large class="pb-6"> mdi-lock </v-icon>
          <p class="text-h4" style="color: #bb4f7a">
            Supports screen sizes over 1904 px.
          </p>
        </v-col>
        <v-col lg="3" md="3"></v-col>
      </v-row>
    </div> -->
  </div>
</template>

