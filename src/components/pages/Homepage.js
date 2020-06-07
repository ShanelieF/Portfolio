import React , {Component} from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import se from '../../assets/SE.png';
import mv from '../../assets/mv.png';
import vt from '../../assets/vt.png';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Paint from "./Paint";
import Design from "./Design";
import Vis1 from "./Vis1";
import Mvis from "./Mvis";
import Software from "./Software";

function Homepage(){



    return(

      <Container fluid="xl" className=" pt-5">
      <Jumbotron className="bg-transparent ">
        <div fluid={true}>
          <Row className="justify-content-around ">
          <Col md={8} sm={10}>
                      <h3 style={{ fontSize:'46px', fontWeight: 'bold'}}><mark style={{backgroundColor:'#b4e0db'}} >Hi</mark>, I am <mark>Shanelie</mark></h3>
                      <h4 style={{ fontSize:'44px', fontWeight: 'bold'}}>I <a className="st" href="#bottom"> code</a> , <a className="st1" href="/paint"> paint</a> & <a className="st" href="/design">design</a></h4>
                      <h3 style={{ fontSize:'20px', fontWeight: '100'}} > I am currently a third year student at the University of Warwick
                      studying BSc Computer Science with Business studies. Studying Computer Science I have enjoyed the chanllenge of solving
                      problems. I am an art and design enthusiast and I look forward at combining my interests as I aspire to be a UI/UX designer. </h3>
          </Col>
          </Row>
        </div>
      </Jumbotron>
      <Row id={'bottom'} className="justify-content-around fstyle p-0" style={{ fontSize:'14px', fontWeight: 'lighter'}}>RECENT WORK</Row>
      <Container fluid={true}>
      <Row className="justify-content-around">
      <div className="d-inline-block img-fluid se-card" >
      <a href="/software"><img className="se-card-image" src={se}  /></a>

      </div>
      </Row>
      </Container>
      <Container fluid={true}>
      <Row className="justify-content-around">
      <div className="d-inline-block img-fluid se-card" >
      <a href="/vis1"><img className="se-card-image" src={vt}  /></a>

      </div>
      </Row>
      </Container>
      <Container fluid={true}>
      <Row className="justify-content-around">
      <div className="d-inline-block img-fluid se-card" >
      <a href="/mvis"><img className="se-card-image" src={mv}  /></a>

      </div>
      </Row>
      </Container>
      <Router>

      <Route path="/mvis" exact component ={Mvis} />
      <Route path="/software" exact component ={Software} />
      <Route path="/vis1" exact component ={Vis1} />


      </Router>

      </Container>




    );
  }


  export default  Homepage;
