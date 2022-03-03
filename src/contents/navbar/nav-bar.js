import React, { useState } from "react";
import "./nav-bar.css";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Avatar, Col} from "antd";
import myg from '../images/myg.jpg'
import { Outlet, Link } from "react-router-dom";

function MyNav() {
  const [bord, setBord] = useState("txt-dec");
  const [bord1, setBord1] = useState("txt-noDec");
  const [bord2, setBord2] = useState("txt-noDec");
  const [bord3, setBord3] = useState("txt-noDec");
  const [bord4, setBord4] = useState("txt-noDec");
  return (
    <div>
      <Col xs={24} md={24} xl={24}>
      <Navbar bg="trasparent" variant="dark" fixed="top">
        <Container>
        <Avatar src= {myg}/>


          <Navbar.Brand href="#home">Portfolio</Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link>
              <Link
                className={bord}
                onClick={() => {
                  setBord("txt-dec");
                  setBord1("txt-noDec");
                  setBord2("txt-noDec");
                  setBord3("txt-noDec");
                  setBord4("txt-noDec")
                }}
                to={"/"}
              >
                Home
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link
                className={bord1}
                onClick={() => {
                  setBord1("txt-dec");
                  setBord("txt-noDec");
                  setBord2("txt-noDec");
                  setBord3("txt-noDec");
                  setBord4("txt-noDec")
                }}
                to={"/about"}
              >
                about
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link
                className={bord2}
                onClick={() => {
                  setBord2("txt-dec");
                  setBord1("txt-noDec");
                  setBord("txt-noDec");
                  setBord3("txt-noDec");
                  setBord4("txt-noDec")
                }}
                to={"/service"}
              >
                skills
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link
                className={bord4}
                onClick={() => {
                  setBord4("txt-dec")
                  setBord2("txt-noDec");
                  setBord1("txt-noDec");
                  setBord("txt-noDec");
                  setBord3("txt-noDec");
                }}
                to={"/project"}
              >
                projects
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link
                className={bord3}
                onClick={() => {
                  setBord3("txt-dec");
                  setBord1("txt-noDec");
                  setBord2("txt-noDec");
                  setBord("txt-noDec");
                  setBord4("txt-noDec")
                }}
                to={"/contact"}
              >
                contact
              </Link>
            </Nav.Link>
          </Nav>
        </Container>
        <Outlet />
      </Navbar>
      </Col>
    </div>
  );
}

export default MyNav;
