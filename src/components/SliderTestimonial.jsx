import React,{useEffect} from 'react'
import { Pagination, A11y,Autoplay } from 'swiper/modules';  
import { Swiper, SwiperSlide } from 'swiper/react';  
import Aos from 'aos';
import 'aos/dist/aos.css'

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';   
import 'swiper/css/a11y';

const SliderTestimonial = () => {

    useEffect(()=>{
        Aos.init({duration:'1000',once: true});
      },[])

    return (
        <Swiper
        breakpoints={{
            992: {
              slidesPerView: 2,
            },
          }}
        modules={[ Pagination, A11y, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        autoplay={true}
        loop={true}
        navigation
        pagination={{ clickable: true }}
        // onSwiper={(swiper) => console.log(swiper)}
        // onSlideChange={() => console.log('slide change')}
        
        data-aos='fade-up'
        >
          <SwiperSlide >
          <div className="testimonial_card px-3 py-4 ">
                <div className="d-flex align-items-center justify-content-between">
                    <div className='d-flex align-items-center'>
                        <img src="images/client1.jpg" alt="" />
                        <div className='mx-4'>
                            <h5 className="person_name m-0">John Doe</h5>
                            <h5 className="designation m-0 txt-primary fw-bold">Auditor</h5>
                        </div>
                    </div>
                    <i ClassName="fa-solid fa-quote-right"></i>
                </div>
                <p className='py-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.Iste est quis odio? Consequuntur iusto in fugiat tenetur earum explicabo vel. Lorem, ipsum dolor sit amet consectetur bommodi, ab!</p>
            </div>
          </SwiperSlide>
          <SwiperSlide >
          <div className="testimonial_card px-3 py-4 ">
                <div className="d-flex align-items-center justify-content-between">
                    <div className='d-flex align-items-center'>
                        <img src="images/client2.jpg" alt="" />
                        <div className='mx-4'>
                            <h5 className="person_name m-0">John Doe</h5>
                            <h5 className="designation m-0 txt-primary fw-bold">Auditor</h5>
                        </div>
                    </div>
                    <i ClassName="fa-solid fa-quote-right"></i>
                </div>
                <p className='py-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.Iste est quis odio? Consequuntur iusto in fugiat tenetur earum explicabo vel. Lorem, ipsum dolor sit amet consectetur bommodi, ab!</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="testimonial_card px-3 py-4 ">
                <div className="d-flex align-items-center justify-content-between">
                    <div className='d-flex align-items-center'>
                        <img src="images/client3.jpg" alt="" />
                        <div className='mx-4'>
                            <h5 className="person_name m-0">Ammy Wilson</h5>
                            <h5 className="designation m-0 txt-primary fw-bold">Beautician</h5>
                        </div>
                    </div>
                    <i ClassName="fa-solid fa-quote-right"></i>
                </div>
                <p className='py-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.Iste est quis odio? Consequuntur iusto in fugiat tenetur earum explicabo vel. Lorem, ipsum dolor sit amet consectetur bommodi, ab!</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="testimonial_card px-3 py-4 ">
                <div className="d-flex align-items-center justify-content-between">
                    <div className='d-flex align-items-center'>
                        <img src="images/client2.jpg" alt="" />
                        <div className='mx-4'>
                            <h5 className="person_name m-0">Georgia</h5>
                            <h5 className="designation m-0 txt-primary fw-bold">Enterpreneur</h5>
                        </div>
                    </div>
                    <i ClassName="fa-solid fa-quote-right"></i>
                </div>
                <p className='py-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.Iste est quis odio? Consequuntur iusto in fugiat tenetur earum explicabo vel. Lorem, ipsum dolor sit amet consectetur bommodi, ab!</p>
            </div>
          </SwiperSlide>
         
        </Swiper>
      );
}

export default SliderTestimonial