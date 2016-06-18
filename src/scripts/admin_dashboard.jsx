const React = require('react');
const ReactDOM = require('react-dom');

const AdminDashboard = React.createClass({
  propTypes: {
    beers: React.PropTypes.array,
    keg: React.PropTypes.object,
    beer: React.PropTypes.object
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
          id: this.props.beer.id,
          name: this.props.beer.name
        },
        keg: {
          id: this.props.keg.id
        }
      }
    }).then(function (response) {
      console.log(response);
    }).catch(function (response) {
      console.log(response);
    });
  },

  getDefaultProps() {
    return {
      beers: [],
      keg: {},
      beer: {}
    };
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
            value={this.props.beer.name}
          />
          <label>keg</label>
          <input
            type="text"
            value={this.props.keg.id}
          />
          <input type="submit" value="Post" />
        </form>
      </div>
    );
  }
});

module.exports = AdminDashboard;
