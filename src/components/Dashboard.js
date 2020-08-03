import React, { useState, useEffect } from "react";

//packages
import { Link } from "react-router-dom";

//components
import NavbarTop from "./NavbarTop";

//resources
import readingCourse from "../img/readingcourse.svg";
import vocabCourse from "../img/vocabcourse.svg";
import info from "../img/info.svg";

//data

export default function Dashboard() {
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
      <div style={styles.container}>
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
        <div
          className={
            windowWidth >= 1000
              ? "course-card-container"
              : "course-card-container-mobile"
          }
        >
          <Link to="/course">
            <div className="course-card">
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                }}
              >
                <img src={info} style={{ height: "15px" }} />
                <p
                  style={{
                    fontFamily: "din-round, sans-serif",
                    color: "#b0e3ff",
                    fontSize: "0.75rem",
                    textAlign: "center",
                    marginBottom: "0px !important",
                    marginLeft: "10px",
                    fontWeight: "bold",
                    letterSpacing: "1px",
                  }}
                >
                  By Arabica Learn
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
                // style={{
                //   fontFamily: "din-round, sans-serif",
                //   color: "#605f68",
                //   fontSize: "1.5rem",
                //   textAlign: "center",
                //   marginBottom: "0px !important",
                // }}
                className='course-text'
              >
                Arabic Fundamentals 1 Reading
              </p>
            </div>
          </Link>
          <div className="course-card">
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <img src={info} style={{ height: "15px" }} />
              <p
                style={{
                  fontFamily: "din-round, sans-serif",
                  color: "#b0e3ff",
                  fontSize: "0.75rem",
                  textAlign: "center",
                  marginBottom: "0px !important",
                  marginLeft: "10px",
                  fontWeight: "bold",
                  letterSpacing: "1px",
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
              // style={{
              //   fontFamily: "din-round, sans-serif",
              //   color: "#605f68",
              //   fontSize: "1.5rem",
              //   textAlign: "center",
              //   marginBottom: "0px !important",
              // }}
              className='course-text'
            >
              Arabic Fundamentals 2 Vocabulary
            </p>
          </div>
        </div>
      </div>
    </div>
  );
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
};
