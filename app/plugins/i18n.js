import Vue from 'vue'
// import th from '../locales/th.js'
// import en from '../locales/en.js'
import _ from 'lodash'

const message = Object.freeze({
  // en,
  // th
})

Vue.prototype.$t = window.$t = function (key) {
  return _.get(message, `${_.get(window, 'setting.language')}.${key}`, key)
}
