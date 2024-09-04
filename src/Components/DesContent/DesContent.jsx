import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import pic1 from '../../assets/new.jpg';

function MissionContent() {
  return (
    <div style={{ backgroundColor: '#f8f9fa', padding: '50px 0' }}>
      <Container>
        {/* Header and Description Section */}
        <Row className="justify-content-center align-items-center mb-5">
          <Col xs={12} className="text-center">
            <h1 style={{ 
              fontSize: '2.5rem', 
              fontWeight: 'bold', 
              color: '#333', 
              marginBottom: '20px',
              textTransform: 'uppercase',
              letterSpacing: '2px'
            }}>
              How do you process?
            </h1>
            <p style={{ 
              fontSize: '1.2rem', 
              lineHeight: '1.6', 
              color: '#555',
              maxWidth: '800px',
              margin: '0 auto',
            }}>
              You get classy designs in retro or vintage style that incorporate modern design elements and inspirations. 
              Choose the option that best suits your needs for payment methods. First, get your design created and finalize it. 
              Then, you can pay later after the completion of the order. Use any method of payment as you wish.
            </p>
          </Col>
        </Row>

        {/* Image Section */}
        <Row className="justify-content-center align-items-center">
          <Col xs={12} className="text-center">
            <div style={{ display: 'inline-block', maxWidth: '100%', maxHeight: '700px' }}>
              <Image 
                src={pic1} 
                rounded 
                className="img-fluid shadow-lg" 
                style={{ borderRadius: '20px', width: '100%', filter: 'brightness(0.85)' }}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default MissionContent;
