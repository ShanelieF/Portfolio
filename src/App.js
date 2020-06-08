import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Homepage from "./components/pages/Homepage";
import About from "./components/pages/About";
import Paint from "./components/pages/Paint";
import Design from "./components/pages/Design";
import Vis1 from "./components/pages/Vis1";
import Mvis from "./components/pages/Mvis";
import Footer from "./components/Footer"
import Software from "./components/pages/Software"

function App() {

    return(
      <Container className="p-0 " fluid={true}>
      <Router>
      <Navbar className="border-bottom fstyle" bg="transparent" expand="lg">
      <Navbar.Brand className="pl-auto ">SHANELIE FERNANDES</Navbar.Brand>
      <Navbar.Toggle className="border-0" aria-controls="navbar-toggle"/>
      <Navbar.Collapse id="navbar-toggle">
      <Nav className="ml-auto" >
      <a className="nav-link" href="/Portfolio">HOME</a>
      <a className="nav-link" href="/Portfolio/#bottom">PROJECTS</a>
      <a className="nav-link" href="/paint">ART</a>
      <Link className="nav-link" to="/about">ABOUT</Link>


      </Nav>
      </Navbar.Collapse>
      </Navbar>


      <Route path="/Portfolio" exact component ={Homepage} />
      <Route path="/about" exact component ={About} />
      <Route path="/paint" exact component ={Paint} />
      <Route path="/design" exact component ={Design} />
      <Route path="/vis1" exact component ={Vis1} />
      <Route path="/mvis" exact component ={Mvis} />
      <Route path="/software" exact component ={Software} />

</Router>
<Footer/>
      </Container>

    );

}




export default App;
