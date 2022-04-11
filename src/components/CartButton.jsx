import React from "react";
import '../App.css';
// keep the add to cart component here
const CartButton = () => {
    //manage state of the count 
    // let [count,setCount]=React.useState[0];
    // const handleClick=(e)=>{
    //   console.log(count);
    //   setCount(e.target.count++);
    // }
    let [count,setCount]=React.useState(0);
    const handleClick=(e)=>{
      setCount(++count);
    }
    const handleLow=(e)=>{
      setCount(--count);
    }
    if(count===0){
      var a="Add to Cart";
    }
    else{
      a="+";
    }
    if(count===0){
      var b;
    }
    else{
      b="-";
    }
  return( 
    <>
    {/* add to cart button */}
    {/* count with - and  + button */}
    <div className="btn">
        <button onClick={handleLow}>{b}</button>
        <p className="count-item">{count}</p>
        <button onClick={handleClick}>{a}</button>
    </div>
    </>
  );
   
  
};
export default CartButton
