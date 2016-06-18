const React = require('react');
const KegContainer = require('./components/keg-container.jsx');

const AppContainer = React.createClass({
  getInitialState() {
    return ({
      gaugeValue1: 20,
      gaugeValue2: 35
    });
  },

  componentWillUnmount() {
    // TODO: Fetch kegs from server
  },

  componentDidMount() {
    setInterval(function() {
      this.setState({
        gaugeValue1: this.state.gaugeValue1 + 1,
        gaugeValue2: this.state.gaugeValue2 + 1
      });
    }.bind(this), 2000);
  },

  render() {
    return (
      <div className="keg-container container">
        <div className="title center-align">
          NC <br/> Keg-o-meter
        </div>
        <div className="row">
          <KegContainer guageValue = {this.state.gaugeValue1} guageID = "guageLeft"/>
          <KegContainer guageValue = {this.state.gaugeValue2} guageID = "guageRight"/>
        </div>
        <div className="row">
        </div>
      </div>
    );
  }
});

module.exports = AppContainer;
