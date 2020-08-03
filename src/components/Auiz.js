import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  IoMdClose,
  IoIosCheckmark,
  IoIosClose,
  IoIosArrowForward,
} from "react-icons/io";
import "../App.css";
import { Button } from "react-bootstrap/";
import Modal from "react-modal";
import { Line } from "rc-progress";
import flag from "../img/flag.svg";
import translate from "../img/translate.svg";
import audio from "../img/audio.svg";
import harvest from "../img/harvest.png";
import school from "../img/school.png";
import triangle from "../img/triangle.png";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

//components
import NavbarTop from "./NavbarTop";

export default function Auiz() {
  let questionBankApi = [
    {
      details: {
        id: "",
        title: "السؤال الأول | Question 1",
        difficulty: "", //an integer from 1 to 10
        nRepetition: "", //tested or not tested nRepetition > 0
        nCorrect: "",
        accuracyRate: "(nCorrect * 100) / nRepetition", //
        reminderDate: "", //last time revised
        skippable: true,
      },
      answerList: [
        {
          id: 0,
          text: "الإجابة الأولى",
          videoLink: "https://www.youtube.com/embed/A9gw8fRr87o",
          type: "video",
          correct: true,
        },
        {
          id: 1,
          text: "الإجابة الثانية",
          videoLink: "https://www.youtube.com/embed/TVKfpKXS0Cg",
          imageLink: "badgedisabled",
          type: "video",
          correct: true,
        },
        {
          id: 2,
          text: "الإجابة الثالثة",
          videoLink: "",
          imageLink:
            "https://www.elprocus.com/wp-content/uploads/2014/03/circuits.gif",
          type: "image",
          correct: false,
        },
        {
          id: 3,
          text: "الإجابة الرابعة والأخيرة",
          videoLink: "",
          imageLink: "",
          type: "",
          correct: true,
        },
      ],
      level: {
        id: "",
        title: "",
        difficulty: "",
        accuracyRate: "",
        reminderDate: "",
        order: "", //an infinite incremental integer, ascendant. marking how many levels
      },
      course: {
        id: "",
        title: "",
        accuracyRate: "",
        order: "", //an infinite incremental integer
      },
    },
    {
      details: {
        id: "",
        title: "Match the pairs 2*2= ?",
        difficulty: "", //an integer from 1 to 10
        nRepetition: "", //tested or not tested nRepetition > 0
        nCorrect: "",
        accuracyRate: "(nCorrect * 100) / nRepetition", //
        reminderDate: "", //last time revised
        skippable: true,
      },
      answerList: [
        {
          id: 0,
          text: "answer 1 - Q2",
          videoLink: "https://www.youtube.com/embed/A9gw8fRr87o",
          type: "video",
          correct: true,
        },
        {
          id: 1,
          text: "answer 2 - Q2",
          videoLink: "https://www.youtube.com/embed/TVKfpKXS0Cg",
          imageLink: "badgedisabled",
          type: "video",
          correct: false,
        },
        {
          id: 2,
          text: "answer 3 - Q2",
          videoLink: "",
          imageLink:
            "https://www.elprocus.com/wp-content/uploads/2014/03/circuits.gif",
          type: "image",
          correct: true,
        },
        {
          id: 3,
          text:
            " - Q2 Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit. Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
          videoLink: "",
          imageLink: "",
          type: "",
          correct: true,
        },
      ],
      level: {
        id: "",
        title: "",
        difficulty: "",
        accuracyRate: "",
        reminderDate: "",
        order: "", //an infinite incremental integer, ascendant. marking how many levels
      },
      course: {
        id: "",
        title: "",
        accuracyRate: "",
        order: "", //an infinite incremental integer
      },
    },
    {
      details: {
        id: "",
        title: "Match the pairs 3/3= ?",
        difficulty: "", //an integer from 1 to 10
        nRepetition: "", //tested or not tested nRepetition > 0
        nCorrect: "",
        accuracyRate: "(nCorrect * 100) / nRepetition", //
        reminderDate: "", //last time revised
        skippable: true,
      },
      answerList: [
        {
          id: 0,
          text: "answer 1 - Q3",
          videoLink: "https://www.youtube.com/embed/A9gw8fRr87o",
          type: "video",
          correct: true,
        },
        {
          id: 1,
          text: "answer 2 - Q3",
          videoLink: "https://www.youtube.com/embed/TVKfpKXS0Cg",
          imageLink: "badgedisabled",
          type: "video",
          correct: true,
        },
        {
          id: 2,
          text: "answer 3 - Q3",
          videoLink: "",
          imageLink:
            "https://www.elprocus.com/wp-content/uploads/2014/03/circuits.gif",
          type: "image",
          correct: false,
        },
        {
          id: 3,
          text:
            " - Q3 Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit. Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
          videoLink: "",
          imageLink: "",
          type: "",
          correct: false,
        },
      ],
      level: {
        id: "",
        title: "",
        difficulty: "",
        accuracyRate: "",
        reminderDate: "",
        order: "", //an infinite incremental integer, ascendant. marking how many levels
      },
      course: {
        id: "",
        title: "",
        accuracyRate: "",
        order: "", //an infinite incremental integer
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
      {/* <NavbarTop /> */}
      {/* <div style={{ }}> */}
      <div style={styles.navBox}>
        <div style={{ width: "250px" }}>
          <Line
            percent={progress}
            strokeWidth="4"
            strokeColor={
              "#ffde55"
              // "rgb(142, 218, 255)"
              // progress <= 34
              //   ? "#e36464ff"
              //   : progress <= 67
              //   ? "#f5dc48"
              //   : "#6ed6d2ff"
            }
          />
        </div>
      </div>
      <Link to="/dashboard">
        <IoMdClose style={styles.IoMdClose} />
      </Link>
      <div className="quiz-card">
        <p
          className="section"
          style={{
            fontFamily: "tajawal",
            color: "#c3eaff",
            fontSize: "1.5rem",
            textAlign: "center",
            marginBottom: "0px !important",
            letterSpacing: "0.07rem",
            borderRadius: "12px",
            padding: "6px",
            background: "white",
            width: "-webkit-fill-available",
          }}
        >
          Instructions :
        </p>
        <br/>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-end",
            marginTop: "8px",
            width: "-webkit-fill-available",
          }}
        >
          <Translate />
          <img className='question-button' src={audio} style={styles.icon} />
        </div>
        <p
          style={{
            fontFamily: "tajawal",
            color: "black",
            fontSize: "1.3rem",
            textAlign: "right",
            marginBottom: "0px !important",
          }}
        >
          هو مجتمع نسعى فيه لتكوين صحبة صالحة سعيدة معينة على الحق تساعد
          النفس الحريص على التزكية
        </p>
        <br/>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-end",
            marginTop: "8px",
            width: "-webkit-fill-available",
          }}
        >
          <Translate />
          <img src={audio} style={styles.icon} className='question-button' />
        </div>
        <p
          style={{
            fontFamily: "tajawal",
            color: "black",
            fontSize: "1.3rem",
            textAlign: "right",
            marginBottom: "0px !important",
          }}
        >
          هو مجتمع نسعى فيه لتكوين صحبة صالحة سعيدة معينة على الحق تساعد
          النفس الحريص على التزكية
        </p>
        <br/>
        <img src={harvest} style={{ height: "150px", marginTop: "5px" }} />
        <br/>
        <button className="vodio" onClick={() => {}}>
          <img src={triangle} style={{ height: "20px" }} />
        </button>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-end",
            marginTop: "8px",
            width: "-webkit-fill-available",
          }}
        >
          <Translate />
          <img src={audio} style={styles.icon} className='question-button'/>
        </div>
        <p
          style={{
            fontFamily: "tajawal",
            color: "black",
            fontSize: "1.3rem",
            textAlign: "right",
            marginBottom: "0px !important",
          }}
        >
          هو مجتمع نسعى فيه لتكوين صحبة صالحة سعيدة معينة على الحق تساعد
          النفس الحريص على التزكية
        </p>
        <br/>
        <img src={school} style={{ height: "150px", marginTop: "5px" }} />
      </div>
      <div className="quiz-card">
        <p
          className="section"
          style={{
            fontFamily: "tajawal",
            color: "#c3eaff",
            fontSize: "1.5rem",
            textAlign: "center",
            marginBottom: "0px !important",
            letterSpacing: "0.07rem",
            borderRadius: "12px",
            padding: "6px",
            background: "white",
            width: "-webkit-fill-available",
          }}
        >
          Question :
        </p>
        <br />
        {questionBankApi.length > 0 && number <= questionBankApi.length && (
          <>
            <p
              style={{
                fontFamily: "tajawal",
                color: "black",
                fontSize: "1.5rem",
                textAlign: "center",
                marginBottom: "0px !important",
              }}
            >
              1. {currentQuestion.details.title}
            </p>
            {currentQuestion.answerList.map((answer) => {
              return (
                <>
                  <Answer
                    sub={
                      answer.text.length > 10
                        ? answer.text.substr(0, 10) + "..."
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
            // style={styles.check}
            className="vodio"
            onClick={() => {
              if (number + 1 <= questionBankApi.length) {
                handleCorrectMe();
                setNext(true);
                setProgress(((number + 1) * 100) / questionBankApi.length);
              }
            }}
          >
            <p style={styles.checkText}>CHECK</p>
          </button>
        )}
        {correctMe && number + 1 !== questionBankApi.length && (
          <button
            // style={styles.next}
            className="vodio"
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
              NEXT
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
function Translate() {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }
  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    //subtitle.style.color = "#f00";
  }
  function closeModal() {
    setIsOpen(false);
  }
  return (
    <>
      <a onClick={openModal}>
        <img src={translate} style={styles.icon} className='question-button' />
      </a>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width:'-webkit-fill-available',
            height: '-webkit-fill-available'
          }}
        >
          <p style={styles.answerBrut}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </Modal>
    </>
  );
}
function Answer(props) {
  const [windowWidth, setWidth] = useState(window.innerWidth);

  const [checked, setChecked] = useState(false);
  const handleCheckedTrue = () => {
    handleClass();
    setChecked(true);
    setIsOpen(false);
  };
  const handleCheckedFalse = () => {
    handleClass();
    setChecked(false);
    setIsOpen(false);
  };

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [answerClass, setAnswerClass] = useState("answer-element");
  const handleClass = () => setAnswerClass("answer-element-checked");

  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    //subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });
  return (
    <>
      <button
        onClick={openModal}
        className={answerClass}
      >
        {props.showCorrect &&
          (checked === props.correct ? (
            <IoIosCheckmark style={styles.correct} />
          ) : (
            <IoIosClose style={styles.incorrect} />
          ))}
        <p style={styles.answerText}>{props.sub}</p>
      </button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
      >
        {props.type === "image" || props.type === "video" ? (
          <div
            style={{
              // background: "#f3fbff",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              width: "-webkit-fill-available",
              padding: "1rem",
              borderBottom: "#54565c dashed 3px",
            }}
          >
            <p style={styles.answerTextdeco}>{props.answer}</p>
            <img src={flag} style={styles.navElement} />
          </div>
        ) : (
          <div
            style={{
              // background: "#f3fbff",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              width: "-webkit-fill-available",
              borderBottom: "#54565c dashed 3px",
            }}
          >
            <img src={flag} style={styles.navElement} />
          </div>
        )}

        {props.type !== "image" && props.type !== "video" && (
          <p style={styles.answerBrut}>{props.answer}</p>
        )}
        {props.type === "video" && (
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
        {props.type === "image" && (
          <>
            <br />
            <img
              src={props.imageLink}
              // style={styles.imageLink}
              className={windowWidth >= 1000 ? "img-desktop" : "img-mobile"}
            />
          </>
        )}
        <div
          style={{
            // background: "#f3fbff",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around",
            padding: "1.25rem",
            width: "-webkit-fill-available",
            // borderTop: '#54565c dashed 3px'
          }}
        >
          <Button
            variant="success"
            onClick={() => {
              handleCheckedTrue();
              handleClose();
            }}
            className="true"
          >
            True
          </Button>
          <br />
          <Button
            variant="danger"
            onClick={() => {
              handleCheckedFalse();
              handleClose();
            }}
            className="false"
          >
            False
          </Button>
        </div>
      </Modal>
    </>
  );
}

//CSS styles
const styles = {
  question: {
    fontFamily: "tajawal",
    fontWeight: "500",
    color: "rgb(87, 86, 92)",
    fontSize: "2rem",
    marginTop: "4rem",
  },
  lessonElement: {
    height: "15vmin",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "calc(10px + 2vmin)",
    margin: "15px",
  },
  answer: {
    height: "100%",
    width: "15rem",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    background: "white",
    padding: "1rem",
    paddingVertical: "2rem",
    margin: "1rem",
    borderTopWidth: "2px",
    borderRightWidth: "2px",
    borderLeftWidth: "2px",
    borderBottomWidth: "10px",
    borderStyle: "solid",
    borderColor: "#d9e0e6",
    borderRadius: "16px",
  },
  answerChecked: {
    height: "100%",
    width: "15rem",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    background: "#ddf4ff",
    padding: "1rem",
    paddingVertical: "2rem",
    margin: "1rem",
    borderTopWidth: "2px",
    borderRightWidth: "2px",
    borderLeftWidth: "2px",
    borderBottomWidth: "10px",
    borderStyle: "solid",
    borderColor: "#1cb0f6",
    borderRadius: "16px",
  },
  answerText: {
    color: "black",
    fontFamily: "tajawal",
    margin: "0",
    fontSize: "1.5rem",
    textAlign: "center",
  },
  answerBrut: {
    color: "black",
    fontFamily: "tajawal",
    margin: "0",
    fontSize: "1.5rem",
    textAlign: "center",
  },
  answerTextdeco: {
    color: "black",
    fontFamily: "tajawal",
    margin: "0",
    fontSize: "1.5rem",
    textAlign: "center",
    // position: 'absolute',
    // right: 0,
    // left: 0
    // borderBottom: '10px solid #8766fa'
  },
  check: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    background: "rgb(175, 153, 251)",
    padding: "5px",
    margin: "1rem",
    bottom: "0",
    height: "fit-content",
    width: "fit-content",
    borderTopWidth: "2px",
    borderRightWidth: "2px",
    borderLeftWidth: "2px",
    borderBottomWidth: "10px",
    borderRadius: "16px",
    borderStyle: "solid",
    borderColor: "rgb(155, 127, 250)",
  },
  next: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    background: "rgb(245, 220, 72)",
    padding: "5px",
    margin: "1rem",
    borderRadius: "5%",
    bottom: "0",
    height: "fit-content",
    width: "fit-content",
    marginBottom: "2rem",
    borderTopWidth: "2px",
    borderRightWidth: "2px",
    borderLeftWidth: "2px",
    borderBottomWidth: "10px",
    borderRadius: "16px",
    borderStyle: "solid",
    borderColor: "#e8d040",
  },

  checkText: {
    fontWeight: "700",
    color: "#54565c",
    fontFamily: "tajawal",
    margin: "0",
    paddingTop: "0.25rem",
    paddingBottom: "0.25rem",
    paddingLeft: "2rem",
    paddingRight: "2rem",
    letterSpacing: "0.07rem",
  },
  hl: {
    border: "1px solid #d9e0e6ff",
    width: "100%",
    marginTop: "4rem",
  },
  IoMdClose: {
    position: "absolute",
    right: 0,
    top: 0,
    color: "#d9e0e6",
    fontSize: "3rem",
    margin: "1rem",
  },
  imageLink: {
    width: "auto",
    // height: 'auto'
  },
  correct: {
    color: "green",
    fontSize: "30px",
  },
  incorrect: {
    color: "red",
    fontSize: "30px",
  },
  navElement: {
    height: "4rem",
    margin: "5px",
  },
  navBox: {
    background: "#d8b6e947",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    // marginBottom: "5px",
    paddingTop: "1%",
    paddingBottom: "1%",
    width: "-webkit-fill-available;",
    position: "fixed",
    bottom: "0px",
    boxShadow: "0 2px 4px 0 rgba(0,0,0,.05)",
    width: "-webkit-fill-available",
  },
  icon: {
    height: "3.25rem",
    margin: "5px",
  },
};
