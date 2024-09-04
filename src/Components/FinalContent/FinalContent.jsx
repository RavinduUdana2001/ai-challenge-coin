import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin, FaHome, FaEnvelope, FaPhone, FaPrint } from 'react-icons/fa';

function FinalContent() {
  return (
    <footer className='bg-dark text-center text-lg-start text-light'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom' style={{ borderColor: '#555' }}>
        <div className='me-5 d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href='https://www.facebook.com/wow69creative/' className='me-4 text-reset' style={{ color: '#fff' }}>
            <FaFacebookF />
          </a>
          <a href='https://twitter.com/DinithaUshan' className='me-4 text-reset' style={{ color: '#fff' }}>
            <FaTwitter />
          </a>
          <a href='https://www.instagram.com/ushandinitha' className='me-4 text-reset' style={{ color: '#fff' }}>
            <FaInstagram />
          </a>
          <a href='https://www.linkedin.com/in/ushan-dinitha-4564a3a3/' className='me-4 text-reset' style={{ color: '#fff' }}>
            <FaLinkedin />
          </a>
        </div>
      </section>

      <section className=''>
        <Container className='text-center text-md-start mt-5'>
          <Row className='mt-3'>
            <Col md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4' style={{ color: '#ffdd57' }}>
                AI Challenge Coin
              </h6>
              <p style={{ color: '#bbb' }}>
                Design any kind of Challenge coins with 12+ years experience
              </p>
            </Col>

            <Col md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4' style={{ color: '#ffdd57' }}>Products</h6>
              <p style={{ color: '#bbb' }}>
                Challenge coins           
              </p>
              <p style={{ color: '#bbb' }}>
                3D modeling                
              </p>
              <p style={{ color: '#bbb' }}>
                Logo design              
              </p>
              <p style={{ color: '#bbb' }}>
                Product design              
              </p>
              <p style={{ color: '#bbb' }}>
                Lapel Pins           
              </p>
              <p style={{ color: '#bbb' }}>
                Bottle opener           
              </p>
            </Col>

            <Col md="3" lg="3" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4' style={{ color: '#ffdd57' }}>Gifts & Awards</h6>
              <p style={{ color: '#bbb' }}>
                Corporate Gifts
              </p>
              <p style={{ color: '#bbb' }}>
                Religious Gifts
              </p>
              <p style={{ color: '#bbb' }}>
                Sports Awards
              </p>
              <p style={{ color: '#bbb' }}>
                Medals
              </p>
              <p style={{ color: '#bbb' }}>
                Military Gifts
              </p>
            </Col>

            <Col md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4' style={{ color: '#ffdd57' }}>Contact</h6>
              <p style={{ color: '#bbb' }}>
                <FaHome className='me-2' />
                588, 1st lane, New Town, Polonnaruwa
              </p>
              <p style={{ color: '#bbb' }}>
                <FaEnvelope className='me-3' />
                engushan@gmail.com
              </p>
              <p style={{ color: '#bbb' }}>
                <FaPhone className='me-3' />
                +94 71 7777017
              </p>
              <p style={{ color: '#bbb' }}>
                <FaPrint className='me-3' />
                +94 272222688
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      <section className='py-4' style={{ backgroundColor: '#333' }}>
        <Container>
          <Row>
            <Col>
              <h6 className='text-uppercase fw-bold mb-3' style={{ color: '#ffdd57' }}>Privacy Policy</h6>
              <p style={{ color: '#bbb' }}>Your privacy is important to us. It is our policy to respect your privacy regarding any information we may collect from you across our website.</p>
              <p style={{ color: '#bbb' }}>We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent.</p>
              <p style={{ color: '#bbb' }}>We don't share any personally identifying information publicly or with third-parties, except when required to by law.</p>
            </Col>
            <Col>
              <h6 className='text-uppercase fw-bold mb-3' style={{ color: '#ffdd57' }}>Terms and Conditions</h6>
              <p style={{ color: '#bbb' }}>By accessing the website, you agree to be bound by these terms of service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws. If you do not agree with any of these terms, you are prohibited from using or accessing this site.</p>
              <p style={{ color: '#bbb' }}>The materials contained in this website are protected by applicable copyright and trademark law.</p>
              <p style={{ color: '#bbb' }}>We reserve the right to modify or replace these terms at any time without notice.</p>
            </Col>
          </Row>
        </Container>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: '#222' }}>
        <Container>
          <span className='text-reset fw-bold'>&copy; 2024 AI Challenge Coin | Designed by Ravindu Singhapura</span>
        </Container>
      </div>
    </footer>
  );
}

export default FinalContent;
