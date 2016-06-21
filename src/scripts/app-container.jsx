const React = require('react');
const KegContainer = require('./components/keg-container.jsx');
const ApiKeg = require('./ApiKeg.jsx');
const axios = require('axios');

const AppContainer = React.createClass({
    getInitialState() {
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

        this.intervalID = setInterval(() => {
            const that = this
            const messageEndpoint = "https://sqs.us-east-1.amazonaws.com/138302240075/keg-o-meter?Action=ReceiveMessage&Version=2012-11-05";
            axios.get(messageEndpoint)
                .then((response) => {
                    const rawBody = response.data.ReceiveMessageResponse.ReceiveMessageResult.messages;
                    //if (rawBody) {
                    if (true) {
                        //const body = JSON.parse(rawBody[0].Body);
//                       console.log(body.subject);
//                       console.log(response);

                        // tapPosition = body.tapPosition
                        // tapNumber = body.tapNumber
                        const tapNumber = 1;
                        //if (body.tapPosition === 'OFF') {// ON or OFF
                        let state;
                        if (true) {
                          ApiKeg.loadAll().then((kegs) => {
                              const totalVolume1 = kegs[0].total_volume;
                              const totalVolume2 = kegs[1].total_volume;

                              state = {
                                  remValue1: kegs[0].batch.volume_remaining,
                                  remValue2: kegs[1].batch.volume_remaining
                              }
                              state[`isPouring${tapNumber}`] = true;
                              that.setState(state);
                          });
                        } else {
                            state[`isPouring${tapNumber}`] = true;
                            that.setState(state);
                        }

                    }
            });
        }, 1000);
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
