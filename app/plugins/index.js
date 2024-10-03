import Vue from 'vue'
import moment from '../utils/moment'
import _ from 'lodash'
import $ from 'jquery'
import numeral from 'numeral'
import marked from 'marked'
import VueMask from 'v-mask'
import phoneFormat from "../utils/phoneFormat";
import '~/assets/variables.scss'
import './i18n'

Vue.config.silent = true
Vue.use(VueMask)

Vue.prototype.moment = window.moment = moment
Vue.prototype.phoneFormat = window.phoneFormat = phoneFormat
Vue.prototype._ = _
Vue.prototype.console = console
Vue.prototype.$ = $
Vue.prototype.numeral = numeral
Vue.prototype.marked = marked
Vue.prototype.empty = (mixed_var) => {
  if (!mixed_var || mixed_var == "0") {
    return true;
  }
  if (typeof mixed_var == "object") {
    for (var k in mixed_var) {
      return false;
    }
    return true;
  }
  return false;
}
window.Vue = Vue
window.$ = $
window.numeral = numeral
window.marked = marked
window.vPopup = alert


window.setting = {}

Object.freeze(window.setting)


import { VueReCaptcha } from "vue-recaptcha-v3";

if (setting.recaptcha__site_key)
  Vue.use(VueReCaptcha, {
    siteKey: setting.recaptcha__site_key,
    loaderOptions: {
      renderParameters: {
        hl: setting.language,
      },
      useRecaptchaNet: true,
      autoHideBadge: true,
    },
  });

// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);

// We listen to the resize event
window.addEventListener('resize', () => {
  // We execute the same script as before
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});
