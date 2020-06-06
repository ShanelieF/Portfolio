import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Emoji from 'a11y-react-emoji'
function About(props){



    return(

      <Container fluid="xl" className="justify-content-center pt-5">
      <Jumbotron className="bg-transparent ">
        <Container fluid={true}>
          <Row className="justify-content-around">
          <Col md={8} sm={10}>
                      <h3 style={{ fontSize:'46px', fontWeight: 'bold'}}>Born in 1999 in the small state of <mark>Goa</mark>, India.</h3>
                      <h4 style={{ fontSize:'44px', fontWeight: 'bold'}}>Currently living in the <mark style={{background:'rgba(39, 237, 191, 0.1)'}}>United Kingdom</mark></h4>
                      <h3 style={{ fontSize:'20px', fontWeight: '100'}} >
                    <p>  Having moved to the UK at age 12, I quickly accomodated to a different culture. My schooling experience in India has made me
                    competitive and has directed me to being focused to achieve my goals.
                    Having completed my GCSE’s and A-levels in the UK, I have enjoyed the application and tutorial approach.
                    The different approaches to learning have influenced me to be the person I am – focused, tenacious and determined.</p>
                    <p>  At school, I've always been interested in both Design and Technology. When it came to
                      choosing a degree to study, I was conflicted between Graphic design and Computer Science. I chose the latter and
                      it has been a great experience so far!</p>
                    <p>  Through the ups and downs of university I have become resillent and persistent to achieve my goals. Constantly learning
                      something new and being passioante about a project makes me happy. My aspiration is to become an UI/UX designer as it
                      combines my interest in both Design and Technology.
                      <Emoji symbol="😎" label="B)" /> </p>


                      <p>Here is a list of frameworks/languages I have worked with:
                      </p>
                      <ul>
                      <li>JAVA</li>
                      <li>SQL</li>
                      <li>HTML/CSS</li>
                      </ul>






                       </h3>
          </Col>
          </Row>
        </Container>
      </Jumbotron>

      </Container>


    );
  }



export default About;
