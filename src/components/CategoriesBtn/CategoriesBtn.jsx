/* eslint-disable react/prop-types */
import { Button } from 'react-bootstrap'



export function CategoriesBtn(props) {

  return (
    <Button onClick={() =>props.setCurrCategory(props.value)} variant='primary'>
      {props.name}
    </Button>
  )
}
