import React, { useState } from 'react';
import NavbarTop from './NavbarTop';

import badgedisabled from '../img/badgedisabled.svg';
import badgeenabled from '../img/badgeenabled.svg';
import lessonicon from '../img/lessonicon.svg';
import lessonicon2 from '../img/lessonicon2.svg';
import trophy from '../img/trophy.svg';
import trophydisabled from '../img/trophydisabled.svg';

let lessoList = [
	{
		id: 0,
		title: 'Basics training',
		badgeImg: badgeenabled,
		lessonImg: lessonicon
	},
	{
		id: 1,
		title: 'Core training',
		badgeImg: badgedisabled,
		lessonImg: lessonicon2
	},
	{
		id: 1,
		title: 'Core training',
		badgeImg: badgedisabled,
		lessonImg: lessonicon2
	},
	{
		id: 1,
		title: 'Core training',
		badgeImg: badgedisabled,
		lessonImg: lessonicon2
	}
];

export default function Dashboard() {
	return (
		<article>
			<header>
				<NavbarTop />
			</header>
			<body>
				<div style={styles.container}>
					<Level />
					{lessoList.map(lesson => (
						<LessonElement
							lessonImg={lesson.lessonImg}
							badge={lesson.badgeImg}
							title={lesson.title}
						/>
					))}
				</div>
				<div style={styles.container}>
					<img
						src={trophy}
						style={{
							height: '20vmin'
						}}
					/>
				</div>
				<div style={styles.container}>
					<Level />
					{lessoList.map(lesson => (
						<LessonElement
							lessonImg={lesson.lessonImg}
							badge={lesson.badgeImg}
							title={lesson.title}
						/>
					))}
				</div>
				<div style={styles.container}>
					<img
						src={trophydisabled}
						style={{
							height: '20vmin'
						}}
					/>
				</div>
			</body>
		</article>
	);
}

function LessonElement(props) {
	return (
		<div style={styles.container}>
			<img
				src={props.lessonImg}
				style={{
					height: '20vmin',
					background: 'aliceblue',
					borderRadius: '50%',
					padding: '20px'
				}}
			/>
			<LessonTitle badge={props.badge} title={props.title} />
		</div>
	);
}

function LessonTitle(props) {
	return (
		<div style={styles.rowContainer}>
			<img
				src={props.badge}
				style={{
					height: '5vmin'
				}}
			/>
			<div style={styles.vl}></div>

			<p
				style={{
					fontWeight: '700',
					color: 'rgb(87, 86, 92)',
					fontFamily: 'din-round, sans-serif',
					margin: '0'
				}}
			>
				{props.title}
			</p>
		</div>
	);
}

function Level(props) {
	return (
		<div style={styles.level}>
			<p
				style={{
					fontWeight: '700',
					color: 'white',
					fontFamily: 'din-round, sans-serif',
					margin: '0'
				}}
			>
				Level 1
			</p>
		</div>
	);
}
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
	},
	rowContainer: {
		height: '100%',
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'top',
		justifyContent: 'center',
		background: 'aliceblue',
		padding: '5px',
		margin: '5px',
		borderTop: '4px solid rgb(135, 102, 250)'
	},
	vl: {
		borderLeft: '3px solid rgb(87, 86, 92)',
		margin: '10px'
		// height: 500px;
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
		height: 'fit-content'
	}
};
// export default Dashboard;