import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import logo from '../img/logo.svg';
import profile from '../img/profile.svg';
import level from '../img/level.svg';
import lesson from '../img/lesson.svg';
import course from '../img/course.svg';

function NavbarTop() {
	return (
		<Navbar style={styles.navBox}>
			<Navbar.Brand>
				<Link to="/dashboard">
					{/* <img
						src={logo}
						className="App-logo"
						alt="logo"
						style={styles.navElement}
					/> */}
					<Dropdown>
						<Dropdown.Toggle
							id="dropdown-basic"
							variant="link"
							style={{ color: '#d9e0e6', fontSize: '2rem' }}
						>
							<img src={course} style={styles.navElement} />
						</Dropdown.Toggle>
						<Dropdown.Menu>
							<Dropdown.Item href="#/action-1">Arabic</Dropdown.Item>
							<Dropdown.Item href="#/action-3">Programming</Dropdown.Item>
							<Dropdown.Item href="#/action-1">Jurisprudence</Dropdown.Item>
							<Dropdown.Item href="#/action-2">Linear Algebra</Dropdown.Item>
						</Dropdown.Menu>
					</Dropdown>
				</Link>
			</Navbar.Brand>
			<Navbar.Toggle />
			<Navbar.Collapse className="justify-content-end">
				{/* <Dropdown>
					<Dropdown.Toggle
						id="dropdown-basic"
						variant="link"
						style={{ color: '#d9e0e6', fontSize: '2rem' }}
					>
						<img src={course} style={styles.navElement} />
					</Dropdown.Toggle>
					<Dropdown.Menu>
						<Dropdown.Item href="#/action-1">Arabic</Dropdown.Item>
						<Dropdown.Item href="#/action-3">Programming</Dropdown.Item>
						<Dropdown.Item href="#/action-1">Jurisprudence</Dropdown.Item>
						<Dropdown.Item href="#/action-2">Linear Algebra</Dropdown.Item>
					</Dropdown.Menu>
				</Dropdown> */}
				{/* <div style={styles.vl}></div> */}

				<img src={lesson} style={styles.navElement} />
				<img src={level} style={styles.navElement} />
				<Dropdown>
					<Dropdown.Toggle
						id="dropdown-basic"
						variant="link"
						style={{ color: '#d9e0e6', fontSize: '2rem' }}
					>
						<img src={profile} style={styles.navElement} />
					</Dropdown.Toggle>
					<Dropdown.Menu>
						<Dropdown.Item href="#/action-1">My profile</Dropdown.Item>
						<Dropdown.Item href="#/action-3">Settings</Dropdown.Item>
					</Dropdown.Menu>
				</Dropdown>
			</Navbar.Collapse>
		</Navbar>
	);
}

const styles = {
	defaultFontFamily: {
		fontFamily: 'din-round, sans-serif',
	},
	logoText: {
		fontWeight: '700',
		color: 'white',
		verticalAlign: 'middle',
		marginLeft: '5px',
		background: 'rgb(194, 176, 255)',
		padding: '5px',
		borderBottom: '#8766fa 5px solid',
		fontSize: '0.75em',
	},
	navBox: {
		// borderBottom: '2px solid gray',
		background: 'aliceblue',
		boxShadow: '0 2px 4px 0 rgba(0,0,0,.05)',
		padding: '0 !important',
	},
	navElement: {
		height: '7vmin',
		margin: '5px',
	},
	vl: {
		margin: '10px',
		width: '2px',
		height: '4rem',
		background: 'gray',
	},
};

export default NavbarTop;
