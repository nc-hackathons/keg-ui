const React = require('react');
const Batch = require('./batch.jsx');

const Keg = React.createClass({
  propTypes: {
    name:           React.PropTypes.string,
    startingVolume: React.PropTypes.number.isRequired // millileters
  },

  getDefaultProps() {
    return {
      startingVolume: 0
    };
  },

  render() {
    return (
      <div className="keg">
        Starting Volume: { this.props.startingVolume } ml
      </div>
    );
  }
});

module.exports = Keg;
