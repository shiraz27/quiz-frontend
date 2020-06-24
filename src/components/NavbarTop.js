import React, { useState, useEffect } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import Form from "react-bootstrap/Form";
import { Modal, Button } from "react-bootstrap/";
import { Link } from "react-router-dom";

import logo from "../img/logo.svg";
import search from "../img/search.svg";
import searchl from "../img/search-large.svg";

import profile from "../img/profile.svg";

function useWindowWidth() {}

function NavbarTop() {
  const [windowWidth, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  // const [windowWidth, setwindowWidth] = useState(window.innerWidth);
  return (
    <div style={{ boxShadow: "0 2px 4px 0 rgba(0,0,0,.05)" }}>
      <div style={styles.navBox}>
        <span
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            marginLeft: "15%",
          }}
        >
          <Link to="/dashboard">
            <img src={logo} style={{ height: "10vmin" }} />
            <span style={{ fontFamily: "din-round, sans-serif" }}>
              ArabicaLearn
            </span>
          </Link>
        </span>
        {windowWidth >= 1000 ? (
          <Form>
            <Form.Group controlId="formBasicSearch">
              <img
                src={searchl}
                style={{
                  height: "15px",
                  marginLeft: "15px",
                  marginRight: "15px",
                }}
              />
              <Form.Control type="text" placeholder="Search" />
            </Form.Group>
          </Form>
        ) : (
          <Search />
        )}
        <Dropdown style={{ marginRight: "15%" }}>
          <Dropdown.Toggle
            id="dropdown-basic"
            variant="link"
            style={{ color: "#d9e0e6", fontSize: "2rem" }}
          >
            <img src={profile} style={styles.navElement} />
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="/me">My Account</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
  );
}

const styles = {
  defaultFontFamily: {
    fontFamily: "din-round, sans-serif",
  },
  logoText: {
    fontWeight: "700",
    color: "white",
    verticalAlign: "middle",
    marginLeft: "5px",
    background: "rgb(194, 176, 255)",
    padding: "5px",
    borderBottom: "#8766fa 5px solid",
    fontSize: "0.75em",
  },
  navBox: {
    background: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "5px",
    // marginRight: '15%',
    // marginLeft: '15%',
    paddingTop: "1%",
    paddingBottom: "1%",
    width: "-webkit-fill-available;",
  },
  navElement: {
    height: "6vmin",
  },
  vl: {
    margin: "10px",
    width: "2px",
    height: "4rem",
    background: "gray",
  },
};

export default NavbarTop;

function Search() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <a onClick={handleShow}>
        <div className="search">
          <img src={search} style={{ height: "25px" }} />
        </div>
      </a>

      <Modal show={show} onHide={handleClose}>
        <Form>
          <Form.Group controlId="formBasicSearch">
            <img
              src={searchl}
              style={{
                height: "15px",
                marginLeft: "15px",
                marginRight: "15px",
              }}
            />
            <Form.Control type="text" placeholder="Search" />
          </Form.Group>
        </Form>
      </Modal>
    </>
  );
}
