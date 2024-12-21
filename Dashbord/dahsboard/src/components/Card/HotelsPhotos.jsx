import Carousel from 'react-bootstrap/Carousel';

const HotelsPhotos = ({image}) => {
    console.log(image)
  return (
    <Carousel>
       
      <Carousel.Item>
        <img 
          className="d-block w-100 "
          src={image[0].img1}
          alt="First slide"
          style={{ height: '100%', objectFit: 'cover' }}
        />
     
       
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image[0].img2}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image[0].img3}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}
export default HotelsPhotos;
