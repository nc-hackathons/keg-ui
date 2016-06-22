const React = require('react');
const KegContainer = require('./components/keg-container.jsx');
const ApiKeg = require('./ApiKeg.jsx');
const axios = require('axios');

const AppContainer = React.createClass({
    getInitialState() {
        const socket = io.connect('http://keg.blc-hq.com:5000');
        socket.on('pour_event', (data) => {
            const keg = data.keg;
            const tapPosition = data.tap_position;

            let state = this.state;
            if (tapPosition === 'OFF') {
              ApiKeg.loadAll().then((kegs) => {
                  state = {
                      remValue1: kegs[0].batch.volume_remaining,
                      remValue2: kegs[1].batch.volume_remaining
                  }
                  state[`isPouring${keg}`] = false;
                  this.setState(state);
              });
            } else {
                state[`isPouring${keg}`] = true;
                this.setState(state);
            }
        });

        return ({
            beer1: {},
            beer2: {},
            remValue1: 20,
            remValue2: 50,
            isPouring1: false,
            isPouring2: false,
            totalValue1: 100,
            totalValue2: 100
        });
    },

    componentWillUnmount() {
        // TODO: Fetch kegs from server
    },

    componentDidMount() {
        ApiKeg.loadAll().then((kegs) => {
            const totalVolume1 = kegs[0].total_volume;
            const totalVolume2 = kegs[1].total_volume;

            this.setState({
                beer1: kegs[0].batch.beer,
                beer2: kegs[1].batch.beer,
                totalValue1: totalVolume1,
                totalValue2: totalVolume2,
                remValue1: kegs[0].batch.volume_remaining,
                remValue2: kegs[1].batch.volume_remaining
            });
        });

    },

    componentWillUnmount() {
        clearInterval(this.intervalID);
    },
    render() {
        return (
            <div className="app-wrapper container">
                <div className="title row center-align">


                    <div className="col s4 offset-s4 titleText">
                        <div className="companyName">NextCapital</div>
                        <div className="heading">
                            <i className="titleIcon fa fa-beer"></i>
                            Keg-o-meter
                        </div>
                    </div>
                </div>
                <div className="row">
                    <KegContainer remValue={this.state.remValue1}
                                  totalValue={this.state.totalValue1}
                                  isPouring={this.state.isPouring1}
                                  beer={this.state.beer1}
                                  gaugeID="gaugeLeft"/>
                    <KegContainer remValue={this.state.remValue2}
                                  totalValue={this.state.totalValue2}
                                  isPouring={this.state.isPouring2}
                                  beer={this.state.beer2}
                                  gaugeID="gaugeRight"
                                  reverse={ true }/>
                </div>
            </div>
        );
    }
});

module.exports = AppContainer;
