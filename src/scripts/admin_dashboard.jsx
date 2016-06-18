const React = require('react');
const ReactDOM = require('react-dom');
const axios = require('axios');

const Beer = require('./components/beer.jsx');
const Batch = require('./components/batch.jsx');
const Keg = require('./components/keg.jsx');
const Pour = require('./components/pour.jsx');

const AdminDashboard = React.createClass({
  render: function() {
    return (
      <div className="adminDashboard">
        This is the Admin Dashboard
        <BeerList />
        <AddNewKeg />
      </div>
    );
  }
});

const BeerEntry = React.createClass({
  onClickFunction: function(){
    console.log('clicked!');
  },
  render: function() {
    return (
      <div className="row">
        <div className="col s12 m6">
          <div className="card blue-grey darken-1">
            <div className="card-content white-text">
              <span className="card-title">{this.props.name}</span>
              <p>{this.props.description}</p>
            </div>
            <div className="card-action">
              <a className="waves-effect waves-light btn" onClick={this.onClickFunction}>Vote for this beer</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

const AddNewKeg = React.createClass({
  getInitialState: function() {
    return {beerName: '', kegId: ''};
  },

  submitBatchRequest: function() {
    axios.post('http://10.5.50.138:4567/batches', {
      batch: {
        beer: {
          name: this.state.beerName
        },
        keg: {
          id: this.state.kegId
        }
      }
    }).then(function (response) {
      console.log(response);

    }).catch(function (response) {
      console.log(response);
    });
  },

  submitNewKeg: function() {
    submitBatchRequest();
    console.log(this.state.beerName);
    console.log(this.state.kegId);
    console.log('clicked!');
  },
  handleBeerNameChange: function(e){
    this.setState({beerName: e.target.value});
  },
  handleKegIdChange: function(e){
    this.setState({kegId: e.target.kegId});
  },
  render: function(){
    return (
      <div className="row">
         <form className="col s12" onSubmit={this.submitNewKeg}>
           <div className="row">
             <div className="input-field col s6">
               <input
                 value={this.state.beerName}
                 onChange={this.handleBeerNameChange}
                 id="beer_name"
                 type="text"
                 className="validate"
               />
               <label for="add_keg">Beer Name</label>
             </div>
             <div className="input-field col s6">
               <input
                 value={this.state.kegId}
                 onChange={this.handleKegIdChange}
                 id="volume"
                 type="text"
                 className="validate"
               />
             <label for="volume">Left or Right Keg</label>
            </div>
           </div>
           <button className="btn waves-effect waves-light" type="submit" name="action">
             Add New Keg
           </button>
         </form>
       </div>
    )
  }
})


const BeerList = React.createClass({
  getInitialState: function() {
    return {data: []};
  },

  loadDataFromServer : function() {
    axios.get('http://10.5.50.138:4567/beers').then( function (response) {
      this.setState({data: response});
    }).catch( function (response) {
      console.log(response);
    });
  },

  componentDidMount: function() {
    this.loadDataFromServer();
  },

  render: function() {
    let data = this.state.data;

    const beerNodes = data.map(function(beer) {
      return (
        <BeerEntry name={beer.name} description={beer.description} key={beer.id} />
      );
    });
    return (
      <div className="beerList">
          {beerNodes}
      </div>
    );
  }
});

module.exports = AdminDashboard;
