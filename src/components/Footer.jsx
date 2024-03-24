import React from 'react'

const Footer = () => {
  return (
    <>
        <div className="footer w-100">
            <div className="row container-fluid w-100  borbotom">
                <div className="col-lg-3 col-sm-12 mb-4">
                <h3 className='m-0 text-center text-lg-start fw-bold'><a href="" className=''><i ClassName="fa-solid fa-leaf me-2"></i><i className="fa-solid fa-leaf"></i> Healthy Minds</a></h3>
                </div>
                <div className="col-lg-6 col-sm-12 mb-4">
                    <ul className='d-flex align-items-center  justify-content-center justify-content-md-between footer_links flex-wrap p-0 m-0'>
                        <li className='px-3 my-2'><a href="" className='active'>Home</a></li>
                        <li className='px-3 my-2'><a href="">About</a></li>
                        <li className='px-3 my-2'><a href="">Programs</a></li>
                        <li className='px-3 my-2'><a href="">Blog</a></li>
                        <li className='px-3 my-2'><a href="">Contacts</a></li>
                    </ul>
                </div>
                <div className="col-lg-3 col-sm-12 mb-4">
                    <ul className='d-flex justify-content-center justify-content-lg-end flex-wrap footer_icons p-0 m-0'>
                        <li className='mb-3 px-2'><a href=""><i className="fa-brands fa-facebook"></i></a></li>
                        <li className='mb-3 px-2'><a href=""><i className="fa-brands fa-whatsapp"></i></a></li>
                        <li className='mb-3 px-2'><a href=""><i className="fa-brands fa-twitter"></i></a></li>
                        <li className='mb-3 px-2'><a href=""><i className="fa-brands fa-instagram"></i></a></li>


                        
                    </ul>
                </div>
            </div>
            <p className='text-center mt-5 mb-3'>Made by Grintech &copy; All Rights Reserved CopyRights 2024 </p>
        </div>
    </>
  )
}

export default Footer