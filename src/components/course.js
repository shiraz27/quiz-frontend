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
import trophydisabled from "../img/trophydisabled.svg";
import trophy from "../img/trophy.svg";
import energy from "../img/energy.png";
import arrowdown from "../img/arrowdown.svg";
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
                  color: "rgb(255 222 85)",
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
                color: "rgb(255 222 85)",
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
                color: "rgb(255 222 85)",
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
                  color: "rgb(255 222 85)",
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
                color: "rgb(255 222 85)",
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
                color: "rgb(255 222 85)",
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
              <Line percent={progress} strokeWidth="4" strokeColor="rgb(255 222 85)" />
            </div>
          </div>
        </div>
        <div style={styles.container}>
          <div style={{ marginTop: "3%" }} />
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
                        <img src={trophy} style={styles.trophy} />
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
                          <img
                            src={energy}
                            style={{
                              height: "1rem",
                              marginRight: "10px",
                              marginBottom: "5px",
                            }}
                          />
                          <Link to="/quiz/maths/1/1" 
                          // className='upper-case'
                          >
                            Lesson name read and write everything in Arabic
                          </Link>
                          <br/>
                        </Timeline.Item>
                        <Timeline.Item>
                          <img
                            src={energy}
                            style={{
                              height: "1rem",
                              marginRight: "10px",
                              marginBottom: "5px",

                            }}
                          />
                          <Link to="/quiz/maths/1/1" 
                          // className='upper-case'
                          >Lesson name</Link>
                          <br/>
                        </Timeline.Item> 
                         <Timeline.Item>
                          <img
                            src={energy}
                            style={{
                              height: "1rem",
                              marginRight: "10px",
                              marginBottom: "5px",

                            }}
                          />
                          <Link to="/quiz/maths/1/1" 
                          // className='upper-case'
                          >
                            <p style={{ color: "#605e67" }}>Lesson name</p>
                          </Link>
                          <br/>
                         </Timeline.Item> 
                       </Timeline> 
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
            </>
          ))}
        </div>
        <div style={styles.container}>
          <div style={{ marginTop: "3%" }} />
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
                        <img src={trophydisabled} style={styles.trophy} />
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
                          <img
                            src={energy}
                            style={{
                              height: "1rem",
                              marginRight: "10px",
                              marginBottom: "5px",
                            }}
                          />
                          <Link to="/quiz/maths/1/1" 
                          // className='upper-case'
                          >
                            Lesson name read and write everything in Arabic
                          </Link>
                          <br/>
                        </Timeline.Item>
                        <Timeline.Item>
                          <img
                            src={energy}
                            style={{
                              height: "1rem",
                              marginRight: "10px",
                              marginBottom: "5px",

                            }}
                          />
                          <Link to="/quiz/maths/1/1" 
                          // className='upper-case'
                          >Lesson name</Link>
                          <br/>
                        </Timeline.Item> 
                         <Timeline.Item>
                          <img
                            src={energy}
                            style={{
                              height: "1rem",
                              marginRight: "10px",
                              marginBottom: "5px",

                            }}
                          />
                          <Link to="/quiz/maths/1/1" 
                          // className='upper-case'
                          >
                            <p style={{ color: "#605e67" }}>Lesson name</p>
                          </Link>
                          <br/>
                         </Timeline.Item> 
                       </Timeline> 
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
            </>
          ))}
        </div>
        <div style={styles.container}>
          <div style={{ marginTop: "3%" }} />
          <div className="level-card">
            <p>LEVEL 3</p>
          </div>
          {lessoList.map((lesson, i) => (
            <>
              <Accordion defaultActiveKey="1">
                <Card>
                  <Card.Header>
                    <Accordion.Toggle as={Card.Header} eventKey="0">
                      <div className="lesson-card">
                        <img src={trophydisabled} style={styles.trophy} />
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
                          <img
                            src={energy}
                            style={{
                              height: "1rem",
                              marginRight: "10px",
                              marginBottom: "5px",
                            }}
                          />
                          <Link to="/quiz/maths/1/1" 
                          // className='upper-case'
                          >
                            Lesson name read and write everything in Arabic
                          </Link>
                          <br/>
                        </Timeline.Item>
                        <Timeline.Item>
                          <img
                            src={energy}
                            style={{
                              height: "1rem",
                              marginRight: "10px",
                              marginBottom: "5px",

                            }}
                          />
                          <Link to="/quiz/maths/1/1" 
                          // className='upper-case'
                          >Lesson name</Link>
                          <br/>
                        </Timeline.Item> 
                         <Timeline.Item>
                          <img
                            src={energy}
                            style={{
                              height: "1rem",
                              marginRight: "10px",
                              marginBottom: "5px",

                            }}
                          />
                          <Link to="/quiz/maths/1/1" 
                          // className='upper-case'
                          >
                            <p style={{ color: "#605e67" }}>Lesson name</p>
                          </Link>
                          <br/>
                         </Timeline.Item> 
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
    color: "#b0e3ff",
    fontFamily: "din-round, sans-serif",
    margin: "0",
    textAlign: "center",
    fontSize: "1rem",
    letterSpacing: '1px',
    textTransform: 'uppercase',
    fontWeight: 'bold'
  },
  trophy: {
    height: "30px",
    marginTop: "5px",
  },
};
