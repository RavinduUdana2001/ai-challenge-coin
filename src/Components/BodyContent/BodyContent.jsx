import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import photo from '../../assets/profilepic.png';
import starGif from '../../assets/Animation - 1707889955289.gif'; 

function BodyContent() {
  // Function to render the GIF of the star five times
  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <img
          key={i}
          src={starGif} // Use the imported GIF as the source
          alt="Star"
          style={{ width: '27px', height: '27px',  }} // Set the size and spacing
        />
      );
    }
    return stars;
  };

  return (
    <Container fluid className="border-0   rounded bg-light" style={{marginTop:"30px"}}>
      <Row className="align-items-center">
        <Col xs={12} md={6} mb={3} mb-md={0}>
          <img
            src={photo}
            alt="Your Image"
            className="img-fluid mx-auto d-block ms-md-4  ms-lg-3 ps-lg-5 mb-sm-5 mb-4"
            style={{ maxWidth: 'auto', height: 'auto' , padding:'40px' }}
          />
        </Col>
  
        <Col xs={12} md={6} className="bg-light">
          <Card className="h-100 border-0 bg-light me-lg-5  " style={{ boxShadow: 'none', padding: '' }}>
            <Card.Body className="text-center ">
              <Card.Title className='mb-4  'style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#333' }}>Challenge coin Numismatic Artist</Card.Title>
              <Card.Text className=' mb-3'>
              Challenge coin custom 3D illustration by utech. AI challenge coin design, engraving coin, lapel pin , medal, buckle, retro coin remaster and cryptocurrency NFT token designer.100% accurate real world Illustration expert for metal coins using Photoshop, digital freehand artist. Genuine 12+ years of fulltime Freelancing experience in Fiverr, Upwork and Freelancer. Thank you!
<br></br>
Best Regards: Ushan Dinitha | utech | Numismatic Artist | BSc.Mechanical Engineer
              </Card.Text>
              
                <div className="d-flex align-items-center mb-2 justify-content-center fw-bold">Communication: {renderStars()}</div>
                <div className="d-flex align-items-center mb-2 justify-content-center fw-bold "style={{ marginLeft:"87px"}}>Skill: {renderStars()}</div>
                <div className="d-flex align-items-center justify-content-center fw-bold" style={{ marginLeft:"25px"}}>Recommend: {renderStars()}</div>
              
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default BodyContent;
