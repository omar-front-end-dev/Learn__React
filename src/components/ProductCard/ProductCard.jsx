import { Button, Card, Col } from 'react-bootstrap'
import './ProductCard.css'
import PropTypes from 'prop-types';

export function ProductCard(props) {
  return (
    <Col md={6} lg={4}>
      <Card className='mb-4'>
        <Card.Img className='card__img' variant="top" src={props.product.thumbnail} />
        <Card.Body>
          <Card.Title>{props.product.title}</Card.Title>
          <Card.Text>
            ${props.product.price}
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </Col>
  )
}

ProductCard.propTypes = {
  product: PropTypes.object
}