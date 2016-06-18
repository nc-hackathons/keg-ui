const React = require('react');
const KegContainer = require('./components/keg-container.jsx');

const AppContainer = React.createClass({
  getInitialState() {
    return ({
      kegs: []
    });
  },

  fetchData() {
    // TODO: Call API
    /*this.setState({
      kegs:
    });*/
  },

  componentWillUnmount() {
    fetchData();
  },

  componentDidMount() {
    setInterval(function() {
      fetchData();
    }.bind(this), 2000);
  },

  render() {
    return (
      <div className="keg-container container">
        <div className="title center-align">
          NC <br/> Keg-o-meter
        </div>
        <div className="row">
          {
            this.state.kegs.map((keg, i) => {
              <KegContainer remainingVolume={} totalVolume={} isPouring={} beer={} pours={} id={ i } />
            })
          }
        </div>
        <div className="row">
          <PourTracker />
        </div>
      </div>
    );
  }
});

module.exports = AppContainer;
