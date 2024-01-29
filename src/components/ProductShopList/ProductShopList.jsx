/* eslint-disable react/prop-types */
import { Row } from "react-bootstrap"
import { products } from "../../products"
import { ProductCard } from "../ProductCard/ProductCard"

export function ProductShopList(props) {
  return (
    <Row>
      {products.map(product =>{
       if (props.currCategory == '' || product.category === props.currCategory) {
        return <ProductCard key={product.id} product={product}/>
       }
        
      })}
    </Row>
  )
}
