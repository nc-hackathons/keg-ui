const React = require('react');

const KegGuage = React.createClass({
    getInitialState() {
        return {
            attr: 0,
        };
    },
    advance() {
        console.log('advance');
    },
    componentDidMount() {
        var beerGaugeConfigPlus = {
            circleColor: "#D4AB6A",
            textColor: "#553300",
            waveTextColor: "#805615",
            waveColor: "#AA7D39",
            circleThickness: 0.1,
            circleFillGap: 0.2,
            textVertPosition: 0.8,
            waveAnimateTime: 2000,
            waveHeight: 0.3,
            waveCount: 1
        };

        var config1 = liquidFillGaugeDefaultSettings();
        var config = _.assign(config1, beerGaugeConfigPlus);
        var gauge3 = loadLiquidFillGauge(this.props.gaugeID, this.props.gaugeValue, config);
    },
    componentWillUnmount() {
        console.log('unmounting component');
    },
    render() {
        return (
            <div className="keg-guage">
                <svg id={this.props.gaugeID} width="97%" height="250"></svg>
            </div>
        );
    }
});

module.exports = KegGuage;
