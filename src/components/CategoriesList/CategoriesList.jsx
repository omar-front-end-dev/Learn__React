/* eslint-disable react/prop-types */
import { categories } from '../../categories'
import { CategoriesBtn } from '../CategoriesBtn/CategoriesBtn'


export function CategoriesList(props) {
  return (
    <div className='d-flex justify-content-center flex-wrap gap-3 my-4'>
      <CategoriesBtn key='All' name ='All' value='' setCurrCategory={props.setCurrCategory}/>
        {
            categories.map((btn) =>{
             return <CategoriesBtn key={btn} name={btn} value={btn} setCurrCategory={props.setCurrCategory}/>
            })
        }
    </div>
  )
}
