const React = require('react');

const Keg = React.createClass({
  getInitialState() {
    return {
      attr: 0,
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
      <div className="keg-container">
        TEST
      </div>
    );
  }
});

module.exports = Keg;
