import React from "react";
import "./home.css";
import { Avatar, Image, Col } from "antd";

function MyHome() {
  return (
    <div>
      <Col className="home-img"  xs={24} xl={24}>
        <div className="myAvatar">
          <Avatar
            style={{ width: 150, height: 150 }}
            // shape="square"
            src={
              <Image
                src="https://cdn.dribbble.com/users/1787323/screenshots/11310814/media/78d925f388bdfd914f5c84a30261e239.png?compress=1&resize=400x300&vertical=top"
                style={{
                  width: 200,
                }}
              />
            }
          /><br></br>
          <p style={{fontSize:30,color:"whitesmoke"}}>HI THERE I'M</p> 
          <p style={{fontSize:50,color:"#056bff",paddingBottom:50}}>Suriyaprakash</p>
          <p style={{fontSize:30,color:"smokewhite"}}>i'm front end webdevelopment skill based</p>
          <p style={{fontSize:50,color:"#056bff",paddingBottom:20}}>ReactJs</p>
        </div>
      </Col>
    </div>
  );
}

export default MyHome;
