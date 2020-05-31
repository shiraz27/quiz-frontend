import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Landing from './components/Landing';
import Dashboard from './components/Dashboard';
import Quiz from './components/Quiz';
import Profile from './components/Profile';

function App() {
	return (
		<Router>
			<Switch>
				<Route path="/quiz">
					<Quiz />
				</Route>
				<Route path="/dashboard">
					<Dashboard />
				</Route>
				<Route path="/">
					<Landing />
				</Route>
				<Route path="/me">
					<Profile />
				</Route>
			</Switch>
		</Router>
	);
}
export default App;

{
	/* <div className="App">
<header className="App-header">
  <img src={logo} className="App-logo" alt="logo" />
  <p>
    Edit <code>src/App.js</code> and save to reload.
  </p>
  <a
    className="App-link"
    href="https://reactjs.org"
    target="_blank"
    rel="noopener noreferrer"
  >
    Learn React
  </a>
</header>
</div> */
}
