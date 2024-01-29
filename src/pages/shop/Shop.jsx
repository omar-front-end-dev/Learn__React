import { useState } from "react";
import { CategoriesList } from "../../components/CategoriesList/CategoriesList";
import { ProductShopList } from "../../components/ProductShopList/ProductShopList";
import "./Shop.css";

 

export function Shop() {
  const [currCategory, setCurrCategory] = useState('')
  return (
      <div>
        <CategoriesList setCurrCategory={setCurrCategory}/>
        <ProductShopList currCategory={currCategory}/>
      </div>
  )
}
