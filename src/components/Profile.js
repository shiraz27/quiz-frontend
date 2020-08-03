import React, { useState, useEffect } from "react";

//packages
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";

//components
import NavbarTop from "./NavbarTop";

//resources
import readingCourse from "../img/readingcourse.svg";
import vocabCourse from "../img/vocabcourse.svg";
import info from "../img/info.svg";

//data

export default function Profile() {
  const [windowWidth, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  function showname() {
    var name = document.getElementById("img");
    // alert("Selected file: " + name.item(0).name);
    // alert("Selected file: " + name.item(0).size);
    // alert("Selected file: " + name.item(0).type);
  }

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
            My Account
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
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-end",
            marginTop: "3%",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: "16px",
            }}
          >
            <p className="profile-text">Username</p>
            <Form>
              <Form.Control
                type="text"
                placeholder="Username"
                className={
                  windowWidth >= 1000 ? "profile-form" : "profile-form-mobile"
                }
              />
            </Form>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: "16px",
            }}
          >
            <p className="profile-text">Email</p>
            <Form>
              <Form.Control
                type="text"
                placeholder="Email"
                className={
                  windowWidth >= 1000 ? "profile-form" : "profile-form-mobile"
                }
              />
            </Form>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: "16px",
            }}
          >
            <p className="profile-text">Password</p>
            <Form>
              <Form.Control
                type="text"
                placeholder="Password"
                className={
                  windowWidth >= 1000 ? "profile-form" : "profile-form-mobile"
                }
              />
            </Form>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: "16px",
            }}
          >
            <button className="save" onClick={() => {}}>
              SAVE
            </button>
            {/* <p className="profile-text">Profile picture</p>
            <Form>
              <Form.Group>
                {/* <Form.File
                  id="exampleFormControlFile1"
                  label="Example file input"
                /> 
              </Form.Group>
            </Form> */}
            {/* <Form>
              <input
                type="file"
                name="uploadfile"
                id="img"
                style={{ display: "none" }}
                onchange={showname()}
                // ref="img"
              />
              <label
                className={
                  windowWidth >= 1000 ? "profile-form" : "profile-form-mobile"
                }
                for="img"
                placeholder="Password"
              >
                ...
              </label>
              {/* <input type="file" accept="image/*" id="files"/> */}
            {/* <label for="files">Select file</label>
            </Form> */}
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
