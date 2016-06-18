const React = require('react');
const KegGuage = require('./keg-guage.jsx');


const KegContainer = React.createClass({

    componentDidMount() {
    },
    componentWillUnmount() {
    },
    render() {
        return (
            <div className="kegContainer col s6">
                <div className="row">
                    <div className="kegGuage col s3">
                        <KegGuage guageValue={this.props.guageValue} guageID = {this.props.guageID}/>
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
