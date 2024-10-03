import axios from 'axios';
import _ from 'lodash'

const instance = axios.create({})
instance.interceptors.request.use(function (config) {
  let jwtToken = sessionStorage.getItem('jwtToken') || localStorage.getItem('jwtToken')

  if (jwtToken)
    config.headers['Authorization'] = 'Bearer ' + jwtToken

  return config;
}, function (error) {
  return Promise.reject(error);
});

instance.interceptors.response.use((response) => {
  return response;
}, async function (error) {
  if (_.get(error, 'response.status') === 401) {
    window.location = '/login'
  } else if (_.get(error, 'response.status') === 404) {
    return Promise.reject(error, error.response);
  } else {
    if (error)
      vPopup(_.get(error, 'response.data.message') || _.get(error, 'response.data.error') || _.get(error, 'response.data'))
  }

  // window.vPopup && await vPopup(error.response.message)
  return Promise.reject(error, error.response);
});

instance.CancelToken = axios.CancelToken

export default instance

export const uploadVideo = instance.uploadVideo = async function (file, {
  commit,
  video,
  cancelToken,
  dispatch
}) {
  let formData = new FormData();

  formData.append("file", file);

  let r = await instance.post(
    `${setting.file_serve_url}/api/videos/upload`,
    formData, {
    headers: {
      "Content-Type": "multipart/form-data"
    },
    onUploadProgress({
      loaded,
      total
    }) {
      const percentage = parseFloat((loaded / total * 100).toFixed(2))
      video.percentage = percentage
      commit('video', {
        id: video.id,
        percentage
      })
      commit('percentage', percentage)
    },
    cancelToken: cancelToken && cancelToken.token
  }
  );

  return {
    sourceUrl: r.data.source_url,
    baseUrl: r.data.base_url,
    id: r.data.id
  }
}

export const upload = async function (url, file) {
  let r = await instance.get(url, {
    params: {
      type: file.type
    }
  })
  return new Promise((resolve, reject) => {
    var xhr = new XMLHttpRequest();
    xhr.open('PUT', r.data.SignedUrl, true);
    xhr.onload = function () {
      resolve(xhr.response);
    };
    xhr.onerror = function () {
      reject(xhr.response);
    };
    xhr.send(file);
  })
}
