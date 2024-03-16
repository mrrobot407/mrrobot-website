import React from 'react'
import elliot from '../assets/mrobot.png'
import './mainpage.css';
import logo from '../assets/logo.png'
import Section4 from '../components/section4.jsx'

function mainpage() {
  return (<>
<section className=' mainclass-1' >
  <div className="bg-img-1">
 <div className="container text-center-1 ">
   
     <div className='text-center-1'> 


     <div className="container pt-5 ">
      <img src={logo} className=" image-section1 img-fluid" />
      
        </div>
        </div>
        </div>
    
  
 </div>
</section>
<section className='mainsection-3'>
<div class="container">
  <div class="row justify-content-end">
    <div class="col-lg-6">
      <h1 class="text-center sec-3-h1">Unraveling the Enigma of <span className='underline-n'>Mr. Robot</span> </h1>
      <p class="text-center sec-3-p">Enter the enigmatic world of Mr. Robot, a captivating TV series that plunges viewers into the murky depths of hacking and rebellion. Created by Sam Esmail, the show orbits around Elliot Alderson, a brilliant but troubled cybersecurity expert turned vigilante hacker. Against the backdrop of a dystopian New York, Elliot grapples with his alter ego, Mr. Robot, and the clandestine group, fsociety, as they challenge societal norms. Explore the nexus of technology and humanity in this gripping narrative of intrigue and defiance.</p>
    </div>
  </div>
</div>
</section>
<Section4/>
{/* <section className='mainclass-2'>

<div className="container">
  <div className="text-center pt-5">
 
  </div>
</div>


 </section> */}
 

</>
  )
}

export default mainpage