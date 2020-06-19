import React, { useState, useEffect} from 'react';

//packages
import { Link } from "react-router-dom";
import { Line } from "rc-progress";
import Dropdown from "react-bootstrap/Dropdown";

//components
import NavbarTop from "./NavbarTop";

//resources
import badgedisabled from "../img/badgedisabled.svg";
import badgeenabled from "../img/badgeenabled.svg";
import lessonicon from "../img/lessonicon.svg";
import lessonicon2 from "../img/lessonicon2.svg";
import trophyenabled from "../img/trophy.svg";
import trophydisabled from "../img/trophydisabled.svg";
import level from "../img/level.svg";
import blank from "../img/blank.svg";
import alltest from "../img/alltest.svg";
import test from "../img/test.svg";
import lesson from "../img/lesson.svg";
import readingCourse from "../img/readingcourse.svg";
import vocabCourse from "../img/vocabcourse.svg";

import info from "../img/info.svg";

//data
let lessoList = [
  {
    id: 0,
    title: "Basics training",
    badgeImg: badgeenabled,
    lessonImg: lessonicon,
    answered: true,
  },
  {
    id: 1,
    title: "Core training",
    badgeImg: badgedisabled,
    lessonImg: lessonicon2,
    answered: true,
  },
  {
    id: 1,
    title: "Intermediate training",
    badgeImg: badgedisabled,
    lessonImg: lessonicon2,
    answered: true,
  },
  {
    id: 1,
    title: "Advanced training for everyone",
    badgeImg: badgedisabled,
    lessonImg: lessonicon2,
    answered: false,
  },
];

export default function Dashboard() {
  const [progress, setProgress] = useState(80);
  const [windowWidth, setWidth] = useState(window.innerWidth);
	
	useEffect(() => {
	  const handleResize = () => setWidth(window.innerWidth);
	  window.addEventListener('resize', handleResize);
	  return () => {
		window.removeEventListener('resize', handleResize);
	  };
	});
  return (
    <div>
      <NavbarTop />

      <body style={styles.container}>
        <div style={{ width: "-webkit-fill-available" }}>
          <p
            style={{
              marginTop: "3%",
              fontFamily: "din-round, sans-serif",
              color: "#D0D6DD",
              fontSize: "2rem",
              textAlign: "left",
              marginLeft: "15%",
            }}
          >
            Courses
          </p>
          <hr
            style={{
              borderColor: "#d0d6dd",
              marginLeft: "15%",
              marginRight: "15%",
            }}
          />
        </div>
        <div className={windowWidth >= 1000 ? 'course-card-container' : 'course-card-container-mobile'}>
          <div className="course-card">
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                // alignItems: "center",
                justifyContent: "center",
                marginTop: "1rem",
              }}
            >
              <img src={info} style={{ height: "20px" }} />
              <p
                style={{
                  fontFamily: "din-round, sans-serif",
                  color: "#8edaff",
                  fontSize: "1rem",
                  textAlign: "center",
                  marginBottom: "0px !important",
                  marginLeft: "10px",
                }}
              >
                By ArabicaLearn
              </p>
            </div>
            <img
              src={readingCourse}
              style={{
                height: "150px",
                marginLeft: "15px",
                marginRight: "15px",
              }}
            />
            <p
              style={{
                fontFamily: "din-round, sans-serif",
                color: "black",
                fontSize: "1.5rem",
                textAlign: "center",
                marginBottom: "0px !important",
              }}
            >
              Arabic Fundamentals 1 Reading
            </p>
          </div>
          <div className="course-card">
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                // alignItems: "center",
                justifyContent: "center",
                marginTop: "1rem",
              }}
            >
              <img src={info} style={{ height: "20px" }} />
              <p
                style={{
                  fontFamily: "din-round, sans-serif",
                  color: "#8edaff",
                  fontSize: "1rem",
                  textAlign: "center",
                  marginBottom: "0px !important",
                  marginLeft: "10px",
                }}
              >
                By University of Um Al Qura
              </p>
            </div>
            <img
              src={vocabCourse}
              style={{
                height: "150px",
                marginLeft: "15px",
                marginRight: "15px",
              }}
            />
            <p
              style={{
                fontFamily: "din-round, sans-serif",
                color: "black",
                fontSize: "1.5rem",
                textAlign: "center",
                marginBottom: "0px !important",
              }}
            >
              Arabic Fundamentals 2 Vocabulary
            </p>
          </div>
        </div>
        {/* <AllLevelElement
					badge={level}
					title="Test all levels"
					number="9"
					type="all"
				/> */}
        {/* <br />
				<div
					// style={styles.container}
					className="progress-container"
				>
					<span style={{ fontSize: 'calc(10px + 2vmin)' }}>
						{'course progress: ' + progress + '%'}
					</span>
					<div
						style={{
							width: '250px',
							display: 'block',
							flexDirection: 'row',
							alignItems: 'center',
						}}
					>
						<Line percent={progress} strokeWidth="4" strokeColor="#9b7ffa" />
					</div>
				</div>
				<br /> */}

        {/* <div style={styles.container}>
					<LevelElement badge={level} title="Beginner Level" number="1" />
					{lessoList.map((lesson) => (
						<Link to="/quiz/maths/1/1">
							<LessonElement
								lessonImg={lesson.lessonImg}
								// badge={lesson.badgeImg}
								answered={lesson.answered}
								title={lesson.title}
							/>
						</Link>
					))}
				</div>
				<Trophy won={true} /> */}
        {/* <div style={{ position: 'absolute', right: 0 }}>
					<LevelElement
						// lessonImg={lesson.lessonImg}
						badge={level}
						title="Test level"
						number="2"
					/>
				</div> */}
        {/* <div style={styles.container}>
					<LevelElement
						// lessonImg={lesson.lessonImg}
						badge={level}
						title="Intermediate Level"
						number="1"
					/>
				</div> */}
        {/* <div style={styles.container}> */}
        {/* <Level level="Test all levels" /> */}
        {/* {lessoList.map((lesson) => (
						<Link to="/quiz">
							<LessonElement
								lessonImg={lesson.lessonImg}
								badge={lesson.badgeImg}
								title={lesson.title}
								answered={lesson.answered}
							/>
						</Link>
					))}
				</div>
				<Trophy won={false} /> */}
      </body>
    </div>
  );
}

