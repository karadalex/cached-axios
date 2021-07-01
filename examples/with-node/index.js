var axios = require("../../index")

axios.foobar = 5

var axios = require('axios');

var config = {
  method: 'get',
  url: 'https://api.coingecko.com/api/v3/exchange_rates',
  headers: { },
  data: {
    foo: "bar"
  }
};

axios(config)
  .then((res) => {
    console.log(res.data.rates.usd)
  })
  .catch((error) => {
    console.log(error)
  })
