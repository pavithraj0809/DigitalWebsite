import React from 'react'

function Home() {
    return (
        <>

            <div className="containerwidth">
                <div class='row'>
                   
                    <div className=" col-sm-12 col-md-12 col-lg-12 img1">
                        <div className="point">
                            <h1 className="text-light">CREATIVE DIGITAL AGENCYTIVE DIGITAL AGENCY</h1>
                            <h5 className="text-warning">A digital marketing agency employs a wide variety of different tactics,
                                strategies, and online tools to help a business attain its marketing
                                and sales goals.</h5>
                            <div className="pt-3 text-light">
                                <button className='btn btn-outline-light p-2'>ReadMore</button>
                                <button className='btn btn-outline-light  p-2 ms-4'>REQUEST & CONSULT</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='withset'>
                <div className='row bg1'>
                    <div class="col-sm-12 col-md-6 col-lg-4">
                        <div className="d-flex">
                            <i class="fa-solid fa-rocket pt-2"></i>
                            <h4 className="ms-3">LANUCH BUSINESS</h4>
                        </div>
                        <h6>Making money should not preclude basic moral principles,
                            and the golden rule should govern business ethics,
                            according to the Houston Chronicle. </h6>

                    </div>
                    <div class="col-sm-12 col-md-6 col-lg-4">
                        <div className="d-flex">
                            <i class="fa-solid fa-headset pt-2"></i>
                            <h4 className="ms-3">ONLINE SUPPORT TEAM</h4>
                        </div>
                        <h6>Online customer service is the process of answering customer
                            questions digitally using tools such as email, social media,
                            live chat, and messaging apps. </h6>
                    </div>
                    <div class="col-sm-12 col-md-6 col-lg-4">
                        <div className="d-flex">
                            <i class="fa-regular fa-clock pt-2"></i>
                            <h4 className="ms-3">TIME MANAGEMENT</h4>
                        </div>
                        <h6>Time management is the process of consciously planning and controlling
                            time spent on specific tasks to increase how efficient you are</h6>

                    </div>
                </div>

            </div>

        </>
    );
}

export default Home
