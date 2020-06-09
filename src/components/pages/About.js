import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Emoji from 'a11y-react-emoji'
function About(props){



    return(

      <div className="container-fluid justify-content-center pt-5">
      <Jumbotron className="bg-transparent ">
        <Container fluid={true}>
          <Row className="justify-content-around">
          <Col md={8} sm={10}>
                      <h3 style={{ fontSize:'46px', fontWeight: 'bold'}}>A <mark>little</mark> bit about me</h3>

                      <h3 style={{ fontSize:'20px', fontWeight: '100'}} >
                    <p className="pt-4">I was born in 1999 in Goa, India and currently reside in the UK. Having moved to the UK at age 12, I quickly accommodated to a different culture. My schooling experience in India has made me
                    competitive and has directed me to be focused to achieve my goals.
                    Having completed my GCSE’s and A-levels in the UK, I have enjoyed the application and tutorial approach.
                    The different approaches to learning have influenced me to be the person I am – focused, tenacious and determined.</p>
                    <p>  At school, I've always been interested in both Design and Technology. When it came to
                      choosing a degree to study, I was conflicted between Graphic design and Computer Science. I chose the latter and
                      it has been a great experience so far!</p>
                    <p>  Through the ups and downs of university, I have become resilient and persistent. I always look forward to learning new
                    skills and improve upon my existing ones. I aspire to become a UI/UX designer as it
                      combines my interest in both Design and Technology.
                      <Emoji symbol="😎" label="B)" /> </p>



                        <Row id={'bottom'} className="pl-3 pt-3" style={{ fontSize:'14px', fontWeight: 'bold'}}>LANGUAGES I'VE WORKED WITH </Row>
                      <p className=" pt-3">Java, SQL, Bash, C, HTML/CSS, JavaScript, Python, Prolog, Javacc</p>

                      <Row id={'bottom'} className="pl-3 pt-4" style={{ fontSize:'14px', fontWeight: 'bold'}}>TOOLS/FRAMEWORKS </Row>
                    <p className=" pt-3">React, Semantic UI, Bootstrap, SQLite, Processing, UNIX, LaTeX/BibTeX, Adobe XD</p>







                       </h3>
          </Col>
          </Row>
        </Container>
      </Jumbotron>
      </div>


    );
  }



export default About;
