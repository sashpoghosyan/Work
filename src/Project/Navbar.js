import React from 'react'
import { FiShoppingCart} from 'react-icons/fi';
import { BsSearch,BsHeart} from 'react-icons/bs';
import './Navbar.css'

export default function Navbar() {
    return (
        <>
        <div className="cont-logo">
            <div className="logo-img">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIVth5n4wFfFp5gYRiETjk2Bo4agMANeTl4w&usqp=CAU"/>
                <span>English</span>
            </div>
            <div className="cont-menus">
                <span>Payments</span>
                <span>Delivery and Returns</span>
                <span>Terms and Conditions</span>
            </div>
        </div>
    <header>
        
        <div className="contenier">
                <div className="img-boxs">
                    <img src="https://repatarmenia.org/images/default-source/repatcareers/grand-candy.jpg?sfvrsn=0"/>
                </div>
            <nav className="box-nav">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a id="nav-bar" href="/">Products</a></li>
                    <li><a href="/">About</a></li>
                    <li><a href="/">Shops</a></li>
                    <li><a href="/">News</a></li>
                    <li><a href="/">Careers</a></li>
                    <li><a href="/">Contact us</a></li>
                </ul>
            </nav>
               <div className="box-icons">
                   <ul>
                       <li>
                        <BsSearch/> 
                       </li>
                       <li>
                        <BsHeart/> 
                       </li>
                       <li>
                       <FiShoppingCart/>
                       </li>
                    </ul>
                </div>
             <button className="btn">Sign in</button>
        </div>    
           
    </header>
    </>
    )
}
