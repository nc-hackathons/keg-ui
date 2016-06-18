const React = require('react');
const KegContainer = require('./components/keg-container.jsx');


const AppContainer = React.createClass({

    componentDidMount() {
    },
    componentWillUnmount() {
    },
    render() {
        return (
            <div className="app-wrapper container">
                <div className="title row center-align">

                    <div className="col s2 offset-s3 logo">
                        <img className="responsive-img" src="https://pbs.twimg.com/media/CD3-iUqWEAAVBxV.jpg:large"/>
                    </div>
                    <div className = "col s4 titleText">
                        <div className = "companyName" >NC</div>
                        <div className = "heading">Keg-o-meter</div>
                    </div>
                </div>
                <div className="row">
                    <KegContainer gaugeValue={50.6} gaugeID="gaugeLeft"/>
                    <KegContainer gaugeValue={40.6} gaugeID="gaugeRight"/>
                </div>
            </div>
        );
    }
});

module.exports = AppContainer;
