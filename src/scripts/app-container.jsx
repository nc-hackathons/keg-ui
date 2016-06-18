const React = require('react');
const KegContainer = require('./components/keg-container.jsx');


const AppContainer = React.createClass({

    componentDidMount() {
    },
    componentWillUnmount() {
    },
    render() {
        return (
            <div className="keg-container container">
                <div className="title center-align">
                    NC <br/> Keg-o-meter
                </div>
                <div className="row">
                    <KegContainer guageValue = {50.6} guageID = "guageLeft"/>
                    <KegContainer guageValue = {40.6} guageID = "guageRight"/>
                </div>
            </div>
        );
    }
});

module.exports = AppContainer;
