import React,{useEffect} from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css'

const Faq = () => {

    useEffect(()=>{
        Aos.init({duration:'1000',once: true});
      },[])

  return (
   <>
    <div className="all_faqs w-100">
        <div className="row align-items-center">
            <div className="col-lg-5 col-md-6 col-12 d-none d-md-block">
                <div className="row">
                    <div className="col-6 mt-5 ">
                        <img src="images/faq1.jpg" className='w-100 mb-4 faq1'  alt="" data-aos='fade-in-up' data-aos-delay='300' />
                        <img src="images/faq2.jpg" className='w-100 ps-4 faq2'  alt=""  data-aos='fade-in-up' data-aos-delay='500' />
                    </div>
                    <div className="col-6">
                        <img src="images/faq3.jpg" className='w-100 mb-4 faq3'  alt="" data-aos='fade-in-up' data-aos-delay='300' />
                        <img src="images/faq4.jpg" className='w-100 px-4 faq4'  alt=""  data-aos='fade-in-up' data-aos-delay='500' />
                    </div>
                </div>
            </div>
            <div className="col-lg-7 ps-md-5 col-md-6 col-12">
                <h1 className='text-center text-md-start' data-aos='fade-in-up' data-aos-delay='200'>The most popular questions to discuss mental health</h1>

            <div className="accordion">
            <div className="accordion-item">
                <input type="checkbox" id="accordion1" />
                <label htmlFor="accordion1" className="accordion-item-title"><span className="icon"></span>What is mental health?   </label>
                <div className="accordion-item-desc">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</div>
            </div>

            <div className="accordion-item">
                <input type="checkbox" id="accordion2" />
                <label htmlFor="accordion2" className="accordion-item-title"><span className="icon"></span>What do I do if the support doesn't help?</label>
                <div className="accordion-item-desc">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</div>
            </div>

            <div className="accordion-item">
                <input type="checkbox" id="accordion3" />
                <label htmlFor="accordion3" className="accordion-item-title"><span className="icon"></span>Can you prevent mental health problems?</label>
                <div className="accordion-item-desc">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</div>
            </div>

            <div className="accordion-item">
                <input type="checkbox" id="accordion4" />
                <label htmlFor="accordion4" className="accordion-item-title"><span className="icon"></span>Are there cures for mental health problems?</label>
                <div className="accordion-item-desc">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</div>
            </div>

            <div className="accordion-item">
                <input type="checkbox" id="accordion5" />
                <label htmlFor="accordion5" className="accordion-item-title"><span className="icon"></span>What are the 7 components of mental health?</label>
                <div className="accordion-item-desc">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</div>
            </div>

            </div>

           </div>
        </div>
    </div>
   </>
  )
}

export default Faq