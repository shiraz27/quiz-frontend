import React, { useState, useEffect } from "react";

//packages
import { Pagination } from 'rsuite';
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";

//components
import NavbarTop from "./NavbarTop";

//resources
import readingCourse from "../img/readingcourse.svg";
import vocabCourse from "../img/vocabcourse.svg";
import info from "../img/info.svg";

//data

export default function Search() {
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
      activePage: eventKey
    });
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
            Search
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
          
        </div>
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