function LessonElement(props) {
  const cssClass =
    props.answered == true ? "lesson-element-answered" : "lesson-element";
  return (
    <div
      className={cssClass}
      // style={styles.lessonDiv}
    >
      {/* <img src={props.lessonImg} style={styles.lessonImg} /> */}
      <LessonTitle badge={props.badge} title={props.title} />
    </div>
  );
}

function LevelElement(props) {
  return (
    <Link
    // to="/quiz/maths/1/1"
    >
      {/* <div
				// className="dropdown-menu"
				style={styles.levelDiv}
			>
				<img src={test} style={{ height: '10vmin' }} />
				{/* <p style={styles.lessonTitle}>
					{props.title}
					{/* <span style={{ color: 'black', margin: '10px' }}>- TEST</span> 
				</p> 
			</div> */}
      <Dropdown>
        <Dropdown.Toggle
          id="dropdown-basic"
          variant="link"
          style={{ color: "#d9e0e6", fontSize: "2rem" }}
        >
          <img src={test} style={{ height: "10vmin" }} />
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item>Test | {props.title}</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item href="#/action-1">Arabic</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Programming</Dropdown.Item>
          <Dropdown.Item href="#/action-1">Jurisprudence</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Linear Algebra</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </Link>
  );
}
function AllLevelElement(props) {
  return (
    <div style={styles.alllevelDiv}>
      <img src={alltest} style={{ height: "10vmin" }} />
      <p style={styles.lessonTitle}>
        <span
          style={{
            height: "5vmin",
            borderRadius: "50%",
            background: "#f5dc48",
            height: "5vh",
            width: "5vh",
          }}
        >
          <span style={{ color: "white", margin: "10px" }}>{props.number}</span>
        </span>{" "}
        {props.title}
      </p>
    </div>
  );
}
function LessonTitle(props) {
  return (
    <div style={styles.rowContainer}>
      {/* <img src={props.badge} style={styles.badge} /> */}
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
    fontFamily: "din-round, sans-serif",
  },
  lessonElement: {
    height: "15vmin",
  },
  container: {
    // marginTop: '5px',
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "calc(10px + 2vmin)",
    // margin: '15px',
  },
  lessonDiv: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "calc(10px + 2vmin)",
    background: "white",
    width: "40vw",
    minWidth: "300px",
    margin: "15px",
    // minWidth: 'fint-content',
    boxShadow: "0 4px 6px 2px rgba(2, 30, 47, 0.03)",
    borderRadius: "4px",
    // borderRight: '10px solid #a1adbb',
    // borderLeft: '10px solid #a1adbb',
    borderTopWidth: "2px",
    borderRightWidth: "2px",
    borderLeftWidth: "2px",
    borderBottomWidth: "10px",
    borderStyle: "solid",
    borderColor: "rgb(217, 224, 230)",
    borderRadius: "16px",
  },
  levelDiv: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "calc(10px + 2vmin)",
    background: "white",
    maxWidth: "370px",
    minWidth: "min-content",
    // width: 'fit-content',
    margin: "15px",
    // boxShadow: '0 4px 6px 2px rgba(2, 30, 47, 0.03)',
    // borderRadius: '4px',
    // borderTop: '10px solid #8766fa',
    // overflow: 'scroll',
    // maxHeight: '122px',
    // border: '2px solid rgb(217, 224, 230)',
    maxWidth: "max-content",
    // width: '15vw',
    height: "max-content",
    maxHeight: "150px",
    textAlign: "center",
    padding: "10px",
  },
  alllevelDiv: {
    position: "absolute",
    right: "0",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "calc(10px + 2vmin)",
    background: "white",
    maxWidth: "max-content",
    // width: 'fit-content',
    margin: "15px",
    border: "2px solid rgb(217, 224, 230)",
    // boxShadow: '0 4px 6px 2px rgba(2, 30, 47, 0.03)',
    borderRadius: "16px",
    // borderTop: '10px solid #f5dc48',
    // overflow: 'scroll',
    // maxHeight: '122px',
    minWidth: "min-content",
    width: "15vw",
    height: "max-content",
    maxHeight: "150px",
    textAlign: "center",
    padding: "10px",
  },
  levelScroll: {
    overflow: "scroll",
    height: "100%",
  },
  roundContainer: {
    height: "fit-content",
    borderRadius: "4px",
    // padding: '20px',
    // background: 'aliceblue',
  },
  rowContainer: {
    height: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "top",
    justifyContent: "center",
    // background: 'aliceblue',
    padding: "5px",
    margin: "5px",
    width: "-webkit-fill-available",
    /* background: aliceblue; */
    // borderTop: '2px solid gray',
    // borderTop: '4px dashed #8766fa',
    // borderTop: '4px solid rgb(135, 102, 250)'
  },
  vl: {
    borderLeft: "3px solid black",
    margin: "10px",
  },
  level: {
    // height: '100%',
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    background: "rgb(245, 220, 72)",
    padding: "5px",
    margin: "1rem",
    // borderRight: '4px solid rgb(237, 186, 67)',
    // borderBottom: '4px solid rgb(237, 186, 67)',
    // borderRadius: '5%',
    position: "absolute",
    right: "0",
    height: "fit-content",
    borderTopWidth: "2px",
    borderRightWidth: "2px",
    borderLeftWidth: "2px",
    borderBottomWidth: "10px",
    borderStyle: "solid",
    borderColor: "#e8d040",
    borderRadius: "16px",
  },
  lessonImg: {
    height: "10vmin",
    margin: "10px",
    marginLeft: "15px",
    // background: 'aliceblue',
    // borderRadius: '50%',
    // border: '10px solid aliceblue',
    // background: '#e0f1ff',
    // padding: '20px',
  },
  levelImg: {
    height: "10vmin",
    // margin: '5px',
    // background: 'aliceblue',
    // borderRadius: '50%',
    // border: '10px solid aliceblue',
    // background: '#e0f1ff',
    // padding: '20px',
  },
  badge: { height: "5vmin", margin: "5px", alignSelf: "center" },
  lessonTitle: {
    fontWeight: "500",
    color: "black",
    fontFamily: "din-round, sans-serif",
    margin: "0",
    textAlign: "center",
  },
  trophy: {
    height: "15vmin",
  },
  levelText: {
    fontWeight: "700",
    color: "white",
    fontFamily: "din-round, sans-serif",
    margin: "0",
    textAlign: "center",
  },
};
