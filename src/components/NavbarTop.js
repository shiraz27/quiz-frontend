import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import logo from '../img/logo.svg';
import profile from '../img/profile.svg';
import level from '../img/level.svg';
import lesson from '../img/lesson.svg';
import course from '../img/course.svg';
import test from '../img/test.svg';

function NavbarTop() {
	return (
		<div style={styles.navBox}>
			<Dropdown>
				<Dropdown.Toggle
					id="dropdown-basic"
					variant="link"
					style={{ color: '#d9e0e6', fontSize: '2rem' }}
				>
					<img src={course} style={styles.navElement} />
				</Dropdown.Toggle>
				<Dropdown.Menu>
					<Dropdown.Item>My Courses</Dropdown.Item>
					<Dropdown.Divider />
					<Dropdown.Item href="#/action-1">Arabic</Dropdown.Item>
					<Dropdown.Item href="#/action-3">Programming</Dropdown.Item>
					<Dropdown.Item href="#/action-1">Jurisprudence</Dropdown.Item>
					<Dropdown.Item href="#/action-2">Linear Algebra</Dropdown.Item>
				</Dropdown.Menu>
			</Dropdown>
			<Dropdown>
				<Dropdown.Toggle
					id="dropdown-basic"
					variant="link"
					style={{ color: '#d9e0e6', fontSize: '2rem' }}
				>
					<img src={level} style={styles.navElement} />
				</Dropdown.Toggle>
				<Dropdown.Menu>
					<Dropdown.Item>Test levels</Dropdown.Item>
					<Dropdown.Divider />
					<Dropdown.Item href="#/action-1">Beginner Level</Dropdown.Item>
					<Dropdown.Item href="#/action-3">Intermediate Level</Dropdown.Item>
					<Dropdown.Item href="#/action-1">Advanced Level</Dropdown.Item>
				</Dropdown.Menu>
			</Dropdown>
			<Dropdown>
				<Dropdown.Toggle
					id="dropdown-basic"
					variant="link"
					style={{ color: '#d9e0e6', fontSize: '2rem' }}
				>
					<img
						src={test}
						style={{
							height: '8vmin',
							margin: '5px',
						}}
					/>
				</Dropdown.Toggle>
				<Dropdown.Menu>
					<Dropdown.Item href="#/action-2">Test all levels</Dropdown.Item>
				</Dropdown.Menu>
			</Dropdown>
			<Dropdown>
				<Dropdown.Toggle
					id="dropdown-basic"
					variant="link"
					style={{ color: '#d9e0e6', fontSize: '2rem' }}
				>
					<img src={profile} style={styles.navElement} />
				</Dropdown.Toggle>
				<Dropdown.Menu>
					<Dropdown.Item href="/me">My Account</Dropdown.Item>
				</Dropdown.Menu>
			</Dropdown>
		</div>
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
		borderBottom: '2px solid rgb(217, 224, 230)',
		background: 'white',
		// boxShadow: '0 2px 4px 0 rgba(0,0,0,.05)',
		padding: '0 !important',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-evenly',
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
