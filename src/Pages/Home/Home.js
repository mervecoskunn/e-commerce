import React from 'react'
import Category from '../../Components/Category/Category';
import ProductList from '../../Components/ProductList/ProductList';
import Slider from '../../Components/Slider/Slider';
import styles from './home.module.scss';
import Loader from "../../Components/Loader/Loader";

const Home =() => {
    return(
        <div className={styles.mainWrapper}>
           <Slider />
            <Category />
            <Loader />
            
            <ProductList />
    
        </div>
        
    );


}
export default Home;