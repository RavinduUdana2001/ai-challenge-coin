import Carousel from 'react-bootstrap/Carousel';
import pic1 from '../../assets/img1.jpg';
import pic2 from '../../assets/img2.jpg';
import pic3 from '../../assets/img3.jpg';
import pic4 from '../../assets/img4.jpg';

function SlideContent() {
  return (
    <Carousel data-bs-theme="light" >
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={pic1}
          alt="First slide"
          style={{ Height: 'auto', objectFit: 'cover' }} // Adjust the maxHeight to your desired height
        />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 "
          src={pic2}
          alt="Second slide"
          style={{ Height: 'auto', objectFit: 'cover' }} // Adjust the maxHeight to your desired height
        />
        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={pic3}
          alt="Third slide"
          style={{ Height: 'auto', objectFit: 'cover' }} // Adjust the maxHeight to your desired height
        />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={pic4}
          alt="fourth slide"
          style={{ Height: 'auto', objectFit: 'cover' }} // Adjust the maxHeight to your desired height
        />
        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default SlideContent;
