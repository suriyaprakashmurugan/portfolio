import React from "react";
import "./project.css";
import { Col, Row } from "antd";

function Project() {
  return (
    <>
      <Row className="project-pg">
        <Col xs={24} md={12} xl={12}>
          <a href="" className="txt-dec">
            <img
              src="https://images.pexels.com/photos/5827829/pexels-photo-5827829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt="portfolio"
              style={{ width: 350, height:233, marginTop: 50 }}
            />
            <p>portfolio</p>
          </a>
        </Col>
        <Col xs={24} md={12} xl={12}>
          <a href="" className="txt-dec">
            <img
              src="https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt="Girl in a jacket"
              style={{ width: 350, height:233, marginTop: 50 }}
            />
            <p>e commerce</p>
          </a>
        </Col>
        <Col xs={24} md={12} xl={12}>
          <a href="" className="txt-dec">
            <img
              src="https://images.pexels.com/photos/5417844/pexels-photo-5417844.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt="search engine"
              style={{ width: 350, height:233, marginTop: 50}}
            />
            <p style={{ marginBottom: 25 }}>search engine</p>
          </a>
        </Col>
        <Col xs={24} md={12} xl={12}>
          <a href="" className="txt-dec">
            <img
              src="https://images.pexels.com/photos/5082561/pexels-photo-5082561.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt="Girl in a jacket"
              style={{ width: 350, height:233, marginTop: 50}}
            />
            <p style={{ marginBottom: 25 }}>loginpage</p>
          </a>
        </Col>
      </Row>
    </>
  );
}
export default Project;
