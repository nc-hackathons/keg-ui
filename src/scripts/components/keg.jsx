const React = require('react');
const Batch = require('./batch.jsx');
const Pour = require('./pour.jsx');

const Keg = React.createClass({
  propTypes: {
    batch:          React.PropTypes.object,
    name:           React.PropTypes.string,
    startingVolume: React.PropTypes.number.isRequired
  },

  getDefaultProps() {
    return {
      startingVolume: 0
    };
  },

  render() {
    return (
      <div className="keg">
        Name: { this.props.name }
        Starting Volume: { this.props.startingVolume } ml
        <Batch pours={ this.props.batch.pours } />
      </div>
    );
  }
});

module.exports = Keg;
