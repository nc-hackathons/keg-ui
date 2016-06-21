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
                    <div className="kegGuage col s12">
                        <KegGauge gaugeValue={gaugePercentage} gaugeID = {this.props.gaugeID} isPouring = {this.props.isPouring}/>
                    </div>
                    <div className="stats col s12">
                      <div className = "card-panel grey lighten-2 light">
                        <strong>Beer Name: { _.join(_.words(this.props.beer.name).map((word) => _.capitalize(word)), ' ') }</strong><br />
                        <strong>Remaining Volume: { this.props.remValue.toFixed(2) } ml</strong><br />
                        <strong>Total Volume: { this.props.totalValue.toFixed(2) } ml</strong>
                      </div>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = KegContainer;
