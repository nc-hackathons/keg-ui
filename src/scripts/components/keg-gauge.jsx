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
        this.beerGaugeConfigPlus = {
            circleThickness: 0.15, // The outer circle thickness as a percentage of it's radius.
            circleFillGap: 0.05, // The size of the gap between the outer circle and wave circle as a percentage of the outer circles radius.
            circleColor: "#000000", // The color of the outer circle.
            textColor: "#000000", // The color of the value text when the wave does not overlap it.
            waveTextColor: "#ffdb4d", // The color of the value text when the wave overlaps it.
            waveColor: "#ffe680",
            textVertPosition: 0.8,
            waveAnimateTime: 4500,
            waveHeight: 0.3,
            waveCount: 1,
            waveRise: false,
            valueCountUp: false
        };

        this.config1 = liquidFillGaugeDefaultSettings();
        this.config = _.assign(this.config1, this.beerGaugeConfigPlus);
        this.gauge = loadLiquidFillGauge(this.props.gaugeID, this.props.gaugeValue, this.config);
    },
    componentDidUpdate(){
        //this.gauge.update(this.props.gaugeValue);
        if (this.props.isPouring == true){
            d3.select("#" + this.props.gaugeID).html("");
            let newConfig = _.clone(this.config);
            newConfig.waveColor = "#ff3333";
            newConfig.waveAnimateTime = 1000;
            this.gauge = loadLiquidFillGauge(this.props.gaugeID, this.props.gaugeValue, newConfig);
        }
        else{
            d3.select("#" + this.props.gaugeID).html("");
            this.gauge = loadLiquidFillGauge(this.props.gaugeID, this.props.gaugeValue, this.config);
        }
    },
    componentWillUnmount() {
        console.log('unmounting component');
    },
    render() {
        return (
            <div className="gaugeContainer">
                <img className ="responsive-img" src={"./../../media/keg.png"}/>
                <svg className="gauge" id={this.props.gaugeID} width="120px" height="250"></svg>
            </div>
        );
    }
});

module.exports = KegGuage;
