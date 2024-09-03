import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import pic1 from '../../assets/vision.png';
import pic2 from '../../assets/mission.png';

function MissionContent() {
  return (
    <div>
      <Container fluid style={{backgroundColor:'#ffffff'}}>
        <Row className='justify-content-center align-items-center'>
      
          <Col md={6} lg={6} className='text-center '>
          <div className='me-lg-5 mb-4 me-md-0 ms-md-5'>
          <Image src={pic1} rounded className='img-fluid mt-5 mb-5 ms-lg-3 pt-3 pb-3 ps-lg-4' />
              <h2 className='mb-5'style={{ fontSize: '2.6rem', fontWeight: 'bold', color: '#333' }}>Our Vision</h2>
              <p className='mb-5'>
              To provide genuine, end-to-end project solutions. From inception to completion, 
              we are committed to delivering authentic designs that resonate with our clients'
               goals and aspirations.
              </p>
            </div>
          </Col>
          <Col md={6} lg={6} className='text-center '>
          <div className='me-lg-5 mb-4 me-md-0 ms-md-5'>
          <Image src={pic2} rounded className='img-fluid mt-5 mb-5 ms-lg-3 pt-3 pb-3 ps-lg-4' />
              <h2 className='mb-5'style={{ fontSize: '2.6rem', fontWeight: 'bold', color: '#333' }}>Our Mission</h2>
              <p className='mb-5'>
              Crafting designs to perfection, tailored to your needs. From challenge coins to
               bespoke creations, we ensure every project meets manufacturing standards and exceeds 
               expectations. Offering flexible output formats for your convenience.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default MissionContent;
