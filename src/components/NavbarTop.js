import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../img/logo.svg';
import profile from '../img/profile.svg';
import level from '../img/level.svg';
import lesson from '../img/lesson.svg';

function NavbarTop() {
	return (
		<Navbar style={styles.navBox}>
			<Navbar.Brand>
				<img src={logo} className="App-logo" alt="logo" />
				<span style={(styles.defaultFontFamily, styles.logoText)}>
					Coffee Quiz
				</span>
			</Navbar.Brand>
			<Navbar.Toggle />
			<Navbar.Collapse className="justify-content-end">
				<img src={lesson} style={styles.navElement} />
				<img src={level} style={styles.navElement} />
				<img src={profile} style={styles.navElement} />
			</Navbar.Collapse>
		</Navbar>
	);
}

const styles = {
	defaultFontFamily: {
		fontFamily: 'din-round, sans-serif'
	},
	logoText: {
		fontWeight: '700',
		color: 'white',
		verticalAlign: 'middle',
		marginLeft: '5px',
		background: 'rgb(194, 176, 255)',
		padding: '5px',
		borderBottom: '#8766fa 5px solid',
		fontSize: '0.75em'
	},
	navBox: {
		borderBottom: '2px solid #d9e0e6ff'
	},
	navElement: {
		height: '9vmin',
		margin: '5px'
	}
};

export default NavbarTop;
