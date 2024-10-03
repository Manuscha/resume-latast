<template>
  <v-app dark style="max-height: 100vh">
    <v-main>
      <nuxt />
    </v-main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: "mdi-apps",
          title: "Welcome",
          to: "/",
        },
        {
          icon: "mdi-chart-bubble",
          title: "Inspire",
          to: "/inspire",
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: "Vuetify.js",
    };
  },
};
</script>
<style>
@font-face {
  font-family: "VTKS WORKER";
  src: url("/VTKS WORKER.ttf");
}
@font-face {
  font-family: "gothic";
  src: url("/gothic.ttf");
}
html {
  overflow: hidden; /* Hide scrollbars */
}
* {
  font-family: "gothic";
}
.header {
  font-family: "VTKS WORKER";
}
</style>