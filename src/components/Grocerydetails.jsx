import React from "react"
import data from '../data.json'
import '../App.css';
import CartButton from "./CartButton";

const GroceryDetails = ()=>{
//console.log(data)

    return(
        <>
        <h1>Groceries</h1>
        <div className="container">
            {data.map((elem)=>{
      //  console.log(elem.id);
        return(
            <div key={elem.id}>
                <img src={elem.imgURL} alt="" />
                <h4>{elem.title}</h4>
                <h4>{elem.mrp}</h4>
                <h4>{elem.sellingPrice}</h4>
                <h4>{elem.discount}</h4>
                <CartButton/>
            </div>
            
        )

       })}
            {/* map through the data and display the cards */}

        </div>
        </>
    )
}
export default GroceryDetails