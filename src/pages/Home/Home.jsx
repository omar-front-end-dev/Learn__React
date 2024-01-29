import { Container } from "react-bootstrap";
import { ProductsList } from "../../components/ProductsList/ProductsList";
import { products } from "../../products";
import { MainCarousel } from "../../components/MainCarousel/MainCarousel"

export function Home() {
  return (
    <>
        <Container className='mt-5'>
          <MainCarousel/>
            <ProductsList title='Latest Products' products={products.slice(0, 4)} />
            <ProductsList title='Offers' products={products.slice(4, 8)} />
        </Container>
    </>
  )
}
