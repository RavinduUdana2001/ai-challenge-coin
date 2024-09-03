import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import photo from '../../assets/3f3d3ae5efc0673fc33ef8dd145c049a.gif';

function DetailContent3() {
  return (
    <div>
      <Container fluid style={{ backgroundColor: '#eaecfd' }}>
        <Row className='justify-content-center align-items-center mt-4'>
        <Col md={6} lg={6} className='text-center mt-5' style={{ backgroundColor: '#eaecfd' }}>
            <div style={{ width: '100%', height: '100%' }}>
              <img src={photo} alt="GIF" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          </Col>

          <Col md={6} lg={6} className='mb-4'>
          <div className='me-lg-5 mb-4 me-md-0 ms-md-5 mt-2 text-center'>
              <h2 className='mb-4' style={{ fontSize: '2.2rem', fontWeight: 'bold', color: '#333' }}>Connect with Us and Bring Your Ideas to Life!</h2>
              <p className='fs-6'>
              Explore the artistry behind our custom challenge coins, 
              innovative coin designs, and captivating logos. From concept to creation,
               we craft exceptional pieces that leave a lasting impression. Reach out to us 
               today and let's bring your ideas to reality.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default DetailContent3;
