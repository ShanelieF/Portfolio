import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Emoji from 'a11y-react-emoji'

import img1 from '../../assets/img1.jpg';
import img2 from '../../assets/img2.jpg';
import img3 from '../../assets/img3.jpg';
import img4 from '../../assets/img4.jpg';
import img5 from '../../assets/img5.jpg';
import img6 from '../../assets/img6.jpg';
import img7 from '../../assets/img7.jpg';
import img8 from '../../assets/img8.jpg';

class Paint extends React.Component {

  render() {


    return(

      <div className="container-fluid justify-content-center pt-5">
      <Jumbotron className="bg-transparent ">
        <Container fluid={true}>
          <Row className="justify-content-around">
          <Col md={8} sm={10}>
                      <h4 style={{ fontSize:'44px', fontWeight: 'bold'}}>I like to <mark>paint</mark> landscapes</h4>
                      <h3 style={{ fontSize:'20px', fontWeight: '100'}} >
                      <p> My paintings are inspired by nature and places I have travelled to. The painting mediums mostly used are acrylics and
                      gouache colours.
                      </p>
                      </h3>
                      <div className="container1">
                      <img
                        className="box image-fluid"
                        src={img1}
                        alt="First slide"
                      />
                      <img
                        className="box image-fluid"
                        src={img2}
                        alt="Third slide"
                      />
                      <img
                        className="box image-fluid"
                        src={img3}
                        alt="Third slide"
                      />
                      <img
                        className="box image-fluid"
                        src={img6}
                        alt="Third slide"
                      />
                      <img
                        className="box image-fluid"
                        src={img5}
                        alt="Third slide"
                      />
                      <img
                        className="box image-fluid"
                        src={img7}
                        alt="Third slide"
                      />
                      <img
                        className="box image-fluid"
                        src={img4}
                        alt="Third slide"
                      />
                      <img
                        className="box image-fluid"
                        src={img8}
                        alt="Third slide"
                      />
                      </div>

            


          </Col>
          </Row>
        </Container>
      </Jumbotron>
      </div>



    );
  }
  }



export default Paint;
