import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import pic1 from '../../assets/11.jpg';
import pic2 from '../../assets/22.jpg';
import pic3 from '../../assets/33.jpg';
import pic4 from '../../assets/44.jpg';
import pic5 from '../../assets/55.jpg';
import pic6 from '../../assets/66.jpg';
import './SlideContent.css'; // Import the custom CSS file

function SlideContent() {
  return (
    <Carousel 
      data-bs-theme="light" 
      interval={3000} 
      fade 
      controls={false} 
      indicators={true}
      pause={false} 
      className="custom-carousel"
    >
      {[pic1, pic2, pic3, pic4, pic5, pic6].map((pic, index) => (
        <Carousel.Item key={index}>
          <img
            className="d-block w-100"
            src={pic}
            alt={`Slide ${index + 1}`}
            style={{
              objectFit: 'cover',
              width: '100%',
            }}
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default SlideContent;
