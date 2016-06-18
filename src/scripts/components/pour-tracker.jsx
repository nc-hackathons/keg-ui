const React = require('react');

const PourTracker = React.createClass({
  propTypes: {
    data: React.PropTypes.array
  },

  getDefaultProps() {
    return {
      data: []
    };
  },

  listPour(pours) {
    return pours.map((pour, i) => {
      return (
        <p>{ pour.volumePoured }</p>
      )
    });
  },

  render() {
    return (
      <div className="pourTracker">
        {
          this.props.data.map((kegData, i) => {
            listPour(kegData.pours)
          })
        }
      </div>
    );
  }
});

module.exports = PourTracker;
