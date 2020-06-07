import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import map1 from '../../assets/map1.png';
import map2 from '../../assets/map2.png';
import map3 from '../../assets/md.jpeg';

function Mvis(props) {

    return(
      <Container fluid="xl" className="justify-content-center pt-5">
          <Jumbotron className="bg-transparent ">
              <Container fluid={true}>
                  <Row className="justify-content-around">
                      <Col md={8} sm={10} className="test3">

                      <h3 style={{ fontSize:'46px', fontWeight: 'bold'}}>Malaria mortality visualisation</h3>
                      <Row id={'bottom'} className="pl-3" style={{ fontSize:'14px', fontWeight: 'lighter'}}><mark>PROCESSING</mark></Row>


                      <Row id={'bottom'} className="pl-3 pt-5 pb-3" style={{ fontSize:'14px', fontWeight: 'bold'}}>PROJECT OVERVIEW</Row>
                      <h3 style={{ fontSize:'20px', fontWeight: '100'}}>
                          <p >
                          The objective was to create a visualisation to demonstrate the death rates caused by Malaria.
                          The audience chosen for the visualisation is the general public and the aim of the visualisation
                          would be to explore the different patterns and trends of deaths across different countries.
                          The dataset selected uses a geographical data structure i.e the data will have correspondence
                          to coordinates on a world map.
                          A bubble map is used for the visualisation as it allows to process large amounts of numeric
                          data very quickly. It can also be plotted to the specific coordinate of the country and the size
                          of the bubble is proportional to the quantitative value that needs to be visualised.
                          </p>


                      <Row id={'bottom'} className="pl-3 pt-5 pb-3" style={{ fontSize:'14px', fontWeight: 'bold'}}>RESEARCH</Row>
                      <p>
                      The reserach consucted for this project inluded looking at data sets that have information on malaria deaths.
                      The key information:
                      </p>
                      <li className="p-1 pl-4">The dataset chosen is about the death count that has been caused due to Malaria for children aged between 0 to 5 year olds</li>
                      <li className="p-1 pl-4">The dataset consists of information about each individual country and the neonatal and post-neonatal death count for each country ranging from the year 2000 to 2016</li>
                      <li className="p-1 pl-4">The dataset chosen is very large, hence needs to be filtered in order to visualise it. The source of the dataset is UNICEF</li>
                      <p className="pt-3">The dataset allows for various visualisations to be created. I have filtered the dataset so that it reflects each countries data for the year 2016.
                      The categories that I have extracted include the country code, country name, year, neonatal death and post neonatal death count. The dataset was accessed in January 2019.
                      </p>


                      <Row id={'bottom'} className="pl-3 pt-5 pb-1" style={{ fontSize:'14px', fontWeight: 'bold'}}>INITIAL VISUALISATION</Row>
                      <p>This visualisation uses a bubble map as it is easy to compare the data across the countries. The downside of a bubble map
                      can be that if there are too many bubbles, data might be hard to read and interpret. Ellipses are scaled according to the
                      proportional value of post-neonatal death count per country. This makes it easier to instantly compare the death rates
                      for the countries. The visualisation created makes it evident that majority of the malaria outspread is in
                      the African and the Asian continent.
                      </p>
                      <p className="calign">
                      <img className="card-image1 justify-content-center" src={map1}  />
                      </p>
                      <p> This visualisation labels the top 10 countires with the highest malaria deaths for children under 5. However,
                      it is not able to provide any quantifiable data and the user is not able to interpret data for countries that are not within
                      the top 10. </p>

                      <Row id={'bottom'} className="pl-3 pt-5 pb-1" style={{ fontSize:'14px', fontWeight: 'bold'}}>DEVELOPMENT</Row>
                      <p>The Geo map is used for the development as this library allows for a higher level of detail to be added to the map. Geo map allows for the country
                      border to be drawn which makes it more distinguishable as to which ellipse belongs to which country. Geo map
                      is helpful in terms of making the visualisation interactive. When the user hovers over each country,
                      the visualisation would alter the data seen in the white rectangular box.
                      For example in this illustration I hovered over Nigeria and as seen in the box, it reveals details about the country name and the death count for that specific country.
                      This provides quanitfiable data and makes the visualisation helpful.
                      </p>
                      <p className="calign">
                      <img className="card-image1 justify-content-center" src={map2}  />
                      </p>

                      <Row id={'bottom'} className="pl-3 pt-5 pb-1" style={{ fontSize:'14px', fontWeight: 'bold'}}>FINAL</Row>
                      <p>This is an image of the final visualisation. It is an interactive visualisation so data is provided when user hover over a country.
                      </p>
                      <p className="calign">
                      <img className="card-image1 justify-content-center" src={map3}  />
                      </p>


                      <Row id={'bottom'} className="pl-3 pt-5 pb-1" style={{ fontSize:'14px', fontWeight: 'bold'}}>EVALUATION </Row>
                      <p>The use of the bubble map is very effective as my aim was to compare the death rate across various countries,
                      hence comparing the sizes of the bubbles gives a good estimation as to which country has the highest death rate.
                      Furthermore, the use of the interactive display allows the user to gain more knowledge about the dataset itself.
                      <div>
                      Although the visualisation looks good, the data is mapped slightly inaccurately.
                      As seen from the visualisation some ellipses are placed in the sea.
                      The Latitude and longitudes of the dataset are not very precise and hence some of the data is misplaced on the map.
                      This might cause a small level of distortion of the dataset.
                      </div>


                       </p>





                      </h3>


                      </Col>
                  </Row>
              </Container>
          </Jumbotron>


      </Container>

    );

}

export default Mvis;
