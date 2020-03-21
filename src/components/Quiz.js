import React, { useState } from 'react';
import NavbarTop from './NavbarTop';
import ProgressBar from 'react-animated-progress-bar';
import '../App.css';
export default function Quiz() {
	return (
		<div>
			<NavbarTop />
			<div style={styles.container}>
				<Progress />
			</div>
		</div>
	);
}

//refactor this with hooks/state
//if screen width changes, flip mobile horizontally
function Progress(props) {
	return (
		<div style={styles.container}>
			{window.screen.width < 1000 ? (
				<ProgressBar
					width="300px"
					height="10px"
					rect
					fontColor="#d9e0e6"
					percentage="90"
					rectPadding="1px"
					rectBorderRadius="20px"
					trackPathColor="transparent"
					bgColor="#333333"
					trackBorderColor="#d9e0e6"
				/>
			) : (
				<ProgressBar
					width="50rem"
					height="1.2rem"
					rect
					fontColor="#d9e0e6"
					percentage="90"
					rectPadding="1px"
					rectBorderRadius="20px"
					trackPathColor="transparent"
					bgColor="#333333"
					trackBorderColor="#d9e0e6"
				/>
			)}
		</div>
	);
}
//CSS styles
const styles = {
	defaultFontFamily: {
		fontFamily: 'din-round, sans-serif'
	},
	lessonElement: {
		height: '15vmin'
	},
	container: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		fontSize: 'calc(10px + 2vmin)',
		margin: '15px'
	}
};
