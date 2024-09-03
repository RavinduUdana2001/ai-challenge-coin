import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './WebContent.css';
import web from '../../assets/Untitled design.gif';

function WebContent() {
  return (
    <Container className="web-content-container">
      <Row className="justify-content-center align-items-center">
        <Col lg={12} md={12} className="text-center mb-4">
          <h1 className="web-content-title">Looking for a Website!</h1> {/* Change h2 to h1 for increased prominence */}
          <h2 className="web-content-subtitle mt-3">Embark on Your Digital Journey with Professional Web Development.</h2> {/* Add a subtitle for additional emphasis */}
          <img
            src={web}
            alt="Website Design"
            className="web-content-image img-fluid"
            style={{height:'500px' , width:'1000px'}}
          />
        </Col>
        
        <Col lg={12} md={12} className="text-center">
          <p className="web-content-description mt-3 mb-5">
            Are you in need of a professional website that showcases your brand and
            captivates your audience? Look no further! Our team of expert developers
            specializes in crafting stunning websites tailored to your unique needs.
            From sleek designs to seamless functionality, we bring your vision to life
            and help you stand out in the digital world. Let's embark on this journey
            together and create a website that leaves a lasting impression.
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default WebContent;
