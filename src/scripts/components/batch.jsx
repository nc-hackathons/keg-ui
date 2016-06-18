const React = require('react');

const Batch = React.createClass({
  propTypes: {
    volumePoured: React.PropTypes.number
  },

  componentWillMount() {
    // calculate volume poured
  },

  render() {
    return (
      <div className="batch">
        Volume Poured: { this.props.volumePoured } ml
      </div>
    );
  }
});

module.exports = Batch;
