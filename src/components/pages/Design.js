import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Emoji from 'a11y-react-emoji';

import space from '../../assets/space.png';


class Design extends React.Component {

  render() {


    return(
      <Container fluid="xl" className="justify-content-center pt-5">
      <Jumbotron className="bg-transparent ">
        <Container fluid={true}>
          <Row className="justify-content-around">
          <Col md={8} sm={10}>
                      <h4 style={{ fontSize:'44px', fontWeight: 'bold'}}>Experimenting with digital design</h4>
                      <h3 style={{ fontSize:'20px', fontWeight: '100'}} >
                      <p> A beginner at illustrator. More content coming soon :)
                      </p>
                      </h3>
                      <p className="calign">
                      <img className="card-image1 justify-content-center" src={space}  /></p>

          </Col>
          </Row>
        </Container>
      </Jumbotron>

      </Container>



    );
  }
  }



export default Design;
