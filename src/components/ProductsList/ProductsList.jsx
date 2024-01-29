import { Row } from 'react-bootstrap'
import './ProductsList.css'
import { ProductCard } from '../ProductCard/ProductCard'
import PropTypes from 'prop-types';

export function ProductsList(props) {
  return (
    <div className='mt-5'>
      <h3 className='mb-4'>{props.title}</h3>
      <Row>
        {props.products.map(product => {
          return <ProductCard key={product.id} product={product} />
        })}
      </Row>
    </div>
  )
}

ProductsList.propTypes = {
  title: PropTypes.string,
  products: PropTypes.arrayOf(PropTypes.object)
}