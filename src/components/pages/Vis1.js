import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import flowchart from '../../assets/flowchart.png';
import virus from '../../assets/viruscells.png';
import graph from '../../assets/graph.png';

function Vis1(props) {

  return(
    <Container fluid="xl" className="justify-content-center pt-5">
        <Jumbotron className="bg-transparent ">
            <Container fluid={true}>
                <Row className="justify-content-around">
                    <Col md={8} sm={10} className="test3">

                    <h3 style={{ fontSize:'46px', fontWeight: 'bold'}}>Virus transmission visualisation</h3>
                    <Row id={'bottom'} className="pl-3" style={{ fontSize:'14px', fontWeight: 'lighter'}}><mark>PROCESSING</mark></Row>


                    <Row id={'bottom'} className="pl-3 pt-5 pb-3" style={{ fontSize:'14px', fontWeight: 'bold'}}>PROJECT BRIEF</Row>
                    <h3 style={{ fontSize:'20px', fontWeight: '100'}}>
                        <p >
                        The objective was to create a biology visualisation to demonstrate the process of virus transmission.
                        A particle system model was used to create the visualiosation. Particle system provides an abstraction for cells and can have various characteristics eg velocity,
                        acceleration, etc. The model would be temporal as the user would be able to see
                        how the infected cells affect the healthy cells over a period of time. The audience for
                        this visualisation would be students and the aim of the visualisation would be to provide a visual
                        aid in understanding how viruses are transmitted considering factors such as immune system, infectiousness, etc.
                        </p>

                    <Row id={'bottom'} className="pl-3 pt-5 pb-3" style={{ fontSize:'14px', fontWeight: 'bold'}}>RESEARCH</Row>
                    <p>
                    The reserach consucted for this project inluded identifying what viruses are and how they are transmitted. The key findings are:
                    </p>
                    <li className="p-1 pl-4">Viruses consist of a shell made of protein. The protein encapsulations either DNA or RNA with enzymes for replication and
                    manipulation of their genetic material.</li>
                    <li className="p-1 pl-4">To replicate Viruses need a host onto which they attach themselves and cells are the perfect host</li>
                    <li className="p-1 pl-4">Once the virus enters the cell, it can release
                    RNA which causes the cell to create the viruses protein.</li>
                    <li className="p-1 pl-4"> This then leads to the cells killing itself or the membrane of the cell
                    gets dissolved. Now the viruses can emerge and spread to other cells.</li>
                    <p className="pt-3">The transmission process is more complicated with processs such as lysis, endocytosis, etc. This project
                    only looks at the basic idea as it is targeted towards younger students.
                    </p>

                    <Row id={'bottom'} className="pl-3 pt-5 pb-1" style={{ fontSize:'14px', fontWeight: 'bold'}}>FLOWCHART</Row>
                    <h3 style={{ fontSize:'20px', fontWeight: '100'}}><p className="pt-3 pb-3">
                    This is the logic that the model uses to visualise the virus transmission</p>
                    </h3>
                    <p className="calign">
                    <img className="card-image justify-content-center" src={flowchart}  />
                    </p>
                    </h3>

                    <Row id={'bottom'} className="pl-3 pt-5 pb-1" style={{ fontSize:'14px', fontWeight: 'bold'}}>INITIAL VISUALISATION</Row>
                    <h3 style={{ fontSize:'20px', fontWeight: '100'}}>
                    <p>This visualisation is temporal and changes according to the time.
                     The green particles denote the healthy cells and the red particles denote the virus cells
                     There are fewer healthy cells and a lot more virus cells in the visualisation 30 seconds later as illustrated by the images.
                     </p>
                    <p className="calign">
                    <img className="card-image justify-content-center" src={virus}  />
                    </p>
                    </h3>

                    <Row id={'bottom'} className="pl-3 pt-5 pb-1" style={{ fontSize:'14px', fontWeight: 'bold'}}>DEVELOPMENT </Row>
                    <h3 style={{ fontSize:'20px', fontWeight: '100'}}>
                    <p>To develop the model, a continuous graph was created which runs alongside the particle system model. This
                     really helps to see the trends and patterns. It makes it easy to analyse the process in the model.
                     </p>
                    <p className="calign">
                    <img className="card-image justify-content-center" src={graph}  />
                    </p>
                    </h3>


                    <Row id={'bottom'} className="pl-3 pt-5 pb-1" style={{ fontSize:'14px', fontWeight: 'bold'}}>EVALUATION </Row>
                    <h3 style={{ fontSize:'20px', fontWeight: '100'}}>
                    <p>The use of the particle system to model this is highly effective as the ellipses are an abstraction of cells
                    and viruses but can be given similar functionality. Using the flow field in the particle system allows the particles
                    to move around in different directions which would be similar to real life.
                    <div>
                    The use of the continuous graph makes the visualisation increases the effectiveness of the model as the user is able
                    to see the general trends and pattern at a given frame count which would otherwise not be visible through the particle
                    system alone.
                    </div>
                    To improve this model, I would need to create the model for a specific virus rather than general. If I make it more
                    specific, I will be able to get some stats which would be useful in creating an accurate and highly realistic model.
                    It would then also serve as a better resource to students as it will have established stats backing the visualisation.

                     </p>
                    </h3>


                    </Col>
                </Row>
            </Container>
        </Jumbotron>



    </Container>


  );

}

export default Vis1;
