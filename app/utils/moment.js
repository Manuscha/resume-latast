import moment from 'moment-timezone'
import _ from 'lodash'

moment.locale(_.get(window, 'setting.language', 'th'))

moment.prototype.format = ((__super) => {
  return function (format = 'YYYY-MM-DD') {
    if (_.get(window, 'setting.language') == 'th') {
      const f = {
        LT: 'H:mm',
        LTS: 'H:mm:ss',
        L: 'DD/MM/YYYY',
        LL: 'D MMMM YYYY',
        LLL: 'D MMMM YYYY เวลา H:mm',
        LLLL: 'วันddddที่ D MMMM YYYY เวลา H:mm'
      }

      format = f[format.toUpperCase()] || format

      const year = this.get('year')

      format = format.replace(/YYYY/gm, year + 543)
      format = format.replace(/YY/gm, (year + 543) % 100)
    }

    return __super.apply(this, [format, 'th'])
  }
})(moment.prototype.format)

export default moment