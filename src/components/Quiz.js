import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProgressBar from 'react-animated-progress-bar';
import { IoMdClose, IoIosCheckmark, IoIosClose } from 'react-icons/io';
import '../App.css';
import { Modal, Button } from 'react-bootstrap/';

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
				skippable: true
			},
			answerList: [
				{
					id: 0,
					text: 'answer 1',
					videoLink: 'https://www.youtube.com/embed/A9gw8fRr87o',
					type: 'video',
					correct: true
				},
				{
					id: 1,
					text: 'answer 2',
					videoLink: 'https://www.youtube.com/embed/TVKfpKXS0Cg',
					imageLink: 'badgedisabled',
					type: 'video',
					correct: true
				},
				{
					id: 2,
					text: 'answer 3',
					videoLink: '',
					imageLink:
						'https://www.elprocus.com/wp-content/uploads/2014/03/circuits.gif',
					type: 'image',
					correct: false
				},
				{
					id: 3,
					text:
						'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit. Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.',
					videoLink: '',
					imageLink: '',
					type: '',
					correct: true
				}
			],
			level: {
				id: '',
				title: '',
				difficulty: '',
				accuracyRate: '',
				reminderDate: '',
				order: '' //an infinite incremental integer, ascendant. marking how many levels
			},
			course: {
				id: '',
				title: '',
				accuracyRate: '',
				order: '' //an infinite incremental integer
			}
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
				skippable: true
			},
			answerList: [
				{
					id: 0,
					text: 'answer 1 - Q2',
					videoLink: 'https://www.youtube.com/embed/A9gw8fRr87o',
					type: 'video',
					correct: true
				},
				{
					id: 1,
					text: 'answer 2 - Q2',
					videoLink: 'https://www.youtube.com/embed/TVKfpKXS0Cg',
					imageLink: 'badgedisabled',
					type: 'video',
					correct: false
				},
				{
					id: 2,
					text: 'answer 3 - Q2',
					videoLink: '',
					imageLink:
						'https://www.elprocus.com/wp-content/uploads/2014/03/circuits.gif',
					type: 'image',
					correct: true
				},
				{
					id: 3,
					text:
						' - Q2 Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit. Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.',
					videoLink: '',
					imageLink: '',
					type: '',
					correct: true
				}
			],
			level: {
				id: '',
				title: '',
				difficulty: '',
				accuracyRate: '',
				reminderDate: '',
				order: '' //an infinite incremental integer, ascendant. marking how many levels
			},
			course: {
				id: '',
				title: '',
				accuracyRate: '',
				order: '' //an infinite incremental integer
			}
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
				skippable: true
			},
			answerList: [
				{
					id: 0,
					text: 'answer 1 - Q3',
					videoLink: 'https://www.youtube.com/embed/A9gw8fRr87o',
					type: 'video',
					correct: true
				},
				{
					id: 1,
					text: 'answer 2 - Q3',
					videoLink: 'https://www.youtube.com/embed/TVKfpKXS0Cg',
					imageLink: 'badgedisabled',
					type: 'video',
					correct: true
				},
				{
					id: 2,
					text: 'answer 3 - Q3',
					videoLink: '',
					imageLink:
						'https://www.elprocus.com/wp-content/uploads/2014/03/circuits.gif',
					type: 'image',
					correct: false
				},
				{
					id: 3,
					text:
						' - Q3 Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit. Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.',
					videoLink: '',
					imageLink: '',
					type: '',
					correct: false
				}
			],
			level: {
				id: '',
				title: '',
				difficulty: '',
				accuracyRate: '',
				reminderDate: '',
				order: '' //an infinite incremental integer, ascendant. marking how many levels
			},
			course: {
				id: '',
				title: '',
				accuracyRate: '',
				order: '' //an infinite incremental integer
			}
		}
	];

	const [currentQuestion, setCurrentQuestion] = useState(questionBankApi[0]);
	const [number, setNumber] = useState(0);

	const [correctMe, setCorrectMe] = useState(false);

	const handleCorrectMe = () => setCorrectMe(true);

	const [next, setNext] = useState(false);

	const [clear, setClear] = useState(!next);

	useEffect(() => {}, []);
	return (
		<div>
			<div style={styles.container}>
				<ProgressBar
					width="50vw"
					height="1.2rem"
					rect
					fontColor="#d9e0e6"
					percentage="90"
					rectPadding="1px"
					rectBorderRadius="20px"
					trackPathColor="transparent"
					bgColor="#333333"
					trackBorderColor="#d9e0e6"
					fontSize="1rem"
				/>
				<Link to="/dashboard">
					<IoMdClose style={styles.IoMdClose} />
				</Link>
				{questionBankApi.length > 0 && number <= questionBankApi.length && (
					<>
						<h1 style={styles.question}>{currentQuestion.details.title}</h1>
						{currentQuestion.answerList.map(answer => {
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
										showNext={clear}
									/>
								</>
							);
						})}
					</>
				)}
				<button
					style={styles.check}
					onClick={() => {
						if (number + 2 <= questionBankApi.length) {
							handleCorrectMe();
							setNext(true);
						}
					}}
				>
					<p style={styles.checkText}>Check</p>
				</button>
				{correctMe && (
					<button
						variant="success"
						// style={styles.check}
						onClick={() => {
							if (number + 2 <= questionBankApi.length) {
								setCorrectMe(false);
								setCurrentQuestion(questionBankApi[number + 1]);
								setNumber(number + 1);
							}
						}}
					>
						<p style={styles.checkText}>Next</p>
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
	// if (props.showNext) setChecked(false);
	return (
		<>
			<button
				style={
					checked || (props.showCorrect && props.next)
						? styles.answerChecked
						: styles.answer
				}
				onClick={handleShow}
			>
				{props.showCorrect &&
					(checked === props.correct ? (
						<IoIosCheckmark style={styles.correct} />
					) : (
						<IoIosClose style={styles.incorrect} />
					))}
				<p style={styles.answerText}>{props.sub}</p>
			</button>
			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton></Modal.Header>
				<Modal.Body>
					<p>{props.answer}</p>

					{props.type === 'video' && (
						<iframe
							width="100%"
							height="100%"
							src={props.videoLink}
							frameborder="0"
							allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
							allowfullscreen
							frameborder="0"
							allowFullScreen={true}
							webkitallowfullscreen={true}
							mozallowfullscreen={true}
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
							backgroundColor: '#28a745',
							borderWidth: '2px 2px 6px',
							borderStyle: 'solid',
							borderColor: '#24913d',
							borderRadius: '16px'
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
							backgroundColor: '#dc3545',
							borderWidth: '2px 2px 6px',
							borderStyle: 'solid',
							borderColor: '#b1313d',
							borderRadius: '16px'
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
		fontWeight: '700',
		color: 'rgb(87, 86, 92)',
		fontSize: '2rem',
		marginTop: '4rem'
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
		borderRadius: '16px'
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
		borderRadius: '16px'
	},
	answerText: {
		color: 'rgb(87, 86, 92)',
		fontFamily: 'din-round, sans-serif',
		margin: '0',
		fontSize: '1rem'
	},
	check: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		background: 'rgb(245, 220, 72)',
		padding: '5px',
		margin: '1rem',
		borderRight: '4px solid rgb(237, 186, 67)',
		borderBottom: '4px solid rgb(237, 186, 67)',
		borderRadius: '5%',
		position: 'absolute',
		bottom: '0',
		height: 'fit-content',
		width: 'fit-content',
		marginBottom: '2rem'
	},
	checkText: {
		fontWeight: '700',
		color: 'white',
		fontFamily: 'din-round, sans-serif',
		margin: '0',
		paddingTop: '0.25rem',
		paddingBottom: '0.25rem',
		paddingLeft: '2rem',
		paddingRight: '2rem'
	},
	hl: {
		border: '1px solid #d9e0e6ff',
		width: '100%',
		marginTop: '4rem'
	},
	IoMdClose: {
		position: 'absolute',
		left: 0,
		top: 0,
		color: '#d9e0e6',
		fontSize: '3rem',
		margin: '1rem'
	},
	imageLink: {
		width: '100%',
		height: '100%'
	},
	correct: {
		color: 'green',
		fontSize: '30px'
	},
	incorrect: {
		color: 'red',
		fontSize: '30px'
	}
};
