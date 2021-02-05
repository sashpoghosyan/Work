import React,{useState} from 'react'
import {BsHeart} from 'react-icons/bs'
import './Navimg.css'

export default function Navimg() {
    const [count,setCount]  = useState(1)


    const minus = () =>{
        setCount(count - 1 )
    }
    const plyus = () =>{
        setCount(count + 1)
    }
    return (
     <>
        <div className="box">
            <span>Products /</span>
            <span>Candy bars /</span>
            <p>Candy chocolate circles</p>
        </div>
        <content>
            <main className="box-container">
                <img src="https://images.unsplash.com/photo-1589384762307-30649788a513?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTMzfHxjaG9jb2xhdGV8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
                <div className="container-2">
                    <div className="cont-log">
                        <span className="conts-logs">Candy bars</span>
                        <span className="logs-conts"><BsHeart/> Add to favorites</span>
                    </div>
                    <h6>Candy chocolate bar with</h6>
                    <h2>2500 /kg</h2>
                    <div className="add-to-basket">
                        <div className="btn-log">
                            <button onClick={minus}>-</button>
                            <button className="btn-bot">{count}</button>
                            <button onClick={plyus}>+</button>
                        </div>
                        <button className="btn-buton">Add to basket</button>
                    </div>
                    <div className="contents-text">
                        <p>Made of delicious, creamy milk chocolate, Grand Candy Milk Chocolate Bars make
                            life delicious, whether enjoyed alone or shared with a friend.
                        </p>
                        <h5>Ingredients</h5>
                        <p>Milk Chocolate [Cane Sugar,Milk,Chocolate,Cocoa Butter,Milk Fat,Lecithin(Soy)
                            Natural Flavor]</p>
                        <h5>Shelflife</h5>
                        <p>12 months</p>
                        </div>
                </div>
            </main>
        </content> 
    </>
    )
}
