import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import Loader from '../Loader/Loader';
import ProductSlider from '../Slider/ProductSlider';
import useFetch from '../../Services/usefetch';
import styles from './productdetail.module.scss';
import { Breadcrumb} from 'react-bootstrap';


 const ProductDetail=()=>{
const { id } =useParams();
const navigate =useNavigate();
const dispatch =useDispatch();

// todo: wishlist

const {data,error,loading} =useFetch(`/${id}`);
if(!error && loading){
    return < Loader />
}
if(!loading && error){
  return <h3>{error.message}</h3>
}
  return (
   <div className={`${styles.detailWrapper} container py-4`}>
    <Breadcrumb>
    <Breadcrumb.Item onClick ={()=>navigate("/")}>Home</Breadcrumb.Item>
    <Breadcrumb.Item active>{data?.title}</Breadcrumb.Item>
    </Breadcrumb>
    <h1>{data?.title}</h1>

    </div>
  )
}
export default ProductDetail;
