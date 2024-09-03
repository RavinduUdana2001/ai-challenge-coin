import React, { useState } from 'react';
import { Container, Form, Button, Row, Col, Modal } from 'react-bootstrap';
import gifImage from '../../assets/contactimg.png'; // Import your GIF image

function FormContent() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submissionStatus, setSubmissionStatus] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://formspree.io/f/mkndrrne', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Email sent successfully
        setSubmissionStatus('success');
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
        setShowModal(true);
      } else {
        // Handle error
        console.error('Failed to send email');
        setSubmissionStatus('error');
      }
    } catch (error) {
      console.error('Error:', error);
      setSubmissionStatus('error');
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <Container fluid className=" border-dark rounded p-4  mt-5 pt-5" style={{ backgroundColor: '#ffffff' }}>
      <Row className="align-items-center">
        <Col md={6} className="text-center">
          <div className="gif-container">
            <img src={gifImage} alt="GIF" className="gif-image" style={{ maxWidth: '100%', height: 'auto' }} />
          </div>
        </Col>
        <Col md={6}>
          <div className="form-content  ">
            <h1 className="text-center mb-3"style={{ fontSize: '2.6rem', fontWeight: 'bold', color: '#333' }}>Get in Touch</h1>
            <Form onSubmit={handleSubmit}>
  <Form.Group className="mb-3" controlId="formName">
    <Form.Label>Name</Form.Label>
    <Form.Control
      type="text"
      placeholder="Enter your name"
      name="name"
      value={formData.name}
      onChange={handleChange}
      required
      style={{ backgroundColor: "#f3f4fd" }} // Change background color
    />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control
      type="email"
      placeholder="Enter your email"
      name="email"
      value={formData.email}
      onChange={handleChange}
      required
      style={{ backgroundColor: "#f3f4fd" }} // Change background color
    />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formSubject">
    <Form.Label>Subject</Form.Label>
    <Form.Control
      type="text"
      placeholder="Enter subject"
      name="subject"
      value={formData.subject}
      onChange={handleChange}
      required
      style={{ backgroundColor: "#f3f4fd" }} // Change background color
    />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formMessage">
    <Form.Label>Message</Form.Label>
    <Form.Control
      as="textarea"
      rows={4}
      placeholder="Enter your message"
      name="message"
      value={formData.message}
      onChange={handleChange}
      required
      style={{ backgroundColor: "#f3f4fd" }} // Change background color
    />
  </Form.Group>
  <Button className="w-100 mb-3" variant="primary" type="submit">
    Submit
  </Button>
  {submissionStatus === 'error' && <div className="text-danger">Failed to submit form. Please try again.</div>}
</Form>

          </div>
        </Col>
      </Row>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Submission Successful</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <p>I got your message. I will reply you as soon as possible. Thank you for your message !</p>
        </Modal.Body>
        <Modal.Footer>
          <Button  variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>

        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default FormContent;