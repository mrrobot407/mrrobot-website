import React, { useEffect, useState } from 'react'
import '../components/cart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGooglePay } from '@fortawesome/free-brands-svg-icons';

function cart({cart , setCart}) {

    const [price , setPrice] = useState(0);
   




    const [amount, setAmount] = useState(1);

    const increment = () => {
      setAmount(amount + 1);
    };
  
    const decrement = () => {
      if (amount > 0) {
        setAmount(amount - 1);
      }
    };

    const handlePrice = () => {
        let ans = 0;
        cart.map((item) => {
            ans += item.price * amount ;
        });
        setPrice(ans);
    };
    
    useEffect(() => 
        handlePrice()
   );
   const handleRemove = (id) => {
    // Filter out the item with the given id
    const updatedCart = cart.filter((item) => item.id !== id);
    
    // Update the cart state with the filtered array
    setCart(updatedCart);
};



  return (
    <section className='pattern-zigzag-md cart-colour' >
<div className="  cart-container ">
 
  {cart.map((item) => (
    <div key={item.id} className='cart-box bg-red  '>
      <div className="image-cart-div">
        <img src={item.image} alt={item.Productname} className="cart-image" />
        <div className="cart-info">
          <p className="cart-product-name m-0">{item.Productname}</p>
          <p className="cart-product-price m-0">Rs.{item.price}</p>
          <p className="cart-product-price-d">Rs.{item.dprice}</p>
        </div>
      </div>
      <div className="cart-buttons">
        <button className="cart-button-1" onClick={decrement} >-</button>
        <span className="cart-quantity">{amount}</span>
        <button className="cart-button-1" onClick={increment} >+</button>
        <button className="remove-button-1" onClick={() => handleRemove(item.id)}>Remove</button>
      </div>
    </div>
  ))}
  <div className="cart-total">
    <span className="total-label">Your total price: </span>
    <span className="total-price"> Rs.{price}</span>
    

  </div>
  <div className="paynow">
    <button className='paynow-nigga'><FontAwesomeIcon icon={faGooglePay} /></button>
  </div>
</div>
</section>

  
  )
}

export default cart
