import React from 'react'

function cards ({item,handleClick}) {

    const { id,Productname,price,image,dprice} = item;


    function calculateDiscountPercentage(price, dprice) {
      const discount = price - dprice;
      const discountPercentage = (discount / price) * 100;
      return discountPercentage.toFixed(0); // Round the percentage to zero decimal places

  }
  

  const discountPercentage = calculateDiscountPercentage(dprice, price);
  return (
    

    <div className='cards-product  bg-red pattern-dots-md ' >
      
        <div className="imagebox">
            <img src={image} alt="project image" className='pro-image'/>

        </div>
        <div className="text-pro">

            <p className="pro-name mt-3">{Productname}  </p>
            <p className="pro=price m-0">Rs.{price} ({discountPercentage}% off)</p>
            <p className="pro-price-1">Rs.{dprice} </p>
            <div className="button-shops  ">
<button className='cart-button ' onClick={()=> handleClick(item)}>add to cart</button>
</div>
        </div>
      
      
    </div>
    
  )
}

export default cards
