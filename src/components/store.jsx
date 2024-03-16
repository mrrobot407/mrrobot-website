import React from 'react'
import  {itemlist}  from '../components/shopproject'

import '../components/shop.css'
import Cards from '../components/cards.jsx'


function store({handleClick}) {




  return (
    <>
  
      <div className='storebg  pattern-vertical-lines-lg bg-warning '>
        <div className="container text-left   main-head">
          <h1 className='h1-cart '>
          "Gear Up with Mr. Robot Merchandise!"
          </h1>
          <p className='p-cart'>Enter the Mr. Robot Shop and find all the gear you need to show your love for this iconic series. From tees to tech, our collection has something for every fan. Dive in and deck out your world with Mr. Robot style.</p>
        </div>
     
<div className="productmain container ">
  {itemlist.map((item) => <Cards key={item.id} item={item}  handleClick={handleClick}/>)}

  </div>
  </div>

     

    </>

  )
}

export default store
