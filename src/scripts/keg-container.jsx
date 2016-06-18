const React = require('react');
const Keg = require('./components/keg.jsx');

const KegContainer = React.createClass({
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
        <Keg />
        <Keg />
      </div>
    );
  }
});

module.exports = KegContainer;
