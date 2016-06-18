const React = require('react');

const Beer = React.createClass({
  propTypes: {
    id:   React.PropTypes.number,
    name: React.PropTypes.string
  },

  advance() {
    console.log('advance');
  },
  componentDidMount() {
    console.log('mounting component');
  },
  componentWillUnmount() {
    console.log('unmounting component');
  },
  render() {
    return (
      <div className="beer">
        {this.props.name}
      </div>
    );
  }
});

module.exports = Beer;
