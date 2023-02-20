import React, { useLayoutEffect, useState } from 'react'
import  Carousel  from 'react-elastic-carousel';
import useFetch from '../../Services/usefetch';
import ProductCard from '../ProductCard/ProductCard';
import Loader from '../Loader/Loader';


const ProductSlider=({category})=> {
    const [size, setSize]= useState("");

    useLayoutEffect(()=>{
        function updateSize(){
            setSize(window.innerWidth);
        }
        window.addEventListener("resize",updateSize);
        updateSize();
        return () =>window.removeEventListener("resize",updateSize); 
    
    });
    const {data,error,loading} =useFetch(`/category/${category}`)
    if(error && loading){
       return <Loader />
    
    }
    if(!loading && error ){
       return <h3>{error.message}</h3>
    }

    return(
      <div className='container py-3'>
       <Carousel itemsToShow={ size <= 767 ? 1 : 3}>
      {data.map((item)=>{
      return <ProductCard  product ={item} key ={item.id} />
      
      })}

       </Carousel>

      </div>
      )
}
//Todo : Memo
export default React.memo(ProductSlider);