import React, { useState } from 'react';
import NavbarTop from './NavbarTop';
import ProgressBar from 'react-animated-progress-bar';
import '../App.css';
export default function Quiz() {
	return (
		<div>
			{/* <NavbarTop /> */}
			<div style={styles.container}>
				<Progress />
				<h1 style={styles.question}>Match the pairs 1+1= ?</h1>
				<Answer />
				<Answer />
				<Answer />
				<Answer />
				<Answer />
				<div style={styles.hl} />
				<Check />
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

function Answer(props) {
	return (
		<div style={styles.answer}>
			<p style={styles.answerText}>First answer</p>
		</div>
	);
}
function Check(props) {
	return (
		<div style={styles.check}>
			<p style={styles.checkText}>Check</p>
		</div>
	);
}
//CSS styles
const styles = {
	question: {
		fontFamily: 'din-round, sans-serif',
		fontWeight: '700',
		color: 'rgb(87, 86, 92)',
		fontSize: '1.5rem',
		marginBottom: '4rem'
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
	},
	answer: {
		height: '100%',
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		background: 'white',
		padding: '5px',
		margin: '1rem',
		borderRight: '4px solid #d9e0e6',
		borderBottom: '4px solid #d9e0e6',
		borderRadius: '5%'
	},
	answerText: {
		color: 'rgb(87, 86, 92',
		fontFamily: 'din-round, sans-serif',
		margin: '0',
		fontSize: '0.85rem'
	},
	check: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		background: 'rgb(245, 220, 72)',
		padding: '5px',
		margin: '1rem',
		borderRight: '4px solid rgb(237, 186, 67)',
		borderBottom: '4px solid rgb(237, 186, 67)',
		borderRadius: '5%',
		position: 'absolute',
		bottom: '0',
		right: '0',
		height: 'fit-content',
		width: 'fit-content'
	},
	checkText: {
		fontWeight: '700',
		color: 'white',
		fontFamily: 'din-round, sans-serif',
		margin: '0',
		paddingVertical: '1rem'
	},
	hl: {
		border: '1px solid #d9e0e6ff',
		width: '100%',
		marginTop: '4rem'
	}
};
