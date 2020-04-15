import React, { useState } from 'react';

//packages
import { Link } from 'react-router-dom';

//components
import NavbarTop from './NavbarTop';

//resources
import badgedisabled from '../img/badgedisabled.svg';
import badgeenabled from '../img/badgeenabled.svg';
import lessonicon from '../img/lessonicon.svg';
import lessonicon2 from '../img/lessonicon2.svg';
import trophyenabled from '../img/trophy.svg';
import trophydisabled from '../img/trophydisabled.svg';
import level from '../img/level.svg';
import blank from '../img/blank.svg';

//data
let lessoList = [
	{
		id: 0,
		title: 'Basics training',
		badgeImg: badgeenabled,
		lessonImg: lessonicon,
	},
	{
		id: 1,
		title: 'Core training',
		badgeImg: badgedisabled,
		lessonImg: lessonicon2,
	},
	{
		id: 1,
		title: 'Intermediate training',
		badgeImg: badgedisabled,
		lessonImg: lessonicon2,
	},
	{
		id: 1,
		title: 'Advanced training',
		badgeImg: badgedisabled,
		lessonImg: lessonicon2,
	},
];

export default function Dashboard() {
	return (
		<div>
			<NavbarTop />
			<body style={{ background: 'white' }}>
				<br />
				<div style={{ position: 'absolute', right: 0 }}>
					<LevelElement
						// lessonImg={lesson.lessonImg}
						badge={level}
						title="Test Level"
						number="1"
					/>
				</div>
				<div style={{ position: 'absolute', left: 0 }}>
					<LevelElement
						// lessonImg={lesson.lessonImg}
						badge={level}
						title="Test all levels"
						number="9"
						type="all"
					/>
				</div>
				<div style={styles.container}>
					<Level level="Level 1" />
					{lessoList.map((lesson) => (
						<Link to="/quiz/maths/1/1">
							{/* we'll be able to retrieve this data and fetch the adequate
							resources */}
							<LessonElement
								lessonImg={lesson.lessonImg}
								badge={lesson.badgeImg}
								title={lesson.title}
							/>
						</Link>
					))}
				</div>
				<Trophy won={true} />
				<div style={{ position: 'absolute', right: 0 }}>
					<LevelElement
						// lessonImg={lesson.lessonImg}
						badge={level}
						title="Test Level"
						number="2"
					/>
				</div>
				<div style={styles.container}>
					<Level level="Level 2" />
					{lessoList.map((lesson) => (
						<Link to="/quiz">
							<LessonElement
								lessonImg={lesson.lessonImg}
								badge={lesson.badgeImg}
								title={lesson.title}
							/>
						</Link>
					))}
				</div>
				<Trophy won={false} />
			</body>
		</div>
	);
}

function LessonElement(props) {
	return (
		<div style={styles.lessonDiv}>
			<div style={styles.roundContainer}>
				<img src={props.lessonImg} style={styles.lessonImg} />
			</div>
			<LessonTitle badge={props.badge} title={props.title} />
		</div>
	);
}

function LevelElement(props) {
	const color = props.type === 'all' ? '#f5dc48' : '#8766fa';

	return (
		<div style={styles.levelDiv}>
			<p style={styles.lessonTitle}>
				<span
					// src={blank}
					style={{
						height: '5vmin',
						borderRadius: '50%',
						background: color,
						height: '5vh',
						width: '5vh',
					}}
				>
					<span style={{ color: 'white', margin: '10px' }}>{props.number}</span>
				</span>{' '}
				{props.title}
			</p>
		</div>
	);
}
function LessonTitle(props) {
	return (
		<div style={styles.rowContainer}>
			<img src={props.badge} style={styles.badge} />
			{/* <div style={styles.vl}></div> */}
			<p style={styles.lessonTitle}>{props.title}</p>
		</div>
	);
}

function Level(props) {
	return (
		<div style={styles.level}>
			<p style={styles.levelText}>{props.level}</p>
		</div>
	);
}

function Trophy(props) {
	return (
		<div style={styles.container}>
			{props.won ? (
				<img src={trophyenabled} style={styles.trophy} />
			) : (
				<img src={trophydisabled} style={styles.trophy} />
			)}
		</div>
	);
}

//CSS styles
const styles = {
	defaultFontFamily: {
		fontFamily: 'din-round, sans-serif',
	},
	lessonElement: {
		height: '15vmin',
	},
	container: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		fontSize: 'calc(10px + 2vmin)',
		// margin: '15px',
	},
	lessonDiv: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		fontSize: 'calc(10px + 2vmin)',
		background: 'aliceblue',
		maxWidth: '370px',
		width: '40vw',
		margin: '15px',
		boxShadow: '0 4px 6px 2px rgba(2, 30, 47, 0.03)',
		borderRadius: '4px',
		border: '2px solid gray',
	},
	levelDiv: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		fontSize: 'calc(10px + 2vmin)',
		background: 'aliceblue',
		maxWidth: '370px',
		// width: 'fit-content',
		margin: '15px',
		boxShadow: '0 4px 6px 2px rgba(2, 30, 47, 0.03)',
		borderRadius: '4px',
		border: '2px solid gray',
		// overflow: 'scroll',
		// maxHeight: '122px',
		maxWidth: '370px',
		width: '15vw',
		height: 'fit-content',
		maxHeight: '150px',
		textAlign: 'center',
		padding: '10px',
	},
	levelScroll: {
		overflow: 'scroll',
		height: '100%',
	},
	roundContainer: {
		height: 'fit-content',
		borderRadius: '4px',
		// padding: '20px',
		// background: 'aliceblue',
	},
	rowContainer: {
		height: '100%',
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'top',
		justifyContent: 'center',
		// background: 'aliceblue',
		padding: '5px',
		margin: '5px',
		width: '-webkit-fill-available',
		/* background: aliceblue; */
		borderTop: '2px solid gray',
		// borderTop: '4px solid rgb(135, 102, 250)'
	},
	vl: {
		borderLeft: '3px solid black',
		margin: '10px',
	},
	level: {
		height: '100%',
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
		right: '0',
		height: 'fit-content',
	},
	lessonImg: {
		height: '10vmin',
		margin: '5px',
		// background: 'aliceblue',
		// borderRadius: '50%',
		// border: '10px solid aliceblue',
		// background: '#e0f1ff',
		// padding: '20px',
	},
	levelImg: {
		height: '10vmin',
		// margin: '5px',
		// background: 'aliceblue',
		// borderRadius: '50%',
		// border: '10px solid aliceblue',
		// background: '#e0f1ff',
		// padding: '20px',
	},
	badge: { height: '5vmin' },
	lessonTitle: {
		fontWeight: '500',
		color: 'black',
		fontFamily: 'din-round, sans-serif',
		margin: '0',
		textAlign: 'center',
	},
	trophy: {
		height: '20vmin',
	},
	levelText: {
		fontWeight: '700',
		color: 'white',
		fontFamily: 'din-round, sans-serif',
		margin: '0',
		textAlign: 'center',
	},
};
