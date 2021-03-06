import React, { useState, useEffect } from "react";

//packages
import Dropdown from "react-bootstrap/Dropdown";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap/";
import { Link } from "react-router-dom";
import Modal from "react-modal";

//resources
import logo from "../img/logo.svg";
import search from "../img/search.svg";
import searchl from "../img/search-large.svg";
import profile from "../img/profile.svg";

function NavbarTop() {
  const [windowWidth, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });
  function Example() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Launch demo modal
        </Button>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
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
            {/* <span 
            className="logo-banner"
            // style={{ fontFamily: "din-round, sans-serif", color: '#605f68' }}
            >
              ARABICA LEARN
            </span> */}
          </Link>
        </span>

        {windowWidth >= 1000 ? (
          <Form>
            <Form.Group controlId="formBasicSearch" className="search-test">
              <Link to="/search">
                <img
                  src={searchl}
                  style={{
                    height: "15px",
                    marginLeft: "15px",
                    marginRight: "15px",
                  }}
                />
              </Link>
              <Form.Control type="text" placeholder="Search" />
            </Form.Group>
          </Form>
        ) : (
          <>
            <Search />
            {/* <Example/> */}
          </>
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
            <Dropdown.Item href="/me" className="color-blue">
              MY ACCOUNT
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
  );
}

const styles = {
  navBox: {
    background: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "5px",
    paddingTop: "1%",
    paddingBottom: "1%",
    width: "-webkit-fill-available;",
  },
  navElement: {
    height: "6vmin",
  },
};
export default NavbarTop;

function Search() {
  // const [show, setShow] = useState(false);
  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);
  var subtitle;
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
        <div className="search">
          <img src={search} style={{ height: "25px" }} />
        </div>
      </a>
      {/* <Modal show={show} onHide={handleClose}>
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
      </Modal> */}
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
      >
        {/* <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2> */}
        <Form>
          <br />
          <Form.Group controlId="formBasicSearch">
            <Form.Control type="text" placeholder="Search" />
            <Link to="/search">
              <img
                src={searchl}
                style={{
                  marginTop: "5px",
                  height: "50px",
                  marginLeft: "30vw",
                  marginRight: "30vw",
                  borderRadius: "14px",
                  background: "#f2fbfe",
                  padding: "10px",
                }}
              />
            </Link>
          </Form.Group>
        </Form>
      </Modal>
    </>
  );
}
