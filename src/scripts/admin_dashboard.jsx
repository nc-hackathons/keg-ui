const React = require('react');
const ReactDOM = require('react-dom');
const axios = require('axios');

const AdminDashboard = React.createClass({
  getInitialState: function() {
    return {
      beers: [],
      beer: { id: undefined, name: undefined },
      keg: { id: undefined }
    };
  },

  loadDataFromServer : function() {
    axios.get('http://10.5.50.138:4567/beers').then( function (response) {
      console.log(response);
    }).catch( function (response) {
      console.log(response);
    });
  },

  submitBatchRequest: function() {
    axios.post('http://10.5.50.138:4567/batches', {
      batch: {
        beer: {
          id: this.state.beer.id,
          name: this.state.beer.name
        },
        keg: {
          id: this.state.keg.id
        }
      }
    }).then(function (response) {
      console.log(response);

    }).catch(function (response) {
      console.log(response);
    });
  },

  handleBeerChange: function(e) {
    console.log(e.target.value);
    this.setState({ beer: { name: e.target.value } });
  },

  handleKegChange: function(e) {
    this.setState({ keg: { id: e.target.value } });
  },

  componentDidMount: function() {
    this.loadDataFromServer();
  },

  render: function() {
    return (
      <div className="adminDashboard">
        This is the Admin Dashboard
        <form className="admin_form">
          <select>

          </select>
          <label>beer</label>
          <input
            type="text"
            value={this.state.beer.name || ''}
            onChange={this.handleBeerChange}
          />
          <label>keg</label>
          <input
            type="text"
            value={this.state.keg.id || ''}
            onChange={this.handleKegChange}
          />
          <input type="submit" value="Post" />
        </form>
      </div>
    );
  }
});

module.exports = AdminDashboard;
