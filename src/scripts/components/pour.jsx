const React = require('react');

const Pour = React.createClass({
  propTypes: {
    volumePoured:  React.PropTypes.number,
    createdAt:     React.PropTypes.string
  },

  getDefaultProps() {
    return {
      volumePoured: 0,
    };
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
      <div className="pour">
        Volume: {this.props.volumePoured}<br/>
        Created at: {this.props.createdAt}
      </div>
    );
  }
});

module.exports = Pour;
