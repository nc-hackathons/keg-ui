const apiHttp = require('./apiHttp.jsx');

class ApiKeg {
  //constructor() {}

  static loadAll() {
    return apiHttp.get('kegs');
    console.log(response);
  }
};
module.exports = ApiKeg;
