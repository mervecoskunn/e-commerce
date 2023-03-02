import React, { useState,useEffect } from "react";
import styles from "./productlist.module.scss";
import {Container} from 'react-bootstrap'
import ProductCard from '../ProductCard/ProductCard';
import { BiSearch } from "react-icons/bi";
import {STATUS} from '../../constant/Status.js';
import { fetchProducts } from "../../Redux/features/Product/ProductSlice";
import { useDispatch,useSelector } from "react-redux";
import Loader from "../Loader/Loader";


function ProductList() {
  const [showSearch,setShowSearch]=useState(false);
  const [searchValue,setSearchValue]=useState("");
  
  const dispatch = useDispatch();

  const {products,status} = useSelector((state) => state.products);


  useEffect(() =>{
     dispatch(fetchProducts());
  }, [])
  if(status===STATUS.LOADING){
    return <Loader />
  }
  if(status!== STATUS.LOADING && status ===STATUS.ERROR){
    return <h2>{status}</h2>
  }
    

  
  
  return(
     <div className={styles.productListWrapper} id="product-list">
        <Container>
            <div className={styles.searchWrapper}>
              <div>
                <h3>Shop by Collection</h3>
                <p>
                  Each season,we collaborate with world class designers to create a collection isprired by natural world.
                </p>
              </div>
              <div>
                {
                    showSearch && (
                      <input
                         type ="text"
                         className={styles.searchBar}
                         value = {searchValue}
                         onChange={(e)=>{setSearchValue(e.target.value)}}
                         placeholder="Search Product"/>
                      )}
                      <BiSearch
                             size={25}
                             style={{cursor:"pointer"}}
                             onClick ={()=>setShowSearch(!showSearch)} />
              </div>
               </div>
            <div className={styles.productList}>
                {
                products?.filter((item)=>item.title.toLowerCase().includes(searchValue.toLowerCase())
               )
              ?.map((product)=>{
                    return <ProductCard key = {product?.id}  product ={product}/>
                })
                }

            </div>
        </Container>

     </div>
     )
}
export default ProductList;
