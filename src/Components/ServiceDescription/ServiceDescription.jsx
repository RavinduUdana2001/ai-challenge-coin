import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import pic2 from '../../assets/shipping.jpg'; // Replace with your image path

function ServiceDescription() {
  return (
    <div style={{ backgroundColor: '#fff', padding: '50px 0' }}>
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} className="text-center">
            <h2 style={{ 
              fontSize: '2rem', 
              fontWeight: 'bold', 
              color: '#333', 
              marginBottom: '20px',
              textTransform: 'uppercase',
              letterSpacing: '1px'
            }}>
              Get everything in one place!
            </h2>
            <p style={{ 
              fontSize: '1.2rem', 
              lineHeight: '1.6', 
              color: '#555',
              marginBottom: '40px' // Add space between text and image
            }}>
              I have manufacturers worldwide which I provide design service for their factories. I can ship coins, medals, pins, patches or any product to your location. 
              Final products are 100% accurate to my designs and have genuine high-quality finishing and packaging. 
              You can get the design and select a suitable manufacturer with 100% trust worldwide because I have been doing this designing business for years. 
              Your order will be shipped to your location 100% confidentially with fast dispatch time. FedEx and other shipping methods are available.
            </p>
          </Col>
          <Col xs={12} className="text-center">
            <Image 
              src={pic2} 
              rounded 
              className="img-fluid shadow-lg" 
              style={{ borderRadius: '20px', maxWidth: '100%', height: 'auto' }} 
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ServiceDescription;
