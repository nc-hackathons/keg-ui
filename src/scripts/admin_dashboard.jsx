const React = require('react');
const ReactDOM = require('react-dom');
const axios = require('axios');

const AdminDashboard = React.createClass({
  loadDataFromServer : function() {
    axios.get('http://10.5.50.138:4567/beers').then( function (response) {
      console.log(response)
    }).catch( function (response) {
      console.log(response)
    });
  },

  getInitialState: function() {
    return {data: []};
  },

  componentDidMount: function() {
    this.loadDataFromServer();
  },

  render: function() {
    return (
      <div className="adminDashboard">
        This is the Admin Dashboard
      </div>
    );
  }
});

module.exports = AdminDashboard;
