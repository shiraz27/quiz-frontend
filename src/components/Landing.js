import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function Landing() {
	return (
		<div>
			<h2>Landing</h2>
			<nav>
				<ul>
					<li>
						<Link to="/">Landing</Link>
					</li>
					<li>
						<Link to="/dashboard">Dashboard</Link>
					</li>
					<li>
						<Link to="/course">Course</Link>
					</li>
					<li>
						<Link to="/quiz">Quiz</Link>
					</li>
				</ul>
			</nav>
		</div>
	);
}

export default Landing;
