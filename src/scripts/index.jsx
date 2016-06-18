const React = require('react');
const ReactDOM = require('react-dom');
const KegContainer = require('./keg-container.jsx');
const AdminDashboard = require('./admin_dashboard.jsx');

var Router = require('react-router').Router
var Route = require('react-router').Route
var Link = require('react-router').Link

ReactDOM.render((
    <Router>
      <Route path="/" component={KegContainer} />
      <Route path="admin_dashboard" component={AdminDashboard} />
    </Router>),
  document.getElementById('main')
);
