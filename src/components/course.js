import React, { useState, useEffect } from "react";

//packages
import { Link } from "react-router-dom";
import { Line } from "rc-progress";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import { Timeline, Icon } from "rsuite";
import "rsuite/dist/styles/rsuite-default.css";

//components
import NavbarTop from "./NavbarTop";

//resources
import trophydisabled from "../img/trophydisabled.png";
import energy from "../img/energy.png";
import arrowdown from "../img/arrowdown.png";
import bag from "../img/002-money bag.svg";
import torch from "../img/036-torch.svg";
import level from "../img/042-fire.svg";

//data
let lessoList = [
  {
    id: 0,
    title: "Basics training",
    answered: true,
  },
  {
    id: 1,
    title: "Core training",
    answered: true,
  },
  {
    id: 1,
    title: "Intermediate training",
    answered: true,
  },
  {
    id: 1,
    title: "Advanced training for everyone and everything",
    answered: false,
  },
];

export default function Course() {
  const [progress, setProgress] = useState(80);
  const [windowWidth, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
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
              fontSize: "1rem",
              textAlign: "left",
              marginLeft: "15%",
            }}
            className="page-title"
          >
            Arabic Fundamentals 1 Reading
          </p>
          <hr
            style={{
              borderColor: "#d0d6dd",
              marginLeft: "15%",
              marginRight: "15%",
            }}
          />
        </div>
        <div
          className={
            windowWidth >= 1000
              ? "progress-card-container"
              : "progress-card-container-mobile"
          }
        >
          <div className="progress-card">
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img src={bag} style={{ height: "50px" }} />
              <p
                style={{
                  fontFamily: "din-round, sans-serif",
                  color: "#8edaff",
                  fontSize: "2rem",
                  textAlign: "center",
                  marginBottom: "0rem !important",
                  letterSpacing: "1.5px",
                }}
              >
                150
              </p>
            </div>
            <p
              style={{
                fontFamily: "din-round, sans-serif",
                color: "#8edaff",
                fontSize: "1rem",
                textAlign: "center",
                marginBottom: "0px !important",
                fontWeight: "bold",
                letterSpacing: "1.5px",
              }}
            >
              LESSONS COMPLETED
            </p>
          </div>
          <div className="progress-card">
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img src={torch} style={{ height: "50px" }} />
            </div>
            <p
              style={{
                fontFamily: "din-round, sans-serif",
                color: "#8edaff",
                fontSize: "1rem",
                textAlign: "center",
                marginBottom: "0px !important",
                fontWeight: "bold",
                letterSpacing: "1.5px",
              }}
            >
              TEST ALL LEVELS
            </p>
          </div>
          <div className="progress-card">
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img src={level} style={{ height: "50px" }} />
              <p
                style={{
                  fontFamily: "din-round, sans-serif",
                  color: "#8edaff",
                  fontSize: "2rem",
                  textAlign: "center",
                  marginBottom: "0rem !important",
                  marginLeft: "5px",
                  letterSpacing: "1.5px",
                }}
              >
                5
              </p>
            </div>
            <p
              style={{
                fontFamily: "din-round, sans-serif",
                color: "#8edaff",
                fontSize: "1rem",
                textAlign: "center",
                marginBottom: "0px !important",
                fontWeight: "bold",
                letterSpacing: "1.5px",
              }}
            >
              LEVELS COMPLETED
            </p>
          </div>
        </div>
        <div className="progress-card-container">
          <div className="progress-card">
            <span
              style={{
                fontFamily: "din-round, sans-serif",
                color: "#8edaff",
                fontSize: "1rem",
                textAlign: "center",
                marginBottom: "0px !important",
                fontWeight: "bold",
                letterSpacing: "1.5px",
              }}
            >
              {"COURSE PROGRESS " + progress + "%"}
            </span>
            <div
              style={{
                width: "210px",
                display: "block",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Line percent={progress} strokeWidth="4" strokeColor="#8edaff" />
            </div>
          </div>
        </div>
        <div style={styles.container}>
          <br />
          <div className="level-card">
            <p>LEVEL 1</p>
          </div>
          {lessoList.map((lesson, i) => (
            <>
              <Accordion defaultActiveKey="1">
                <Card>
                  <Card.Header>
                    <Accordion.Toggle as={Card.Header} eventKey="0">
                      <div className="lesson-card">
                        <p style={styles.lessonTitle}>{lesson.title}</p>
                        <img
                          src={arrowdown}
                          style={{ height: "10px", margin: "5px" }}
                        />
                      </div>
                    </Accordion.Toggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey="0">
                    <Card.Body>
                      <Timeline>
                        <Timeline.Item>
                          Lesson name read and write everything in Arabic
                          <img
                            src={energy}
                            style={{ height: "10px", marginTop: "5px" }}
                          />
                        </Timeline.Item>
                        <Timeline.Item>
                          Lesson name
                          <img
                            src={energy}
                            style={{ height: "10px", marginTop: "5px" }}
                          />
                        </Timeline.Item>
                        <Timeline.Item>
                          Lesson name
                          <img
                            src={energy}
                            style={{ height: "10px", marginTop: "5px" }}
                          />
                        </Timeline.Item>
                        <img src={trophydisabled} style={styles.trophy} />
                      </Timeline>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
            </>
          ))}
        </div>
        <br />
        <div
          style={{
            borderBottom: "5px dotted rgb(239, 212, 255)",
            borderBottomWidth: "5px",
            borderBottomStyle: "dotted",
            borderBottomColor: "rgb(239, 212, 255)",
            marginLeft: "25%",
            marginRight: "25%",
            marginTop: "3% !important",
            width: "-webkit-fill-available",
          }}
        />

        <div style={styles.container}>
          <br />
          <div className="level-card">
            <p>LEVEL 2</p>
          </div>
          {lessoList.map((lesson, i) => (
            <>
              <Accordion defaultActiveKey="1">
                <Card>
                  <Card.Header>
                    <Accordion.Toggle as={Card.Header} eventKey="0">
                      <div className="lesson-card">
                        <p style={styles.lessonTitle}>{lesson.title}</p>
                        <img
                          src={arrowdown}
                          style={{ height: "10px", margin: "5px" }}
                        />
                      </div>
                    </Accordion.Toggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey="0">
                    <Card.Body>
                      <Timeline>
                        <Timeline.Item>
                          Lesson name read and write everything in Arabic
                          <img
                            src={energy}
                            style={{ height: "10px", marginTop: "5px" }}
                          />
                        </Timeline.Item>
                        <Timeline.Item>
                          Lesson name
                          <img
                            src={energy}
                            style={{ height: "10px", marginTop: "5px" }}
                          />
                        </Timeline.Item>
                        <Timeline.Item>
                          Lesson name
                          <img
                            src={energy}
                            style={{ height: "10px", marginTop: "5px" }}
                          />
                        </Timeline.Item>
                        <Timeline.Item>
                          Lesson name read and write everything in Arabic
                          <img
                            src={energy}
                            style={{ height: "10px", marginTop: "5px" }}
                          />
                        </Timeline.Item>
                        <Timeline.Item>
                          Lesson name
                          <img
                            src={energy}
                            style={{ height: "10px", marginTop: "5px" }}
                          />
                        </Timeline.Item>
                        <img src={trophydisabled} style={styles.trophy} />
                      </Timeline>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
            </>
          ))}
        </div>
      </body>
    </div>
  );
}

function LessonElement(props) {
  const cssClass =
    props.answered == true ? "lesson-element-answered" : "lesson-element";
  return (
    <div className="lesson-card">
      <LessonTitle badge={props.badge} title={props.title} />
      <Link to="/quiz/maths/1/1">
        <img src={arrowdown} style={{ height: "10px", margin: "5px" }} />
      </Link>
    </div>
  );
}
function LessonTitle(props) {
  return <p style={styles.lessonTitle}>{props.title}</p>;
}

//CSS styles
const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "calc(10px + 2vmin)",
  },
  lessonTitle: {
    fontWeight: "500",
    color: "#605F68",
    fontFamily: "din-round, sans-serif",
    margin: "0",
    textAlign: "left",
    fontSize: "1rem",
  },
  trophy: {
    height: "40px",
    marginTop: "5px",
  },
};
