import React from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';


const Plans = () => {
    useEffect(()=>{
        Aos.init({duration:'1000', once: true,});
      },[])
  return (
    <>
        <div className="pricing_plans container-fluid">
            <h1 className='text-center'>Pricing Plans</h1>
            <p className='text-center'>Start Headspace today, and find joy in January and <br /> beyond. Choose a plan to get started.</p>
        <div className="row justify-content-center py-4">
            <div className="col-lg-4 col-md-6 col-sm-12 mb-4" data-aos='fade-up' data-aos-delay="300">
                <div className="card border-0 text-center">
                    <div className="card-body">
                        <h5 className='txt-dark fw-bold'>Light session</h5>
                        <h1 className='txt-secondary text-center'>$150</h1>
                        <ul className='p-0 my-3'>
                            <li className='d-flex align-items-center justify-content-center py-2'><i className="fa-solid fa-check-circle me-3"></i> <p className='m-0'>3 sessions / month</p></li>
                            <li className='d-flex align-items-center justify-content-center py-2'><i className="fa-solid fa-check-circle me-3"></i> <p className='m-0'>Group psychotherapy</p></li>
                            <li className='d-flex align-items-center justify-content-center py-2'><i className="fa-solid fa-check-circle me-3"></i> <p className='m-0'>Duration 30 minutes</p></li>
                            <li className='d-flex align-items-center justify-content-center py-2 text-secondary'><i className="fa-solid fa-check-circle active me-3"></i> <p className='m-0'>Personal meeting</p></li>
                            <li className='d-flex align-items-center justify-content-center py-2 text-secondary'><i className="fa-solid fa-check-circle active me-3"></i> <p className='m-0'>Support 24 hours</p></li>
                            
                        </ul> 
                        <div className="d-flex justify-content-center py-3">
                        <a href="" className="green_outline_btn">Buy now</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 mb-4" data-aos='fade-up' data-aos-delay="500">
                <div className="card border-0 text-center">
                    <div className="card-body">
                        <h5 className='txt-dark fw-bold'>Standard session</h5>
                        <h1 className='txt-secondary text-center'>$250</h1>
                        <ul className='p-0 my-3'>
                            <li className='d-flex align-items-center justify-content-center py-2'><i className="fa-solid fa-check-circle me-3"></i> <p className='m-0'>3 sessions / month</p></li>
                            <li className='d-flex align-items-center justify-content-center py-2'><i className="fa-solid fa-check-circle me-3"></i> <p className='m-0'>Group psychotherapy</p></li>
                            <li className='d-flex align-items-center justify-content-center py-2'><i className="fa-solid fa-check-circle me-3"></i> <p className='m-0'>Duration 30 minutes</p></li>
                            <li className='d-flex align-items-center justify-content-center py-2'><i className="fa-solid fa-check-circle  me-3"></i> <p className='m-0'>Personal meeting</p></li>
                            <li className='d-flex align-items-center justify-content-center py-2 text-secondary'><i className="fa-solid fa-check-circle active me-3"></i> <p className='m-0'>Support 24 hours</p></li>
                            
                        </ul> 
                        <div className="d-flex justify-content-center py-3">
                        <a href="" className="green_btn">Buy now</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 mb-4" data-aos='fade-up' data-aos-delay="700">
                <div className="card border-0 text-center">
                    <div className="card-body">
                        <h5 className='txt-dark fw-bold'>Individual session</h5>
                        <h1 className='txt-secondary text-center'>$400</h1>
                        <ul className='p-0 my-3'>
                            <li className='d-flex align-items-center justify-content-center py-2'><i className="fa-solid fa-check-circle me-3"></i> <p className='m-0'>3 sessions / month</p></li>
                            <li className='d-flex align-items-center justify-content-center py-2'><i className="fa-solid fa-check-circle me-3"></i> <p className='m-0'>Group psychotherapy</p></li>
                            <li className='d-flex align-items-center justify-content-center py-2'><i className="fa-solid fa-check-circle me-3"></i> <p className='m-0'>Duration 30 minutes</p></li>
                            <li className='d-flex align-items-center justify-content-center py-2'><i className="fa-solid fa-check-circle  me-3"></i> <p className='m-0'>Personal meeting</p></li>
                            <li className='d-flex align-items-center justify-content-center py-2 '><i className="fa-solid fa-check-circle  me-3"></i> <p className='m-0'>Support 24 hours</p></li>
                            
                        </ul> 
                        <div className="d-flex justify-content-center py-3">
                        <a href="" className="green_outline_btn">Buy now</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </>
  )
}

export default Plans