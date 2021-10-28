import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

class Grid extends React.Component {
    render() {
        return(
           <Container className="container">
               <Row className='rows'>
                   <Col className="columns" id="about">ABOUT</Col>
                   <Col className='columns' id="services">SERVICES</Col>
                   <Col className="columns" id="individual">INDIVIDUAL</Col>
               </Row>
               <Row className="rows">
                   <Col className="columns" id="couples">COUPLES</Col>
                   <Col className='columns' id="group">GROUP</Col>
                   <Col className="columns" id="fees">FEES</Col>
               </Row>
               <Row className="rows">
                   <Col className="columns" id="workshops">WORKSHOPS</Col>
                   <Col className="columns" id="request">REQUEST CONSULTATION</Col>
                   <Col className="columns" id="contact">CONTACT</Col>
               </Row>
           </Container>

        );
    }
}
export default Grid;