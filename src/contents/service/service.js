import React from "react";
import "./service.css";
import { Card, Col, Row} from "antd";

function Service() {
  return (
    <>
      <div className="service-pg">
        <h1 style={{paddingTop:40,color:"#8c12fd"}}>Skills</h1>
        <div className="site-card-wrapper">
        <Row justify="center" gutter={[16]}>
            <Col xs={24}  md={12} xl={8}>
              <Card
                hoverable
                bordered={false}
                style={{ width:150, marginLeft:120, backgroundColor:"transparent"}}
                cover={
                    <img
                    style={{width:150,height:150}}
                    alt="example"
                    src="https://www.pinclipart.com/picdir/big/553-5535032_html-css-javascript-logo-clipart.png"
                  />
                }
              >
                <h5>HTML,CSS,JS</h5>
              </Card>
            </Col>
            <Col  xs={24}  md={12} xl={8}>
              <Card
                hoverable
                bordered={false}
                style={{ width:150, marginLeft:120, backgroundColor:"transparent"}}
                cover={
                  <img
                  style={{width:150,height:150}}
                    alt="example"
                    src="https://icons.getbootstrap.com/assets/img/icons-hero.png"
                  />
                }
              >
               <h5>BOOTSTRAP</h5>   
              </Card>
            </Col>
            <Col  xs={24}  md={12} xl={8}>
              <Card
                hoverable
                bordered={false}
                style={{ width:150, marginLeft:120, backgroundColor:"transparent"}}
                cover={
                  <img
                  style={{width:150,height:150}}
                    alt="example"
                    src="https://gw.alipayobjects.com/zos/rmsportal/rlpTLlbMzTNYuZGGCVYM.png"
                  />
                }
              >
               <h5>ANT DESIGN</h5> 
              </Card>
            </Col>
            <Col  xs={24}  md={12} xl={8}>
              <Card
                hoverable
                bordered={false}
                style={{ width:150, marginLeft:120, backgroundColor:"transparent"}}
                cover={
                    <img
                    style={{width:150,height:150}}
                    alt="example"
                    src="https://www.pngkey.com/png/full/178-1787508_github-icon-download-at-icons8-white-github-icon.png"
                  />
                }
              >
               <h5>GITHUB</h5> 
              </Card>
            </Col>
            <Col  xs={24}  md={12} xl={8}>
              <Card
                hoverable
                bordered={false}
                style={{ width:150, marginLeft:120, backgroundColor:"transparent"}}
                cover={
                  <img
                  style={{width:150,height:150}}
                    alt="example"
                    src="https://www.kemiadeleke.com/media/react-logo.svg"
                  />
                }
              >
               <h5>REACTJS</h5>    
              </Card>
            </Col>
            <Col  xs={24}  md={12} xl={8}>
              <Card
                hoverable
                bordered={false}
                style={{ width:150, marginLeft:120, backgroundColor:"transparent"}}
                cover={
                  <img
                  style={{width:150,height:150}}
                    alt="example"
                    src="https://www.makingdifferent.com/wp-content/uploads/2015/10/java-logo.png"
                  />
                }
              >
               <h5>BASIC JAVA</h5>  
              </Card>
            </Col>
          </Row>
        </div>
        ,
      </div>
    </>
  );
}

export default Service;
