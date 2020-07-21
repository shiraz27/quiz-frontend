import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import Landing from './components/Landing';
import Dashboard from './components/Dashboard';
import Quiz from './components/Auiz';
import Profile from './components/Profile';
import Course from './components/course';

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
				<Route exact path="/">
					<Landing />
				</Route>
				<Route path="/me">
					<Profile />
				</Route>
				{/* <Route path="/login">
					<Profile />
				</Route> */}
				{/* <Route path="/register">
					<Profile />
				</Route> */}
				{/* <Route path="/resetpassword">
					<Profile />
				</Route> */}
				{/* <Route path="/course:id"> */}
				<Route path="/course">
					<Course />
				</Route>
				{/* <Route path="/string/string:name">
					<Dashboard />
				</Route> */}

				{/* <Route path="/course:id/lesson:id">
					<Dashboard />
				</Route> */}
				{/* <Route path="/me">
					<Profile />
				</Route> */}
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
