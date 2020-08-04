import React, { useState, useEffect } from "react";

//packages
import { Pagination } from "rsuite";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";

//components
import NavbarTop from "./NavbarTop";

//resources
import readingCourse from "../img/readingcourse.svg";
import vocabCourse from "../img/vocabcourse.svg";
import info from "../img/info.svg";

//data

export default function Login() {
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
  function handleSelect(eventKey) {
    this.setState({
      activePage: eventKey,
    });
  }
  return (
    <div style={styles.container}>
      <p
        style={{
          // marginTop: "3%",
          marginBottom: "3%",
          fontFamily: "din-round, sans-serif",
          color: "#D0D6DD",
          fontSize: "1.2rem",
          textAlign: "left",
          fontWeight: "bold",
          letterSpacing: "1px",
        }}
      >
        SIGN IN
      </p>
      <br />
      <Form>
        <Form.Control
          type="text"
          placeholder="Email"
          className={"profile-form"}
        />
      </Form>
      <br />
      <Form>
        <Form.Control
          type="password"
          placeholder="Password"
          className={"profile-form"}
        />
      </Form>
      <Link to="/reset-password">
      <br />
        <p
          style={{
            // marginTop: "3%",
            fontFamily: "din-round, sans-serif",
            color: "#afe4ff",
            fontSize: "1.2rem",
            textAlign: "flex-start",
            letterSpacing: "1px",
          }}
        >
          Forgot password?
        </p>
      </Link>
      <br />
        <button className="blueButton" onClick={() => {}}>
          LOGIN
        </button>
      
      {/* <div style={{ width: "-webkit-fill-available" }}>
         
          <hr
            style={{
              borderColor: "#d0d6dd",
              marginLeft: "15%",
              marginRight: "15%",
            }}
          />
        </div> */}
      {/* <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
            marginTop: "3%",
            width: "-webkit-fill-available",
            marginLeft: "15%",
            marginRight: "15%",
          }}
        >
          <p className="search-text">Lesson name read and write everything in Arabic</p>
          <hr className='hr-2'/>
          <p className="search-text">Lesson name read and write everything in Arabic</p>
          <hr className='hr-2'/>
          <p className="search-text">Lesson name read and write everything in Arabic</p>
          <hr className='hr-2'/>
          <p className="search-text">Lesson name read and write everything in Arabic</p>
          <br/>
          <Pagination
           style={{
            marginLeft: "15%",
            marginRight: "15%",
          }}
          prev
          last
          next
          first
          size="md"
          pages={6}
          activePage={3}
          onSelect={handleSelect}
        />
        </div>
      </div> */}
    </div>
  );
}

//CSS styles
const styles = {
  container: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "calc(10px + 2vmin)",
  },
};
