const React = require('react');
const KegGauge = require('./keg-gauge.jsx');


const KegContainer = React.createClass({
    propTypes: {
        gaugeID: React.PropTypes.string,
        remValue:   React.PropTypes.number,
        totalValue: React.PropTypes.number,
        isPouring: React.PropTypes.bool,
        beer: React.PropTypes.object,
        pours: React.PropTypes.array,
        reverse: React.PropTypes.bool
    },
    componentDidMount() {
    },
    componentWillUnmount() {
    },
    render() {
        let gaugePercentage = 100*(this.props.remValue)/(this.props.totalValue);
        return (
            <div className="kegContainer col s6">
                <div className="row">
                    <div className="kegGuage col s3">
                        <KegGauge gaugeValue={gaugePercentage} gaugeID = {this.props.gaugeID} isPouring = {this.props.isPouring}/>
                    </div>
                    <div className="stats col s3">
                        <div className = "card"> blah blah </div>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = KegContainer;
