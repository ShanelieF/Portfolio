import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import f1 from '../../assets/f1.png';
import f2 from '../../assets/f2.png';
import f3 from '../../assets/f3.png';
import f4 from '../../assets/f4.png';
import p6 from '../../assets/p6.png';
import pages from '../../assets/pages.png';

function Software(props) {

    return(
      <Container fluid="xl" className="justify-content-center pt-5">
          <Jumbotron className="bg-transparent ">
              <Container fluid={true}>
                  <Row className="justify-content-around">
                      <Col md={8} sm={10} className="test3">

                      <h3 style={{ fontSize:'46px', fontWeight: 'bold'}}>Trade derivative monitor software</h3>
                      <Row id={'bottom'} className="pl-3 tags" style={{ lineHeight: '0.7',  fontSize:'14px', fontWeight: 'lighter'}}><mark>REACT </mark> <div className="pr-3"></div>
                      <mark>PYTHON</mark>
                      <div className="pr-3"></div> <mark>RESTful API</mark>
                      <div className="pr-3"></div> <mark> SEMANTIC UI</mark>
                      <div className="pr-3"></div> <mark>SQLite</mark></Row>


                      <Row id={'bottom'} className="pl-3 pt-5 pb-3" style={{ fontSize:'14px', fontWeight: 'bold'}}>PROJECT OVERVIEW</Row>
                      <h3 style={{ fontSize:'20px', fontWeight: '100'}}>
                          <p >
                        The main aim for this project was to create a trade derivative monitor, whereby trades could be inputted by a
                        user and then validated, suggesting possible errors and rejecting invalid inputs, these trades will then be
                        stored and accessible for editing. The project will also be able to produce a report of all the derivative trades
                        for a given day and display this to the user, these reports will be saved so they can be accessed again.
                          </p>


                      <Row id={'bottom'} className="pl-3 pt-5 pb-3" style={{ fontSize:'14px', fontWeight: 'bold'}}>INITIAL CONCEPTION</Row>
                          <p >
                          This was a group project so initially the team ran a whiteboarding session to obtain initial ideas for the structure and approach to the project,
                         this involved outlining our distinct components and the functions of each component. The project was broken down
                         into three distinct sections, a web app, an API and a mobile app.

                          </p>

                      <Row id={'bottom'} className="pl-3 pt-5 pb-3" style={{ fontSize:'14px', fontWeight: 'bold'}}>MY ROLE</Row>
                          <p >
                          I was the lead member of the frontend team and my duties included creating the user interfaces and intergrating the
                          frontend and the backend.

                          </p>


                      <Row id={'bottom'} className="pl-3 pt-5 pb-3" style={{ fontSize:'14px', fontWeight: 'bold'}}>KEY REQUIREMENTS</Row>
                          <p >

                          Functional requirements:
                          </p>
                          <p className="pl-3" >
                          <li>The user must be able to input a new trade</li>
                          <li>The user must be able to edit an existing trade</li>
                          <li>The user must be able to delete an existing trade</li>
                          <li>The system must be able to generate daily reports on the given day</li>
                          <li>The system should detect if an error has been entered by the user</li>
                          <li>The system should learn from historical data and previous user interactions</li>
                          <li>The system should learn common mistakes from users and suggest corrections</li>
                          </p>
                          Non-functional requirements:
                          <p className="pl-3 pt-3" >
                          <li>The system must remain responsive</li>
                          <li>The system must be validated</li>
                          <li>The system should require little to no training to use</li>
                          <li>The system should be kept up to date</li>

                          </p>


                      <Row id={'bottom'} className="pl-3 pt-5 pb-3" style={{ fontSize:'14px', fontWeight: 'bold'}}>PROTOTYPES</Row>
                      <p> This diagram identifies the key pages of the website. </p>
                      <p className="calign">
                      <img className="card-image justify-content-center" src={pages}  />
                      </p>
<p> These are some of the initial prototype ideas. </p>
                      <p className="calign">
                      <img className="card-image1 justify-content-center" src={p6}  />
                      </p>

                      <Row id={'bottom'} className="pl-3 pt-5 pb-3" style={{ fontSize:'14px', fontWeight: 'bold'}}>FINAL</Row>
                      <p> Here are a few snapshots of the final product. The images demonstrate the dark mode and light mode feature and are
                      reflective of the homepage, input trades page and adding new company page. </p>
                      <p className="calign">
                      <img className="card-image1 justify-content-center" src={f1}  />
                      </p>
                      <p className="calign">
                      <img className="card-image1 justify-content-center" src={f2}  />
                      </p>
                      <p className="calign">
                      <img className="card-image1 justify-content-center" src={f3}  />
                      </p>
                      <p className="calign">
                      <img className="card-image1 justify-content-center" src={f4}  />
                      </p>

                      <Row id={'bottom'} className="pl-3 pt-5 pb-3" style={{ fontSize:'14px', fontWeight: 'bold'}}>EVALUATION</Row>
                      <p>
                      Overall, the software managed to meet the requirements.
                      The UI differs slightly from the mock-up designs as the interface mainly uses neutral colours since it looks simplistic and makes the design look modern.
                      This allows the user to avoid distractions and focus on the main content. A few additional nav icons were added just so the user can navigate to
                      pages such as add company and add product without specifically being on the input trade page.
                      The webpage is responsive so can be used on desktops, tablets, as well as mobiles. However, to improve a mobile app could be made.
                      Furthermore, the webpage uses icons for the navbar but to improve this will be changed to nav links as its easier for the user to read them.
                      This project helped me understand that aligning the team's design ideas is very important so that webpages have a consistent design.
                      </p>






                      </h3>


                      </Col>
                  </Row>
              </Container>
          </Jumbotron>


      </Container>

    );

}

export default Software;
