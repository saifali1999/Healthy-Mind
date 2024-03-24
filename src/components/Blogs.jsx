import React,{useEffect} from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css'

const Blogs = () => {

    useEffect(()=>{
        Aos.init({duration:'1000', once: true});
      },[])

  return (
    <div>
        <div className="container-fluid all_blogs">
            <div className="d-flex justify-content-between align-items-center">
                <h1 className='text-md-center'>Latest articles </h1>
                <a href="" className="green_btn d-none d-md-block">Read more articles</a>
            </div>
                <div className="row py-4 justify-content-center align-items-center g-5">
                    <div className=" col-lg-4 col-md-6 col-12" data-aos='fade-up'data-aos-delay="500" >
                        <img src="images/blog1.jpg" className='w-100' alt="" />
                        <div className="card-body p-3">
                        <h4 className='py-3 m-0 fw-bold'>Simple ways to make meditation a daily habit </h4>
                        <div className="d-flex align-items-center flex-wrap blog_details mb-2">
                            <span className='author me-3'>merkulove</span>
                            <span className='date me-3 position-relative'>Feb20,2024</span>
                            <span className='comment me-3 position-relative'>3Comments</span>
                        </div>
                        <p className='py-3'>Many of us know that our life would be better with meditation… if we could only figure out how to make it stick.</p>
                        <a href="" className='read_more'>Read more <i className="fa-solid fa-arrow-right"></i></a>
                    </div>
                    </div>
                   
                    <div className=" col-lg-4 col-md-6 col-12" data-aos='fade-up'data-aos-delay="800" >
                        <img src="images/blog2.jpg" className='w-100' alt="" />
                        <div className="card-body p-3">
                        <h4 className='py-3 m-0 fw-bold'>Coping with tragedy and tragic events</h4>
                        <div className="d-flex align-items-center flex-wrap blog_details mb-2">
                            <span className='author me-3'>merkulove</span>
                            <span className='date me-3 position-relative'>Feb20,2024</span>
                            <span className='comment me-3 position-relative'>3Comments</span>
                        </div>
                        <p className='py-3'>Sudden, shocking events in our lives, local communities, or another part of the world can shatter our sense of security and stability. </p>
                        <a href="" className='read_more'>Read more <i className="fa-solid fa-arrow-right"></i></a>
                    </div>
                    </div>
                   
                    <div className=" col-lg-4 col-md-6 col-12" data-aos='fade-up'data-aos-delay="800" >
                        <img src="images/blog2.jpg" className='w-100' alt="" />
                        <div className="card-body p-3">
                        <h4 className='py-3 m-0 fw-bold'>Breathing exercises to reduce stress</h4>
                        <div className="d-flex align-items-center flex-wrap blog_details mb-2">
                            <span className='author me-3'>merkulove</span>
                            <span className='date me-3 position-relative'>Feb20,2024</span>
                            <span className='comment me-3 position-relative'>3Comments</span>
                        </div>
                        <p className='py-3'>“Take a deep breath” might be some of the best advice around. It’s one of the effective ways to relieve stress</p>
                        <a href="" className='read_more'>Read more <i className="fa-solid fa-arrow-right"></i></a>
                    </div>
                    </div>
                    <div className=" col-lg-4 col-md-6 col-12" data-aos='fade-up'data-aos-delay="800" >
                        <img src="images/blog2.jpg" className='w-100' alt="" />
                        <div className="card-body p-3">
                        <h4 className='py-3 m-0 fw-bold'>Meditation for beginners </h4>
                        <div className="d-flex align-items-center flex-wrap blog_details mb-2">
                            <span className='author me-3'>merkulove</span>
                            <span className='date me-3 position-relative'>Feb20,2024</span>
                            <span className='comment me-3 position-relative'>3Comments</span>
                        </div>
                        <p className='py-3'>Meditation is both a skill and an experience that can improve your health and happiness</p>
                        <a href="" className='read_more'>Read more <i className="fa-solid fa-arrow-right"></i></a>
                    </div>
                    </div>
                    <div className=" col-lg-4 col-md-6 col-12" data-aos='fade-up'data-aos-delay="1100" >
                        <img src="images/blog3.jpg" className='w-100' alt="" />
                        <div className="card-body p-3">
                        <h4 className='py-3 m-0 fw-bold'>Self-care ideas that stick.</h4>
                        <div className="d-flex align-items-center flex-wrap blog_details mb-2">
                            <span className='author me-3'>merkulove</span>
                            <span className='date me-3 position-relative'>Feb20,2024</span>
                            <span className='comment me-3 position-relative'>3Comments</span>
                        </div>
                        <p className='py-3'>What is self-care really about? It’s simply the time we take to look after our mind and body.</p>
                        <a href="" className='read_more'>Read more <i className="fa-solid fa-arrow-right"></i></a>
                    </div>
                    </div>
                    <div className=" col-lg-4 col-md-6 col-12" data-aos='fade-up'data-aos-delay="800" >
                        <img src="images/blog2.jpg" className='w-100' alt="" />
                        <div className="card-body p-3">
                        <h4 className='py-3 m-0 fw-bold'> Self-improvement trap</h4>
                        <div className="d-flex align-items-center flex-wrap blog_details mb-2">
                            <span className='author me-3'>merkulove</span>
                            <span className='date me-3 position-relative'>Feb20,2024</span>
                            <span className='comment me-3 position-relative'>3Comments</span>
                        </div>
                        <p className='py-3'>Self-improvement isn’t a bad thing. That's how we mature, grow, and get more skilled at navigating life.</p>
                        <a href="" className='read_more'>Read more <i className="fa-solid fa-arrow-right"></i></a>
                    </div>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default Blogs