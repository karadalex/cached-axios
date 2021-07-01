var axios = require("axios")

axios.foobar = 2

// Add a request interceptor
axios.interceptors.request.use(function (config) {
  console.log("This is before the request is sent")
  let encodedConfig = JSON.stringify(config)
  if (typeof window == undefined) {
    encodedConfig = btoa(encodedConfig)
  } else {
    encodedConfig = Buffer.from(encodedConfig).toString('base64')
  }
  console.log(encodedConfig)
  // Do something before request is sent
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

// Add a response interceptor
axios.interceptors.response.use(function (response) {
  console.log("This is after a successful response is received")
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  return response;
}, function (error) {
  console.log("This is after an unsuccessful response is received")
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  return Promise.reject(error);
});

module.exports = axios