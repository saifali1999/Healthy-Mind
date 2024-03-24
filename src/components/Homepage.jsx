import React, { useEffect } from 'react'
import Services from './Services'
import Plans from './Plans'
import Testimonials from './Testimonials'
import ContactForm from './ContactForm'
import Blogs from './Blogs'
import Faq from './Faq'
import Contact from './Contact'
import Footer from './Footer'
import CountUp from 'react-countup';
import Aos from 'aos';
import 'aos/dist/aos.css'


const Homepage = () => {

  useEffect(()=>{
    Aos.init({
      duration:'2000',
      once: true,
    });
  },[])

  return (
    <>
    {/* <section className='navigation container-fluid fixed-top'>
    <nav className='navbar d-flex justify-content-between align-items-center '>
      <h3 className='m-0'><a href="" className='brand_name'><i className="fa-solid fa-leaf me-2"></i>Healthy Minds</a></h3>
        <ul className='nav-links m-0 p-0'>
          <li className=''><a href="/" className='nav-link active'>Home</a></li>
          <li className=''><a href="/" className='nav-link'>About</a></li>
          <li className=''><a href="/" className='nav-link'>Programs</a></li>
          <li className=''><a href="/" className='nav-link'>Blog</a></li>
          <li className=''><a href="/" className='nav-link'>Pages</a></li>
          <li className=''><a href="/" className='nav-link'>Contacts</a></li>
          
        </ul>
    <div className="contact_wrapper d-flex align-items-center">
      <i className="fa-solid fa-phone"></i>
        <h4 className='m-0'><a href="" className='contact_no'>+1 2345688 123</a></h4>
    </div>
    </nav>
    </section> */}



    <section className="navigation">
     <div className="nav-container py-3">
    <div className="brand">
      <a href="/" className='d-flex align-items-center'>
        
        <h3 data-aos='fade-in-up' data-aos-delay="300" className='txt-dark ' > <i className="fa-solid fa-leaf me-2"></i>Healthy Minds</h3>
        </a>
    </div>
   
    <nav data-aos='fade-in-right' data-aos-duration="2000">
      <div className="nav-mobile">
        <a id="nav-toggle" href="#!"><span></span></a>
      </div>
      <ul className="nav-list">
        <li><a href="#!" className='active'>Home</a></li>
        <li><a href="#!">About</a></li>
        <li><a href="#!">Programs</a>
          <ul className="nav-dropdown">
            <li><a href="#!">Program 1</a></li>
            <li><a href="#!">Program 2</a></li>
            <li><a href="#!">Program 3</a></li>
          </ul>
        </li>
        <li><a href="#!">Pages</a></li>
        <li><a href="#!">Contacts</a></li>
      </ul>
    </nav>
  </div>
</section>
    <section className="main_banner container-fluid">
          <div className="row">
            <div className="col-lg-5 col-12" data-aos='fade-in-up' data-aos-delay="300">
              <h2 className='text-center text-lg-start'>Make it your year with Headspace</h2>
              <p className='py-4 text-center text-lg-start'>Headspace's mission is to provide every person access to lifelong mental health support.</p>
              <div className="home_btns d-flex flex-wrap py-4">
                <a className="green_btn mx-2 mb-3">Get a consultation</a>
                <a className="green_outline_btn ms-md-5 mx-2 mb-3">Try for free</a>
              </div>
              <div className="all_about py-5" data-aos="fade-up" >
                <div className="row">
                  <div className="col-md-4 text-center text-lg-start">
                    <h1> <CountUp start={0} end={20} duration={3}></CountUp>+</h1>
                    <p>Years of experience</p>
                  </div> 
                  <div className="col-md-4 text-center text-lg-start">
                    <h1> <CountUp start={0} end={850}  duration={2.75}></CountUp>+</h1>
                    <p>Patients received help this year</p>
                  </div>
                  <div className="col-md-4 text-center text-lg-start">
                    <h1> <CountUp start={0} end={95}  duration={2.5}></CountUp>%</h1>
                    <p>Effectiveness of therapy</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-12 offset-md-1 d-none d-lg-block"  data-aos='fade-in-up' data-aos-delay="400" >
              <div className="main_img_shadow position-relative">
              <img src="images/homeBanner.jpg" className='w-100 home_img' alt="" />
              </div>
            </div>
          </div>
    </section>

    <Services />
    <Plans/>
    <Testimonials/>
    <ContactForm />
    <Blogs/>
    <Faq/>
    <Contact />
    <Footer />
     </>   
  )
}

export default Homepage