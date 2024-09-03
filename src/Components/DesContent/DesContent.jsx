import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import pic1 from '../../assets/new.jpg';

function MissionContent() {
  return (
    <div>
      <Container fluid>
        <h2 className="text-center mt-5 mb-4" style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#333' }}>How Our Work Is Going On</h2>
        <Row className='justify-content-center align-items-center'>
          <Col xs={12} className='text-center'>
            <Image 
              src={pic1} 
              rounded 
              className='img-fluid mt-2 mb-4 shadow-lg mb-5' 
              style={{ borderRadius: '20px', maxHeight: '700px', width: '100%' }} // Adjust image size here
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default MissionContent;
