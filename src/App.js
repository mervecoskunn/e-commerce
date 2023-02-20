
import {Route,Routes}from "react-router-dom"
import Home from "./Pages/Home/Home.js"
import About from "./Pages/About/About.js"
import Cart from "./Pages/Cart/Cart.js"
import ProductDetail from "./Pages/ProductDetail/ProductDetail"
import WishList from "./Pages/WishList/WishList.js"
import ErrorPage from "./Pages/ErrorPage/ErrorPage.js"
import Naav from "./Components/Nav/Naav.js"
import Footer from "./Components/Footer/Footer.js"
import styles from './App.scss'
import "react-toastify/dist/ReactToastify.css"
import { ToastContainer } from "react-toastify"


function App() {
  return (
    <div>
      <div className="App">
        <Naav />
        <div className="main">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
            <Route path="/wishlist" element={<WishList />}></Route>
            <Route path="/products/:id" element={<ProductDetail />}></Route>
            <Route path="*" element={<ErrorPage />}></Route>
          </Routes>

        </div>
        <Footer />
        <ToastContainer position="top-right">

        </ToastContainer>
      </div>
      
    </div>
  );
}

export default App;
