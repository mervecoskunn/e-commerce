import React from 'react'
import { Button, Card, CardImg } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import styles from './productcard.module.scss'
import {addToCart} from '../../Redux/features/Cart/CartSlice';

const ProductCard =({product})=> {
  const title = product?.title.slice(0,20);
  const navigate =useNavigate();
  const dispatch =useDispatch();
  const addProduct =()=>{
   // add to shoppingcart proccessing
   //install npm i react-toastify
   //check npm webpage

   dispatch(addToCart(product));
   toast.success(`${product?.title.slice(0,20)} is added to cart`,{
    autoClose:1000
  
  });
  }


  return (
    <div>
      <Card
       style= {{width:"18rem",textAlign:"center"}}
      className={styles.productCard}>
        <CardImg onClick ={()=>navigate(`/products/${product.id}`)} 
         variant="top"
          src ={product?.image}
         className={styles.cardImg}
        />
        <Card.Body>
          <Card.Title> {title}</Card.Title>
          <Card.Text>${product?.price}</Card.Text>
          <Button className={styles.commonBtn} onClick={addProduct} >ADD TO CARD</Button>
           
          

        </Card.Body>
          
          
        

      </Card>
    </div>
  )
}
export default ProductCard;
