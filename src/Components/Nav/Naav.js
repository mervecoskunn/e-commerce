import React from 'react';
import { Container,Navbar,Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import {AiOutlineShoppingCart} from "react-icons/ai"
import styles from "./naav.module.scss"
import { useSelector }from 'react-redux';


const Naav = () =>{
    const { cart } = useSelector((state)=>state.cart)
    const menus=[
        {
            name:"Home",
            id:1,
            path:"/"
        
        },
        {
            name:"About Us",
            id:2,
            path:"/about"
        
        },
        {
            name:"WishList",
            id:3,
            path:"/wishlist"
        },
    
    
    
    ]
    
    return(
       <div>
            <Navbar expand="lg" className={`${styles.navBar} fixed-top `}>
                <Container>
                    <Navbar.Brand>
                        <NavLink to ="/" className={`${styles.navLink} text-uppercase`}>
                        Redux ECommerce
                        </NavLink>
                        
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls ="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll ">
                        <Nav className="ms-auto my-2 my-lg-0" style={{maxHeight:"100px" }} navbarScroll>
                            {
                             menus.map((menu)=>(
                                 <NavLink
                                 key={menu.id}
                                 to={menu.path}
                                 className={`${styles.navLink} ${styles.menuLink}`}>
                                  {menu.name}
                                  </NavLink>
                                  ))
                            
                            }
                            <NavLink to ="/cart"
                             className={`${styles.navLink} ${styles.cartIcon}`}>
                            {/* icon */}
                            <AiOutlineShoppingCart size={23} />{" "}

                                <div className={styles.cartLenght}>
                                    <h6>{cart?.length}</h6>

                                </div>
                            </NavLink>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            </div>
    );

} 
export default Naav;