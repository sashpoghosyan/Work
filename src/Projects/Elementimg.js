import React from 'react'
import './Elementimg.css'
import { FiShoppingCart} from 'react-icons/fi';

export default function Elementimg() {
    return (
        <>

                <div class="box-res">
                        <h2>Recommended for you</h2>
                </div>
            <div className="header-main">
                <div className="main-boxs1">
                    <img src="https://images.unsplash.com/photo-1610881101036-55a769706cc7?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OXx8Y2hvY29sYXRlJTIwY2FrZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"/>
                    <h5>Candy chocolate circles</h5>
                    <p>Made of delicious,cremy milk
                     chocolate make life delicious..
                    </p>
                        <div className="icon-kgs">
                        <span className="icons-kg">2500 /kg</span>
                        <span className="icons-link"><FiShoppingCart/></span>
                        </div>
                </div>
            
                <div className="main-boxs2">
                 <img src="https://images.unsplash.com/photo-1600350301841-3dfc0dc97e30?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTV8fGNob2NvbGF0ZSUyMGNha2V8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"/>
                    <h5>Candy chocolate circles</h5>
                    <p>Made of delicious,cremy milk
                    chocolate make life delicious..
                    </p>
                         <span className="iko-lik">2500 /kg</span>
                        <span className="icons-links"><FiShoppingCart/></span>
                </div>

                <div className="main-boxs3">
                 <img src="https://images.unsplash.com/photo-1600350301906-61b2288616cd?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mjl8fGNob2NvbGF0ZSUyMGNha2V8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"/>
                    <h5>Candy chocolate circles</h5>
                    <p>Made of delicious,cremy milk
                    chocolate make life delicious..
                    </p>
                        <span className="links-iko">2500 /kg</span>
                        <span className="ix-link"><FiShoppingCart/></span>
                </div>

                <div className="main-boxs4">
                    <img src="https://images.unsplash.com/photo-1506427558254-a61bbbf3165f?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NjR8fGNob2NvbGF0ZSUyMGNha2V8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"/>
                    <h5>Candy chocolate circles</h5>
                    <p>Made of delicious,cremy milk
                    chocolate make life delicious..
                    </p>
                        <span className="bet-link">2500 /kg</span>
                         <span className="get-link"><FiShoppingCart/></span>
                </div>
            </div>
        </>
    )
}
