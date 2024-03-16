import React from 'react'
import '../components/footer.css'
import logo from '../assets/logo.png'
function footer() {
  return (
    <footer className="footer">
  <div className="container">
    <div className="row pt-5">

    <div className="footr-about ">
      <img src={logo} alt=""  className='footerlogo'/>
      </div>
    
      <div className="col-md-6 footr-about ">
    
        <h5 className='mb-3'>About Mr. Robert</h5>
        <p className='footer-font'>Explore the world of Mr. Robot, a captivating show that will keep you entertained for hours.</p>
      </div>
      <div className="col-md-6 footr-about">


        <h5 className='mb-3 footr-about'>Contact Us</h5>
        <p className='m-0 footer-font'>If you have any questions or inquiries, feel free to reach out to us:</p>
        <p className='m-0 footer-font'>Email: aryan96874@gmail.com</p>
        <p className='m-0 footer-font'>Website: <a href="https://aryanchalotra.10n20.in/" className='footr-about'>aryanchalotra.10n20.in</a></p>
      </div>
    </div>
    <hr />
    <div className="row">
      <div className="col-md-12 footr-about footer-font">
        <p className="text-center"> &copy; {new Date().getFullYear()} Mr. Robot <a className='footr-about' href="https://www.10n20.in/"><b>#10n20</b></a> </p>
      </div>
    </div>
    
  </div>
</footer>
  )
}

export default footer