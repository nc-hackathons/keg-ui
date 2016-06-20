const React = require('react');
const KegContainer = require('./components/keg-container.jsx');

const AppContainer = React.createClass({
    getInitialState() {
        return ({
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
        this.intervalID = setInterval(function () {
            this.setState({
                remValue1: this.state.remValue1 + 1,
                remValue2: this.state.remValue2 - 1,
                isPouring1: !this.state.isPouring1
            });
        }.bind(this), 2000);
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
                                  gaugeID="gaugeLeft"/>
                    <KegContainer remValue={this.state.remValue2}
                                  totalValue={this.state.totalValue2}
                                  isPouring={this.state.isPouring2}
                                  gaugeID="gaugeRight"
                                  reverse={ true }/>
                </div>
            </div>
        );
    }
});

module.exports = AppContainer;
