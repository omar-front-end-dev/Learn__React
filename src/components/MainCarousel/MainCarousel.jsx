import image1 from '../../assets/hero/image-1.webp'
import image2 from '../../assets/hero/image-2.webp'
import image3 from '../../assets/hero/image-3.jpeg'
import { Carousel, Container } from 'react-bootstrap'
import './MainCarousel.css'

export function MainCarousel() {
  return (
    <Container className='mt-5'>
      <Carousel className='main-carousel position-relative'>
        <Carousel.Item className='main-carousel__item'>
          <img className='h-100 w-100' src={image1} alt="" />
        </Carousel.Item>
        <Carousel.Item className='main-carousel__item'>
          <img className='h-100 w-100' src={image2} alt="" />
        </Carousel.Item>
        <Carousel.Item className='main-carousel__item'>
          <img className='h-100 w-100' src={image3} alt="" />
        </Carousel.Item>
      </Carousel>
    </Container>
  )
}
