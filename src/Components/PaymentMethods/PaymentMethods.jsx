import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import paymentImage from '../../assets/payment.jpg'; // Replace with your image path

function PaymentMethods() {
  return (
    <div style={{ 
      backgroundColor: '#f8f9fa', 
      padding: '50px 0', 
      textAlign: 'center'
    }}>
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} md={8}>
            <h2 style={{ 
              fontSize: '2.5rem', 
              fontWeight: 'bold', 
              color: '#333333', // Blue color for a vibrant look
              marginBottom: '20px',
              textTransform: 'uppercase',
              letterSpacing: '2px'
            }}>
              Accepted Payment Methods
            </h2>
            <p style={{ 
              fontSize: '1.2rem', 
              lineHeight: '1.6', 
              color: '#333',
              marginBottom: '40px'
            }}>
              We accept a variety of payment methods to ensure a seamless transaction experience. Choose from the following options:
            </p>
            <Image 
              src={paymentImage} 
              rounded 
              className="img-fluid shadow-lg" 
              style={{ 
                borderRadius: '20px', 
                maxWidth: '100%', 
                height: 'auto', 
                marginBottom: '20px'
              }} 
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default PaymentMethods;
