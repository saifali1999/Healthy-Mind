import React from 'react'

const ContactForm = () => {
  return (
    <>
        <div className="contact_form container-fluid">
            <div className="col-lg-6 col-md-10 col-sm-12 mx-auto">
                <h1 className='text-center'>Get your first free online consultation</h1>
                <p className='text-center py-2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse provident blanditiis voluptatem, fugit excepturi neque.</p>
                <form action="" className='my-4'>
                    <div className="row">
                        <div className="col-sm-6 col-12 my-3">
                            <label htmlFor="">Name</label>
                            <input type="text" placeholder='Your Name' />
                        </div>
                        <div className="col-sm-6 col-12 my-3">
                            <label htmlFor="">Phone</label>
                            <input type="email" placeholder='Email' />
                        </div>
                        <div className="col-sm-6 col-12 my-3">
                            <label htmlFor="">Section</label>
                            <select className="form-select" aria-label="Default select example">
                            <option selected value="couple therapy" >Couples Therapy</option>
                            <option value="1">Relationships</option>
                            <option value="2">Depression Therapy</option>
                            <option value="3">Children Therapy</option>
                            <option value="3">Individual Therapy</option>

                            </select>
                        </div>
                        <div className="col-sm-6 col-12 my-3">
                            <label htmlFor="">Date</label>
                            <input type="date" />
                        </div>
                    </div>
                    <div className="d-flex justify-content-center py-3">
                    <a href="" className="green_btn py-3 px-5 ">Get a consultation</a>
                    </div>

                </form>
            </div>
        </div>
    </>
  )
}

export default ContactForm