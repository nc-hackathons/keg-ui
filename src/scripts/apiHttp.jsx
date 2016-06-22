const axios = require('axios');

const ENDPOINT = 'http://keg.blc-hq.com:5000';

class apiHttp {
  //constructor() {}

  static get(route) {
    return axios.get(`${ENDPOINT}/${route}`).then(({ data }) => {
// console.log(data);
       return data;
    }).catch(() => {
      console.log('oops');
    });
// console.log(response);
  }
};

module.exports = apiHttp;
