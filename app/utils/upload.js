import axios from 'axios';
import _ from 'lodash'

export default async function (url, file, { params, onProgress, onAbort, onTimeout, on } = {}) {
  let r = await axios.get(url, {
    params
  })

  return new Promise((resolve, reject) => {
    var xhr = new XMLHttpRequest();
    xhr._file = file

    xhr.open('PUT', r.data.signed_url, true);

    xhr.onload = function () {
      resolve(xhr.response);
    };
    xhr.onerror = function () {
      reject(xhr.response);
    };

    xhr.onprogress(function (e) {
      var file1Size = this._file;
      let percent = 0

      if (e.loaded <= file1Size) {
        percent = Math.round(e.loaded / file1Size * 100);
      }

      if (e.loaded == e.total) {
        percent = 100
      }

      if (onProgress)
        onProgress.call(this, e, percent)
    })


    if (onAbort)
      xhr.onabort(onAbort)
    if (onTimeout)
      xhr.ontimeout(onTimeout)

    xhr.send(file);
  })
}