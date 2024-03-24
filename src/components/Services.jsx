import React from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';

const Services = () => {

    useEffect(()=>{
        Aos.init({duration:'2000',once: true});
      },[])

  return (
    <>
    <div className="all_services container-fluid">
        <h1 className='text-center'>What I'm Offer</h1>
        <p className='text-center'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel optio ducimus dignissimos !</p>
        {/* <div className="row justify-content-center py-4">
              

              <div className="col-lg-4 col-md-6 col-sm-12 mb-4 text-center text-md-start" data-aos="fade-up"  data-aos-delay="900">
                <div className="card border-0">
                    <div className="card-body">
                        <img src="images/ser3.png" alt="" />
                        <h4 className='py-3 m-0 fw-bold'>Prioritize your mental health</h4>
                        <p>Discover guided meditations and programs that help you stress less and learn to handle new challenges with ease.</p>
                        <a href="" className='more_info'>More info <i className="fa-solid fa-arrow-right"></i></a>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 mb-4 text-center text-md-start" data-aos="fade-up"  data-aos-delay="900">
                <div className="card border-0">
                    <div className="card-body">
                        <img src="images/ser3.png" alt="" />
                        <h4 className='py-3 m-0 fw-bold'>Prioritize your mental health</h4>
                        <p>Discover guided meditations and programs that help you stress less and learn to handle new challenges with ease.</p>
                        <a href="" className='more_info'>More info <i className="fa-solid fa-arrow-right"></i></a>
                    </div>
                </div>
            </div>
            
         
        </div> */}
        
        <div className="new_card py-3">
        <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 col-sm-12 mb-4 text-center text-md-start"  data-aos="fade-up"  data-aos-delay="300">
            <div class="card">
                    <div class="content">
                    <div class="front">
                    <img src="images/ser1.png" alt="" />
                        <h4 className='py-3 m-0 fw-bold'>Prioritize your mental health</h4>
                        <p>Discover guided meditations and programs that help you stress less and learn to handle new challenges with ease.</p>
                        <a href="" className='more_info'>More info <i className="fa-solid fa-arrow-right"></i></a>
                    </div>
                    <div class="back">
                        <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque illum excepturi error fugiat, sapiente quibusdam necessitatibus consequuntur corporis rerum <br /> voluptatem consectetur exercitationem quasi fuga. Laudantium consequuntur sequi odit vitae enim.</p>
                    </div>
                  </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 mb-4 text-center text-md-start"  data-aos="fade-up"  data-aos-delay="500">
            <div class="card">
                    <div class="content">
                    <div class="front">
                    <img src="images/ser2.png" alt="" />
                        <h4 className='py-3 m-0 fw-bold'>Get more restful sleep</h4>
                        <p>Find your perfect bedtime routine with hours of relaxing music, sounds, bedtime stories, and exercises.</p>
                        <a href="" className='more_info'>More info <i className="fa-solid fa-arrow-right"></i></a>
                    </div>
                    <div class="back">
                        <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque illum excepturi error fugiat, sapiente quibusdam necessitatibus consequuntur corporis rerum <br /> voluptatem consectetur exercitationem quasi fuga. Laudantium consequuntur sequi odit vitae enim.</p>
                    </div>
                  </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 mb-4 text-center text-md-start"  data-aos="fade-up"  data-aos-delay="700">
            <div class="card">
                    <div class="content">
                    <div class="front">
                    <img src="images/ser3.png" alt="" />
                        <h4 className='py-3 m-0 fw-bold'>Explore 500+ meditations</h4>
                        <p>Access our entire library of meditations, sleep sounds, yoga and fitness, and focus music.</p>
                        <a href="" className='more_info'>More info <i className="fa-solid fa-arrow-right"></i></a>
                    </div>
                    <div class="back">
                        <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque illum excepturi error fugiat, sapiente quibusdam necessitatibus consequuntur corporis rerum <br /> voluptatem consectetur exercitationem quasi fuga. Laudantium consequuntur sequi odit vitae enim.</p>
                    </div>
                  </div>
                </div>
            </div>

        </div>
        </div>

        

        <div className="d-flex align-items-center justify-content-center w-100 pt-3 pb-0">
            <a href="" className="green_btn" data-aos="fade-up" data-aos-delay="1200">All programs</a>
        </div>
    </div>

    <section className="main_banner2 container-fluid ">
          <div className="row ">
            <div className="col-lg-6">
              <h2 className='text-center text-lg-start'>Headspace and LinkedIn Team Up To Launch New Tools for Managing Emotions at Work.</h2>
              <p className='pt-4 text-center text-lg-start'>To help improve mental health at work, we’ve teamed up with LinkedIn to offer constructive, tangible tools to help you navigate everyday workplace challenges.</p>
                <ul className='py-3 ps-0' data-aos="fade-up" >
                    <div className="row all_counselings">
                        <div className="col-md-6 my-2">
                            <li className='d-flex align-items-center '>
                                <i className="fa-solid fa-check-circle me-4"></i>
                                 <h5 className='m-0'>Personal Consultations</h5>
                           </li>
                        </div>
                        <div className="col-md-6 my-2">
                            <li className='d-flex align-items-center '>
                                <i className="fa-solid fa-check-circle me-4"></i>
                                 <h5 className='m-0 '>Unique technique</h5>
                           </li>
                        </div>
                        <div className="col-md-6 my-2">
                            <li className='d-flex align-items-center '>
                                <i className="fa-solid fa-check-circle me-4"></i>
                                 <h5 className='m-0'>Couple Problem</h5>
                           </li>
                        </div>
                        <div className="col-md-6 my-2">
                            <li className='d-flex align-items-center '>
                                <i className="fa-solid fa-check-circle me-4"></i>
                                 <h5 className='m-0'>Group Therapy</h5>
                           </li>
                        </div>
                        <div className="col-md-6 my-2">
                            <li className='d-flex align-items-center '>
                                <i className="fa-solid fa-check-circle me-4"></i>
                                 <h5 className='m-0'>Online Therapy</h5>
                           </li>
                        </div>
                    </div>
                </ul>
              <div className="home_btns d-flex py-4"  data-aos-delay="300">
                <a className="green_btn"  data-aos="fade-up" data-aos-delay="500">Learn more</a>
              </div>
            
            </div>
            <div className="col-lg-6 ">
             <div className='img_shadow position-relative '>
             <img src="images/homeBanner2.jpg" className='w-100 home_img2' alt="" />
             </div>
            </div>
          </div>
    </section>
    </>
  )
}

export default Services