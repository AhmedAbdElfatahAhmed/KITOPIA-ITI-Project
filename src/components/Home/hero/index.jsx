import Carousel from 'react-bootstrap/Carousel';
import './hero.scss'
import img1 from '../../assets/images/home/hero/slide1.jpg'
import img2 from '../../assets/images/home/hero/slide2.jpg'
import img3 from '../../assets/images/home/hero/slide1.jpg'
import img4 from '../../assets/images/home/hero/slide4.jpg'
import bee from '../../assets/images/home/hero/bee.png'
import flower from '../../assets/images/home/hero/flower.png'
import star from '../../assets/images/home/hero/star.png'
import sun from '../../assets/images/home/hero/sun.png'
import Service from './service';
import About from './about us';
const Hero = () => {
  return (
    <>
    <section className='hero'>
        <Carousel >
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img1}
          alt="First slide"
          height="550px"
        />
        <Carousel.Caption>
        <div className='slide_description'>
            <h1>WELCOME TO KITOPIA</h1>
            <h4>KITOPIA is a Super Fun Daycare / Children HTML Theme including many Elements</h4>
            <a href="#">CONTACT US</a>
            <img src={bee} alt="bee" className='des_img1'/>
            <img src={flower} alt="bee" className='des_img2'/>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img2}
          alt="Second slide"
          height="550px"
        />

        <Carousel.Caption>
        <div className='slide_description'>
            <h1>WELCOME TO KITOPIA</h1>
            <h4>KITOPIA is a Super Fun Daycare / Children HTML Theme including many Elements</h4>
            <a href="#">CONTACT US</a>
            <img src={star} alt="bee" className='des_img1'/>
            <img src={bee} alt="bee" className='des_img2'/>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img3}
          alt="Third slide"
          height="550px"
        />

        <Carousel.Caption>
        <div className='slide_description'>
            <h1>WELCOME TO KITOPIA</h1>
            <h4>KITOPIA is a Super Fun Daycare / Children HTML Theme including many Elements</h4>
            <a href="#">CONTACT US</a>
            <img src={sun} alt="bee" className='des_img1'/>
            <img src={flower} alt="bee" className='des_img2'/>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img4}
          alt="Third slide"
          height="550px"
        />

        <Carousel.Caption>
        <div className='slide_description'>
            <h1>WELCOME TO KITOPIA</h1>
            <h4>KITOPIA is a Super Fun Daycare / Children HTML Theme including many Elements</h4>
            <a href="#">CONTACT US</a>
            <img src={star} alt="bee" className='des_img1'/>
            <img src={flower} alt="bee" className='des_img2'/>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </section>
    <Service></Service>
    <About></About>
    </>
  )
}

export default Hero
