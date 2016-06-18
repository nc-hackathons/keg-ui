const React = require('react');
const Pour = require('./pour.jsx')

const Batch = React.createClass({
  propTypes: {
    pours: React.PropTypes.array
  },

  getDefaultProps() {
    return {
      pours: []
    };
  },

  render() {
    let volumePoured = 0;
    this.props.pours.forEach((pour) => {
      volumePoured += pour.volumePoured;
    });

    return (
      <div className="batch">
        Volume Poured: { volumePoured } ml
        <ul>
        {
          this.props.pours.map((pour, i) => {
            return (
              <Pour  key={ i } volumePoured={ pour.volumePoured } />
            )
          })
        }
        </ul>
      </div>
    );
  }
});

module.exports = Batch;
