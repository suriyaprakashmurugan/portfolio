import "./about.css";
import React, { useState } from "react";
import { Image, Row, Col, Layout } from "antd";
import { Typography } from "antd";
import IMG from '../images/myg.jpg';
import IMG1 from '../images/IMG-20220206-WA0008.jpg';
import IMG2 from '../images/IMG_20210926_104018.jpg';
import {
  SmileOutlined
} from '@ant-design/icons';

function About() {
  const [visible, setVisible] = useState(false);
  const { Title, Paragraph } = Typography;
  const { Content } = Layout;


  return (
    <div>
    <Content>      
      <div>
        <Row>
          <Col xs={24} xl={12}  className="about-pg">
            {" "}
            <div className="my-img">
              <Image
                preview={{ visible: false }}
                width={350}
                src={IMG}
                onClick={() => setVisible(true)}
              />
              <div style={{ display: "none" }}>
                <Image.PreviewGroup
                  preview={{
                    visible,
                    onVisibleChange: (vis) => setVisible(vis),
                  }}
                >
                  <Image src={IMG}/>
                  <Image src={IMG1}/>
                  <Image src={IMG2}/>
                </Image.PreviewGroup>
              </div>
            </div>{" "}
          </Col>
          <Col xs={24} xl={12}  className="about-pg">
            <div className="my-img">
              <p>< SmileOutlined/> Who I am</p>
              <Title>about me</Title>
              <Paragraph style={{fontSize:20}}>
                I am Suriyaprakash and am from namakkal District,Tamilnadu.I
                started learn about Front End Web Development after I have
                completed my beachelor of engineering in streams of Electrical
                and Electronics Engineering from Erode Builders Engineering
                College in the year of 2020.
              </Paragraph>
            </div>
          </Col>
        </Row>
      </div>
      </Content>
    </div>
  );
}

export default About;
