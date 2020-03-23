import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ProgressBar from 'react-animated-progress-bar';
import { IoMdClose } from 'react-icons/io';
import '../App.css';
import { Modal, Button } from 'react-bootstrap/';

let answerList = [
	{
		id: 0,
		text: 'answer 1',
		videoLink: 'https://www.youtube.com/embed/A9gw8fRr87o',
		type: 'video',
		question: ''
	},
	{
		id: 1,
		text: 'answer 2',
		videoLink: 'https://www.youtube.com/embed/TVKfpKXS0Cg',
		imageLink: 'badgedisabled',
		type: 'video'
	},
	{
		id: 2,
		text: 'answer 3',
		videoLink: '',
		imageLink:
			'https://www.elprocus.com/wp-content/uploads/2014/03/circuits.gif',
		type: 'image'
	},
	{
		id: 3,
		text:
			'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit. Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.',
		videoLink: '',
		imageLink: '',
		type: ''
	}
];

export default function Quiz() {
	// const handleShow = () => setShow(true);
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
				<h1 style={styles.question}>Match the pairs 1+1= ?</h1>
				{answerList.map(answer => (
					<Answer
						answer={answer.text}
						videoLink={answer.videoLink}
						imageLink={answer.imageLink}
						type={answer.type}
						// checked={checked}
					/>
				))}
				<div style={styles.hl} />
				<Check />
			</div>
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

function Answer(props) {
	const [checked, setChecked] = useState(false);
	const handleCheckedTrue = () => setChecked(true);
	const handleCheckedFalse = () => setChecked(false);

	//
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<>
			<button
				style={checked ? styles.answerChecked : styles.answer}
				onClick={handleShow}
			>
				<p style={styles.answerText}>First answer</p>
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
							allowFullScreen="true"
							webkitallowfullscreen="true"
							mozallowfullscreen="true"
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
					>
						True
					</Button>
					<Button
						variant="danger"
						onClick={() => {
							handleCheckedFalse();
							handleClose();
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
		padding: '10px',
		margin: '1rem',
		// border: '2px solid #d9e0e6',
		borderTopWidth: '2px',
		borderRightWidth: '2px',
		borderLeftWidth: '2px',
		borderBottomWidth: '6px',
		borderStyle: 'solid',
		borderColor: '#d9e0e6',
		borderRadius: '16px'
	},
	answerChecked: {
		height: '100%',
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		background: '#ddf4ff',
		padding: '10px',
		margin: '1rem',
		borderTopWidth: '2px',
		borderRightWidth: '2px',
		borderLeftWidth: '2px',
		borderBottomWidth: '6px',
		borderStyle: 'solid',
		borderColor: '#1cb0f6',
		borderRadius: '16px'
	},
	answerText: {
		color: 'rgb(87, 86, 92)',
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
	}
};
