import React from 'react'

const nav = () => {
    return (
        <>
            <div className='con'>
                <div class='row grad bg-warning pt-3'>

                    <div className="col-sm-12 col-md-6 col-lg-4 ">
                        <ul className="list-unstyled d-flex ms-5 text-light">
                            <li className="ms-2 ">|<i class="fa-brands fa-twitter ps-2"></i><span className='ps-2'>|</span></li>
                            <li className="ms-2"><i class="fa-brands fa-instagram ps-2"></i><span className='ps-2'>|</span></li>
                            <li className="ms-2"><i class="fa-brands fa-facebook ps-2"></i><span className='ps-2'>|</span></li>
                            <li className="ms-2 "><i class="fa-brands fa-youtube ps-2"></i><span className='ps-2'>|</span></li>
                            <li className="ms-2 "><i class="fa-brands fa-pinterest ps-2"></i><span className='ps-2'>|</span></li>
                            <li className="ms-2 "><i class="fa-brands fa-linkedin ps-2"></i><span className='ps-2'>|</span></li>
                        </ul>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-4">
                        <ul className='list-unstyled d-flex text-light'>
                            <li><i class="fa-solid fa-phone"></i><span className="ms-2" >9790674409</span></li>
                            <li className="ms-3">|<i class="fa-regular fa-envelope ps-2"></i><span className="ms-2 ">pavithraj0809@gmail.com</span></li>
                        </ul>
                    </div>
                    <div className='col-sm-12 col-md-4 col-lg-2 d-flex'>
                        <button className='btn  color-dark btn-outline-light mb-3'>Request & Consult</button>
                    </div>
                </div>
                <div class="row mt-3">
                    <div class="col-lg-4 col-md-4 col-sm-12">
                        <h5 className="ms-5"><span className="ms-3"><i class=" text-warning fa-solid fa-file-arrow-down"></i></span> LANDING PAGE</h5>
                    </div>
                    <div class="col-lg-8 col-md-8 col-sm-12" >
                        <div class="row">
                            <div class="col-lg-11 col-md-11 col-sm-12">
                                <div class="row">
                                    <div class="col-lg-2 col-md-2 col-sm-12">
                                        <p>Home</p>
                                    </div>
                                    <div class="col-lg-2 col-md-2 col-sm-12">
                                        <p>Blog</p>
                                    </div>
                                    <div class="col-lg-2 col-md-2 col-sm-12">
                                        <p>Page</p>
                                    </div>
                                    <div class="col-lg-2 col-md-2 col-sm-12">
                                        <p>Services</p>
                                    </div>
                                    <div class="col-lg-2 col-md-2 col-sm-12">
                                        <p>Contact</p>
                                    </div>
                                    <div class="col-lg-2 col-md-2 col-sm-12">
                                        <p>BuyNow</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-1 col-md-1 col-sm-12" >
                            {/* style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }}> */}
                                <i class="fa-solid fa-magnifying-glass"></i>
                                 {/* style={{ backgroundColor: 'black', height: '100%', color: 'white', alignItems: 'center', paddingTop: '10px' }} ></i>  */}
                            </div>
                        </div>
                    </div>
                </div >



            </div>

        </>
    )
}

export default nav;
