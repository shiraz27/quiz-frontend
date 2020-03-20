import React from 'react';
import NavbarTop from './NavbarTop';
import badgedisabled from '../img/badgedisabled.svg';
import lessonicon from '../img/lessonicon.svg';
import '../App.css';

export default function Dashboard() {
	return (
		<article>
			<header>
				<NavbarTop />
			</header>
			<body>
				<div style={styles.container}>
					<LessonElement />
				</div>
			</body>
		</article>
	);
}

function LessonElement() {
	return (
		<div style={styles.container}>
			<img
				src={lessonicon}
				style={{
					height: '20vmin',
					background: '#d9e0e6ff',
					borderRadius: '50%',
					padding: '20px'
				}}
			/>
			<LessonTitle />
		</div>
	);
}

function LessonTitle() {
	return (
		<div style={styles.rowContainer}>
			<image
				src={badgedisabled}
				style={{
					height: '10vmin'
				}}
			/>
			<p
				style={{
					fontWeight: '700',
					color: '#606f7bff',
					fontFamily: 'din-rround, sans-serif'
				}}
			>
				Basics training
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
		minHeight: '50vh',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		fontSize: 'calc(10px + 2vmin)'
	},
	rowContainer: {
		height: '100%',
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'baseline',
		justifyContent: 'center'
	}
};
// export default Dashboard;
