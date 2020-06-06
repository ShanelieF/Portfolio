import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./style.css"
import { SocialIcon } from 'react-social-icons';


function Footer(){

  return(

    <footer >
      <Container fluid={true}>
        <Row className=" justify-content-center pt-5 " style={{fontWeight: 'normal'}}>
          <p> LETS <mark style={{backgroundColor:'#b4e0db'}}>CONNECT</mark> </p>

        </Row>
        <Row className=" justify-content-center pt-1 fstyle" style={{ fontSize:'14px'}}>
        Don't be a stanger, just say Hello!
        </Row>
        <Row className=" justify-content-center pt-3 pb-5" >
        <Col className="p-0 d-flex justify-content-center"  >
        <SocialIcon url="https://www.linkedin.com/in/shanelie-fernandes-54751317a/" fgColor="#ffffff" bgColor="#000000" style={{ height: 45, width: 45}}/>
        <div className="p-3"></div>
        <a href="mailto:Shanelie.Fernandes@warwick.ac.uk?subject=Hello!"><SocialIcon network="email" fgColor="#ffffff" bgColor="#000000"style={{ height: 45, width: 45}}/></a>

        <div className="p-3"></div>
        <SocialIcon url="https://www.instagram.com/shanelie.f/" network="instagram" fgColor="#ffffff" bgColor="#000000" style={{ height: 45, width: 45}}/>

        </Col>

        </Row>

      </Container>
    </footer>
  );



}

export default Footer;
