import React from "react";
import "./contact.css";
import { Col, Row } from "antd";

function Project() {
  return (
    <>
      <Row className="contact-pg">
        <Col xs={24} xl={12}>
          <a href="https://www.facebook.com/profile.php?id=100009274031852"
          className="txt-dec">
            <img
              src="https://pnggrid.com/wp-content/uploads/2021/07/Facebook-Logo-Square-768x768.png"
              alt="Girl in a jacket"
              style={{ width: 230, marginTop: 50 }}
            />
            <p>Facebook</p>
          </a>
        </Col>
        <Col xs={24} xl={12}>
          <a href="" className="txt-dec">
            <img
              src="https://i.pinimg.com/originals/9b/97/87/9b9787fb5209b99c3207554a341e3f32.png"
              alt="Girl in a jacket"
              style={{ width: 230, marginTop: 50 }}
            />
            <p>Instagram</p>
          </a>
        </Col>
        <Col xs={24} xl={12}>
          <a href="" className="txt-dec">
            <img
              src="https://icon-library.com/images/github-logo-icon/github-logo-icon-12.jpg"
              alt="Girl in a jacket"
              style={{ width: 230, marginTop: 50}}
            />
            <p style={{ marginBottom: 25 }}>Github</p>
          </a>
        </Col>
        <Col xs={24} xl={12}>
          <a href="" className="txt-dec">
            <img
              src="https://www.transparentpng.com/thumb/email-logo/gmail-logo-png-UbCiBR.png"
              alt="Girl in a jacket"
              style={{ width: 230, marginTop: 50}}
            />
            <p style={{ marginBottom: 25 }}>Mail</p>
          </a>
        </Col>
      </Row>
    </>
  );
}
export default Project;
