const React = require('react');
const ReactDOM = require('react-dom');
const axios = require('axios');

const Beer = require('./components/beer.jsx');
const Batch = require('./components/batch.jsx');
const Keg = require('./components/keg.jsx');
const Pour = require('./components/pour.jsx');

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
  submitNewKeg: function(){
    console.log(this.state.beerName);
    console.log(this.state.kegVolume)
    console.log('clicked!');
  },
  handleBeerNameChange: function(e){
    this.setState({beerName: e.target.value});
  },
  handleKegIdChange: function(e){
    this.setState({kegVolume: e.target.kegId});
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
  render: function() {
    let data = [
      {
        description: "A standard cheap beer",
        name: "Miller Lite",
        key: "nice",
        id: "1"
      },
      {
        description: "Great for a hot day",
        name: "PBR",
        key: "nice2",
        id: "2"
      }
    ]
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
