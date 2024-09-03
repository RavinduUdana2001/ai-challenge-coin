import React from 'react';
import './CardContent.css';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import fiver from '../../assets/fff.png';
import upwork from '../../assets/y.png';
import freelancer from '../../assets/asasa.png';

function CardContent() {
  const cardStyle = {
    width: '100%', // Change to 100% for better responsiveness
    height: '25rem',
    maxWidth: '300px', // Limit maximum width to avoid stretching on large screens
    margin: '0 auto', // Center the cards horizontally
  };

  const imageStyle = {
    width: '100px',
    height: '100px',
    display: 'block',
    margin: '15px auto 0', // Center the image vertically and horizontally
  };

  return (
    <Container  className="my-component-container mt-5 pt-2 mb-5" >
      <Row className="gx-3 justify-content-center"> {/* Center the row content */}
        {/* Large screens - Three cards in a row */}
        <Col lg={4} md={6} mb={4}>
          <Card border="0" className="rounded-2 text-center mb-3" style={cardStyle}>
            <Card.Img className="mt-5" variant="top" src={fiver} alt="..." style={imageStyle} />
            <Card.Body className="mt-2">
              <Card.Title>Fiverr Profile</Card.Title>
              <Card.Text className="mt-1 mb-4">
                Explore my Fiverr services and portfolio. Professional work delivered with expertise and efficiency.
              </Card.Text>
              <Button variant="primary" href="https://www.fiverr.com/u_tech/" target="_blank">Go to Fiverr</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col lg={4} md={6} mb={4}>
          <Card border="0" className="rounded-2 text-center mb-3" style={cardStyle}>
            <Card.Img className="mt-5" variant="top" src={upwork} alt="..." style={imageStyle} />
            <Card.Body className="mt-2">
              <Card.Title>Upwork Profile</Card.Title>
              <Card.Text className="mt-1 mb-4">
                Discover my Upwork skills and projects. Collaborate with me for your next project success.
              </Card.Text>
              <Button variant="primary" href="https://www.upwork.com/freelancers/~01d1b43d5d5bef6758?mp_source=share" target="_blank">Go to Upwork</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col lg={4} md={6} mb={4}>
          <Card border="0" className="rounded-2 text-center mb-3" style={cardStyle}>
            <Card.Img className="mt-5" variant="top" src={freelancer} alt="..." style={imageStyle} />
            <Card.Body className="mt-2">
              <Card.Title>Freelancer Profile</Card.Title>
              <Card.Text className="mt-1 mb-4">
                Visit my Freelancer profile for showcased expertise and successful projects. Let's discuss your goals.
              </Card.Text>
              <Button variant="primary" href="https://www.freelancer.com/u/utech69" target="_blank">Go to Freelancer</Button>
            </Card.Body>
          </Card>
        </Col>

   
      </Row>
    </Container>
  );
}

export default CardContent;
