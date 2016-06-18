const React = require('react');
const Keg = require('./components/keg.jsx');

const KegContainer = React.createClass({
  render() {
    // TODO: Fetch kegs from server
    const kegs = [{
      batch: {
        pours: [{
          volumePoured: 250
        }]
      },
      name: 'Keg A',
      startingVolume: 1000
    }, {
      batch: {
        pours: [{
          volumePoured: 250
        }, {
          volumePoured: 33
        }]
      },
      name: 'Keg B',
      startingVolume: 1000
    }];

    return (
      <div className="keg-container">
      {
        kegs.map((keg, i) => {
          return (
            <Keg
              key= { i }
              batch={ keg.batch }
              name={ keg.name }
              startingVolume={ keg.startingVolume }
            />
          )
        })
      }
      </div>
    );
  }
});

module.exports = KegContainer;
