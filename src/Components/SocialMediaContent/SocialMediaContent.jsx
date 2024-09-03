import React from 'react';
import './SocialMediaContent.css';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import facebook from '../../assets/pngwing.com (3).png';
import whatsapp from '../../assets/pngwing.com (5).png';
import linkedin from '../../assets/pngwing.com (8).png';
import insta from '../../assets/pngwing.com.png';

function SocialMediaContent() {
  const cardStyle = {
    width: '95%', // Adjusted width
    textAlign: 'left',
    height: '19rem',
  };

  const imageStyle = {
    width: '100px',
    height: '100px',
    marginLeft: 'auto',
    marginRight: 'auto',
    display: 'block',
    
  };

  return (
    <Container className="my-component-container mt-5 pt-2 mb-5">
      <Row className="gx-3 ms- ps-lg-1">
        <Col lg={6} mb={4}> {/* Change lg={3} to lg={6} */}
          <Card border="1" className="rounded-2 text-center ms-2 mb-3" style={cardStyle}>
            <Card.Img className="mt-1" variant="top" src={facebook} alt="..." style={imageStyle} />
            <Card.Body className="mt-2">
              <Card.Title>Card title 1</Card.Title>
              <Card.Text className="mt-1">
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={6} mb={4}> {/* Change lg={3} to lg={6} */}
          <Card border="1" className="rounded-2 text-center ms-2 mb-3" style={cardStyle}>
            <Card.Img className="mt-1" variant="top" src={whatsapp} alt="..." style={imageStyle} />
            <Card.Body className="mt-2">
              <Card.Title>Card title 2</Card.Title>
              <Card.Text className="mt-1">
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={6} mb={4}> {/* Change lg={3} to lg={6} */}
          <Card border="1" className="rounded-2 text-center ms-2 mb-3" style={cardStyle}>
            <Card.Img className="mt-1" variant="top" src={linkedin} alt="..." style={imageStyle} />
            <Card.Body className="mt-2">
              <Card.Title>Card title 3</Card.Title>
              <Card.Text className="mt-1">
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={6} mb={4}> {/* Change lg={3} to lg={6} */}
          <Card border="1" className="rounded-2 text-center ms-2 mb-3" style={cardStyle}>
            <Card.Img className="mt-1" variant="top" src={insta} alt="..." style={imageStyle} />
            <Card.Body className="mt-2">
              <Card.Title>Card title 4</Card.Title>
              <Card.Text className="mt-1">
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default SocialMediaContent;
