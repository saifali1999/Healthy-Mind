import React,{useEffect} from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css'

const Contact = () => {

    useEffect(()=>{
        Aos.init({duration:'1000',once: true,});
      },[])

  return (
    <>
        <div className="contact_area sect_padding container-fluid ">
            <div className="row">
                <div className="col-lg-6 col-12 mb-5">
                    <h1 className='text-center text-lg-start'>Contacts</h1>
                    <p className='py-2 text-center text-lg-start'>It is a long established fact that a reader will be distracted by the readable content of a page. Sed ut perspiciatis unde omnis iste natus error</p>
                    <div className="row py-4 contact_icons" data-aos='fade-up' data-aos-delay='300'>
                        <div className="col-md-6 col-12 mb-4">
                            <div className='d-flex align-items-center justify-content-center flex-column flex-md-row'>
                                <i className="fa-solid fa-phone mx-3"></i>
                                <div className='text-center text-md-start'>
                                    <h5 className='fw-bold'>Phone number</h5>
                                    <h3 className='fw-bold'>+1 235 55 53 123</h3>
                                </div>

                            </div>
                        </div>
                        <div className="col-md-6 col-12 mb-4">
                            <div className='d-flex align-items-center justify-content-center flex-column flex-md-row'>
                                <i className="fa-solid fa-envelope mx-3"></i>
                                <div className='text-center text-md-start'>
                                    <h5 className='fw-bold'>Email</h5>
                                    <h3 className='fw-bold'>info@example.com</h3>
                                </div>

                            </div>
                        </div>
                        <div className="col-md-6 col-12 mb-4">
                            <div className='d-flex align-items-center justify-content-center flex-column flex-md-row'>
                                <i className="fa-solid fa-fax mx-3"></i>
                                <div className='text-center text-md-start'>
                                    <h5 className='fw-bold'>Fax</h5>
                                    <h3 className='fw-bold'>+1 235 55 53 123</h3>
                                </div>

                            </div>
                        </div>
                        <div className="col-md-6 col-12 mb-4">
                            <div className='d-flex align-items-center justify-content-center flex-column flex-md-row'>
                                <i className="fa-solid fa-location-dot mx-3"></i>
                                <div className='text-center text-md-start'>
                                    <h5 className='fw-bold '>Location</h5>
                                    <h3 className='fw-bold'>23, XYZ Main City</h3>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="working_details my-md-5" data-aos='fade-up' data-aos-delay='500'>
                        <h4 className='fw-bold py-3'>Working Hours</h4>
                        <div className="d-flex align-items-center justify-content-between flex-wrap  w-100 py-3">
                            <h5 className='fw-light'>Monday-Friday :</h5>
                            <h5 className='fw-bold'>8 am - 5 pm</h5>
                        </div>
                        <div className="d-flex align-items-center justify-content-between flex-wrap  w-100 py-3">
                            <h5 className='fw-light'>Saturday-Sunday :</h5>
                            <h5 className='fw-bold'>9 am - 2 pm</h5>
                        </div>
                    </div>
                </div>
                <div className="col-lg-5 offset-lg-1 col-12">
                    <div className="map_container h-100 w-100">
                    <iframe loading="lazy" className='w-100 h-100' src="https://maps.google.com/maps?q=London%20Eye%2C%20London%2C%20United%20Kingdom&amp;t=m&amp;z=13&amp;output=embed&amp;iwloc=near" title="London Eye, London, United Kingdom" aria-label="London Eye, London, United Kingdom"></iframe>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Contact