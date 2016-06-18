const React = require('react');
const KegGuage = require('./keg-guage.jsx');


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
                    <div className="kegLeft col s3">
                        <KegGuage guageValue={50.0} guageID = {"guageLeft"}/>
                    </div>
                    <div className="kegLeft col s6">
                        <div className = "card"></div>
                    </div>
                    <div className="kegLeft col s3">
                        <KegGuage guageValue={60.0} guageID = {"guageRight"}/>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = KegContainer;
