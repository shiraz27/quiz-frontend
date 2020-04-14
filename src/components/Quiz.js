import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
	IoMdClose,
	IoIosCheckmark,
	IoIosClose,
	IoIosArrowForward,
} from 'react-icons/io';
import '../App.css';
import { Modal, Button } from 'react-bootstrap/';
import { Line } from 'rc-progress';
import flag from '../img/flag.svg';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';

export default function Quiz() {
	let questionBankApi = [
		{
			details: {
				id: '',
				title: 'Match the pairs 1+1= ?',
				difficulty: '', //an integer from 1 to 10
				nRepetition: '', //tested or not tested nRepetition > 0
				nCorrect: '',
				accuracyRate: '(nCorrect * 100) / nRepetition', //
				reminderDate: '', //last time revised
				skippable: true,
			},
			answerList: [
				{
					id: 0,
					text: 'answer 1',
					videoLink: 'https://www.youtube.com/embed/A9gw8fRr87o',
					type: 'video',
					correct: true,
				},
				{
					id: 1,
					text: 'answer 2',
					videoLink: 'https://www.youtube.com/embed/TVKfpKXS0Cg',
					imageLink: 'badgedisabled',
					type: 'video',
					correct: true,
				},
				{
					id: 2,
					text: 'answer 3',
					videoLink: '',
					imageLink:
						'https://www.elprocus.com/wp-content/uploads/2014/03/circuits.gif',
					type: 'image',
					correct: false,
				},
				{
					id: 3,
					text:
						'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit. Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.',
					videoLink: '',
					imageLink: '',
					type: '',
					correct: true,
				},
			],
			level: {
				id: '',
				title: '',
				difficulty: '',
				accuracyRate: '',
				reminderDate: '',
				order: '', //an infinite incremental integer, ascendant. marking how many levels
			},
			course: {
				id: '',
				title: '',
				accuracyRate: '',
				order: '', //an infinite incremental integer
			},
		},
		{
			details: {
				id: '',
				title: 'Match the pairs 2*2= ?',
				difficulty: '', //an integer from 1 to 10
				nRepetition: '', //tested or not tested nRepetition > 0
				nCorrect: '',
				accuracyRate: '(nCorrect * 100) / nRepetition', //
				reminderDate: '', //last time revised
				skippable: true,
			},
			answerList: [
				{
					id: 0,
					text: 'answer 1 - Q2',
					videoLink: 'https://www.youtube.com/embed/A9gw8fRr87o',
					type: 'video',
					correct: true,
				},
				{
					id: 1,
					text: 'answer 2 - Q2',
					videoLink: 'https://www.youtube.com/embed/TVKfpKXS0Cg',
					imageLink: 'badgedisabled',
					type: 'video',
					correct: false,
				},
				{
					id: 2,
					text: 'answer 3 - Q2',
					videoLink: '',
					imageLink:
						'https://www.elprocus.com/wp-content/uploads/2014/03/circuits.gif',
					type: 'image',
					correct: true,
				},
				{
					id: 3,
					text:
						' - Q2 Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit. Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.',
					videoLink: '',
					imageLink: '',
					type: '',
					correct: true,
				},
			],
			level: {
				id: '',
				title: '',
				difficulty: '',
				accuracyRate: '',
				reminderDate: '',
				order: '', //an infinite incremental integer, ascendant. marking how many levels
			},
			course: {
				id: '',
				title: '',
				accuracyRate: '',
				order: '', //an infinite incremental integer
			},
		},
		{
			details: {
				id: '',
				title: 'Match the pairs 3/3= ?',
				difficulty: '', //an integer from 1 to 10
				nRepetition: '', //tested or not tested nRepetition > 0
				nCorrect: '',
				accuracyRate: '(nCorrect * 100) / nRepetition', //
				reminderDate: '', //last time revised
				skippable: true,
			},
			answerList: [
				{
					id: 0,
					text: 'answer 1 - Q3',
					videoLink: 'https://www.youtube.com/embed/A9gw8fRr87o',
					type: 'video',
					correct: true,
				},
				{
					id: 1,
					text: 'answer 2 - Q3',
					videoLink: 'https://www.youtube.com/embed/TVKfpKXS0Cg',
					imageLink: 'badgedisabled',
					type: 'video',
					correct: true,
				},
				{
					id: 2,
					text: 'answer 3 - Q3',
					videoLink: '',
					imageLink:
						'https://www.elprocus.com/wp-content/uploads/2014/03/circuits.gif',
					type: 'image',
					correct: false,
				},
				{
					id: 3,
					text:
						' - Q3 Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit. Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.',
					videoLink: '',
					imageLink: '',
					type: '',
					correct: false,
				},
			],
			level: {
				id: '',
				title: '',
				difficulty: '',
				accuracyRate: '',
				reminderDate: '',
				order: '', //an infinite incremental integer, ascendant. marking how many levels
			},
			course: {
				id: '',
				title: '',
				accuracyRate: '',
				order: '', //an infinite incremental integer
			},
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(questionBankApi[0]);
	const [number, setNumber] = useState(0);

	const [correctMe, setCorrectMe] = useState(false);

	const handleCorrectMe = () => setCorrectMe(true);

	const [next, setNext] = useState(false);

	const [progress, setProgress] = useState(0);

	return (
		<div>
			<div style={styles.container}>
				<div style={{ width: '250px' }}>
					<Line
						percent={progress}
						strokeWidth="4"
						strokeColor={
							progress <= 34
								? '#e36464ff'
								: progress <= 67
								? '#f5dc48'
								: '#6ed6d2ff'
						}
					/>
				</div>
				<Link to="/dashboard">
					<IoMdClose style={styles.IoMdClose} />
				</Link>
				{/* <CountdownCircleTimer
					isPlaying
					durationSeconds={180}
					colors={[['#f5dc48']]}
					width="50%"
					height="50%"
				/> */}
				{questionBankApi.length > 0 && number <= questionBankApi.length && (
					<>
						<h1 style={styles.question}>{currentQuestion.details.title}</h1>
						{currentQuestion.answerList.map((answer) => {
							return (
								<>
									<Answer
										sub={
											answer.text.length > 10
												? answer.text.substr(0, 10) + '...'
												: answer.text
										}
										answer={answer.text}
										videoLink={answer.videoLink}
										imageLink={answer.imageLink}
										type={answer.type}
										showCorrect={correctMe}
										correct={answer.correct}
									/>
								</>
							);
						})}
					</>
				)}
				{next !== true && (
					<button
						style={styles.check}
						onClick={() => {
							if (number + 1 <= questionBankApi.length) {
								handleCorrectMe();
								setNext(true);
								setProgress(((number + 1) * 100) / questionBankApi.length);
							}
						}}
					>
						<p style={styles.checkText}>Check</p>
					</button>
				)}
				{correctMe && number + 1 !== questionBankApi.length && (
					<button
						style={styles.next}
						onClick={() => {
							if (number + 1 <= questionBankApi.length) {
								setCorrectMe(false);
								setCurrentQuestion(questionBankApi[number + 1]);
								setNumber(number + 1);
								setNext(false);
							}
						}}
					>
						<p style={styles.checkText}>
							Next
							<span>
								<IoIosArrowForward />
							</span>
						</p>
					</button>
				)}
			</div>
		</div>
	);
}

function Answer(props) {
	const [checked, setChecked] = useState(false);
	const handleCheckedTrue = () => setChecked(true);
	const handleCheckedFalse = () => setChecked(false);

	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	return (
		<>
			<button style={styles.answer} onClick={handleShow}>
				{props.showCorrect &&
					(checked === props.correct ? (
						<IoIosCheckmark style={styles.correct} />
					) : (
						<IoIosClose style={styles.incorrect} />
					))}
				<p style={styles.answerText}>{props.sub}</p>
			</button>
			<Modal show={show} onHide={handleClose}>
				<Modal.Header style={{ padding: '0px !important' }}>
					{props.type === 'image' || props.type === 'video' ? (
						<>
							<img src={flag} style={styles.navElement} />
							<p style={styles.answerTextdeco}>{props.answer}</p>
						</>
					) : (
						<img src={flag} style={styles.navElement} />
					)}
				</Modal.Header>
				<Modal.Body>
					{props.type !== 'image' && props.type !== 'video' && (
						<p style={styles.answerText}>{props.answer}</p>
					)}
					{props.type === 'video' && (
						<iframe
							width="100%"
							height="50%"
							src={props.videoLink}
							// frameborder="0"
							allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
							allowfullscreen
							frameborder="0"
							allowFullScreen={true}
							webkitallowfullscreen={true}
							mozallowfullscreen={true}
							// style={{ position: 'absolute', right: '0', left: '0' }}
						></iframe>
					)}
					{props.type === 'image' && (
						<img src={props.imageLink} style={styles.imageLink} />
					)}
				</Modal.Body>
				<Modal.Footer>
					<Button
						variant="success"
						onClick={() => {
							handleCheckedTrue();
							handleClose();
						}}
						style={{
							color: '#fff',
							backgroundColor: '#6ed6d2ff',
							borderWidth: '2px 2px 6px',
							borderStyle: 'solid',
							borderColor: '#3caea3',
							borderRadius: '16px',
						}}
					>
						True
					</Button>
					<Button
						variant="danger"
						onClick={() => {
							handleCheckedFalse();
							handleClose();
						}}
						style={{
							color: '#fff',
							backgroundColor: '#e36464ff',
							borderWidth: '2px 2px 6px',
							borderStyle: 'solid',
							borderColor: '#dc3030',
							borderRadius: '16px',
						}}
					>
						False
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
}

//CSS styles
const styles = {
	question: {
		fontFamily: 'din-round, sans-serif',
		fontWeight: '500',
		color: 'rgb(87, 86, 92)',
		fontSize: '2rem',
		marginTop: '4rem',
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
		margin: '15px',
	},
	answer: {
		height: '100%',
		width: '15rem',
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		background: 'white',
		padding: '1rem',
		paddingVertical: '2rem',
		margin: '1rem',
		borderTopWidth: '2px',
		borderRightWidth: '2px',
		borderLeftWidth: '2px',
		borderBottomWidth: '10px',
		borderStyle: 'solid',
		borderColor: '#d9e0e6',
		borderRadius: '16px',
	},
	answerChecked: {
		height: '100%',
		width: '15rem',
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		background: '#ddf4ff',
		padding: '1rem',
		paddingVertical: '2rem',
		margin: '1rem',
		borderTopWidth: '2px',
		borderRightWidth: '2px',
		borderLeftWidth: '2px',
		borderBottomWidth: '10px',
		borderStyle: 'solid',
		borderColor: '#1cb0f6',
		borderRadius: '16px',
	},
	answerText: {
		color: 'rgb(87, 86, 92)',
		fontFamily: 'din-round, sans-serif',
		margin: '0',
		fontSize: '1.5rem',
		textAlign: 'center',
	},
	answerTextdeco: {
		color: 'rgb(87, 86, 92)',
		fontFamily: 'din-round, sans-serif',
		margin: '0',
		fontSize: '1.5rem',
		textAlign: 'center',
		// position: 'absolute',
		// right: 0,
		// left: 0
		// borderBottom: '10px solid #8766fa'
	},
	check: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		background: 'rgb(175, 153, 251)',
		padding: '5px',
		margin: '1rem',
		bottom: '0',
		height: 'fit-content',
		width: 'fit-content',
		borderTopWidth: '2px',
		borderRightWidth: '2px',
		borderLeftWidth: '2px',
		borderBottomWidth: '10px',
		borderRadius: '16px',
		borderStyle: 'solid',
		borderColor: 'rgb(155, 127, 250)',
	},
	next: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		background: 'rgb(245, 220, 72)',
		padding: '5px',
		margin: '1rem',
		borderRadius: '5%',
		bottom: '0',
		height: 'fit-content',
		width: 'fit-content',
		marginBottom: '2rem',
		borderTopWidth: '2px',
		borderRightWidth: '2px',
		borderLeftWidth: '2px',
		borderBottomWidth: '10px',
		borderRadius: '16px',
		borderStyle: 'solid',
		borderColor: '#e8d040',
	},

	checkText: {
		fontWeight: '700',
		color: 'white',
		fontFamily: 'din-round, sans-serif',
		margin: '0',
		paddingTop: '0.25rem',
		paddingBottom: '0.25rem',
		paddingLeft: '2rem',
		paddingRight: '2rem',
	},
	hl: {
		border: '1px solid #d9e0e6ff',
		width: '100%',
		marginTop: '4rem',
	},
	IoMdClose: {
		position: 'absolute',
		left: 0,
		top: 0,
		color: '#d9e0e6',
		fontSize: '3rem',
		margin: '1rem',
	},
	imageLink: {
		width: '100%',
		height: '100%',
	},
	correct: {
		color: 'green',
		fontSize: '30px',
	},
	incorrect: {
		color: 'red',
		fontSize: '30px',
	},
	navElement: {
		height: '4rem',
		margin: '5px',
	},
};
