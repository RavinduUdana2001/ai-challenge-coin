import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import fiver from '../../assets/new_software.png';
import upwork from '../../assets/new_data.png';
import freelancer from '../../assets/new_machine.png';
import pic1 from '../../assets/new_cloud.png';
import pic2 from '../../assets/new_digital.png';
import pic3 from '../../assets/new_cloud.png';

function ServiceContent() {

  const cardStyle = {
    width: '100%', // Adjust the width here
    textAlign: '',
    maxHeight: '35rem', // Adjust the height here
    marginTop: '25px',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
  };

  const imageStyle = {
    width: '60px', // Adjust the width of the image
    height: '60px', // Adjust the height of the image
    marginLeft: '18px',
  };

  return (
    <Container  className='mt-5 pt-2 mb-5 my-service-container'>
    
      <h1 className='text-center mb-5 '>Our Services</h1>
      <Row className="gx-3 ms-5 me-5 pe-3 ">
        {/* Large screens - Three cards in a row */}
        <Col lg={4} md={6} mb={4}>
          <Card border="0" className="rounded-2 text-left ms-2 mb-3 " style={cardStyle}>
            <Card.Img className="mt-3 me-3" variant="top" src={fiver} alt="..." style={{ ...imageStyle, float: 'left' }} />
            <Card.Body className="mt-3" style={{ textAlign: 'center' }}>
              <Card.Title>Card title 1</Card.Title>
              <Card.Text className="mt-3 me-5"style={{ textAlign: 'center' }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque alias laudantium voluptatem quibusdam inventore voluptatum aperiam, impedit dolores?
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col lg={4} md={6} mb={4}>
          <Card border="0" className="rounded-2 text-left ms-2 mb-3" style={cardStyle}>
            <Card.Img className="mt-3 me-3" variant="top" src={upwork} alt="..." style={{ ...imageStyle, float: 'left' }} />
            <Card.Body className="mt-3" style={{ textAlign: 'left' }}>
              <Card.Title>Card title 2</Card.Title>
              <Card.Text className="mt-3 me-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque alias laudantium voluptatem quibusdam inventore voluptatum aperiam, impedit dolores? 
              </Card.Text>              
            </Card.Body>
          </Card>
        </Col>

        <Col lg={4} md={6} mb={4}>
          <Card border="0" className="rounded-2 text-left ms-2" style={cardStyle}>
            <Card.Img className="mt-3 me-3" variant="top" src={freelancer} alt="..." style={{ ...imageStyle, float: 'left' }} />
            <Card.Body className="mt-3" style={{ textAlign: 'left' }}>
              <Card.Title>Card title 3</Card.Title>
              <Card.Text className="mt-3 me-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque alias laudantium voluptatem quibusdam inventore voluptatum aperiam, impedit dolores?
              </Card.Text>             
            </Card.Body>
          </Card>
        </Col>

        <Col lg={4} md={6} mb={4}>
          <Card border="0" className="rounded-2 text-left ms-2 mb-3 " style={cardStyle}>
            <Card.Img className="mt-3 me-3" variant="top" src={pic1} alt="..." style={{ ...imageStyle, float: 'left' }} />
            <Card.Body className="mt-3" style={{ textAlign: 'left' }}>
              <Card.Title>Card title 1</Card.Title>
              <Card.Text className="mt-3 me-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque alias laudantium voluptatem quibusdam inventore voluptatum aperiam, impedit dolores?
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col lg={4} md={6} mb={4}>
          <Card border="0" className="rounded-2 text-left ms-2 mb-3 " style={cardStyle}>
            <Card.Img className="mt-3 me-3" variant="top" src={pic2} alt="..." style={{ ...imageStyle, float: 'left' }} />
            <Card.Body className="mt-3" style={{ textAlign: 'left' }}>
              <Card.Title>Card title 1</Card.Title>
              <Card.Text className="mt-3 me-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque alias laudantium voluptatem quibusdam inventore voluptatum aperiam, impedit dolores?
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

      </Row>
    
    </Container>
  );
}

export default ServiceContent;
