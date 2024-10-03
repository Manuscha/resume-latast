import en from 'vuetify/src/locale/en.ts'
import th from 'vuetify/src/locale/th.ts'
import $ from 'jquery'

const isDark = window.localStorage.getItem('theme') == 'dark'

if (isDark)
  $('html').addClass('dark')

export default {
  lang: {
    locales: { en, th },
    current: 'th'
  },
  theme: {
    themes: {
      light: {
        primary: '#F7D992', // #E53935
        secondary: '#D4987D', // #FFCDD2
      },
    },
  }
}