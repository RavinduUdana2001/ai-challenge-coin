import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import photo from '../../assets/new_collabarate.png';

function DetailContent2() {
  return (
    <div>
      <Container fluid style={{ backgroundColor: '#fbfbfb' }}>
        <Row className='justify-content-center align-items-center'>
     
        <Col md={6} lg={6} className='mb-4'>
            <Image src={photo} rounded className='img-fluid mt-5 mb-5 ms-lg-3 pt-3 pb-3 ps-lg-4' />
          </Col>

          <Col md={6} lg={6} className='text-center '>
<div className='me-lg-5 mb-4 me-md-0 ms-md-5'>
  <h2>Lorem ipsum dolor sit amet</h2>
  <p>
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos
    molestiae officiis mollitia cupiditate consectetur facilis
    minima soluta incidunt nemo nam? Nemo fugiat eos nulla maiores
    sunt adipisci neque maxime quos, consectetur facilis
    minima soluta incidunt nemo nam? Nemo fugiat eos nulla maiores
    sunt adipisci neque maxime quos!,
  </p>
</div>
</Col>
        </Row>
      </Container>
    </div>
  );
}

export default DetailContent2;
