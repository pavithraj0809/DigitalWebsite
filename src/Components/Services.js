import React from 'react'

const Services = () => {
  return (
    <>
    
        <div className='box mt-5 width1'>     
        <h3 className='mt-5 ms-5 pb-5'>OUR SERVICES</h3>
        <div class="row ">
        <div class="col-sm-12 col-md-4 col-lg-4">
          <img src="./images/img5.jpg" alt=" " className='images ms-5' />
          <div className='design'>
          <div className="edit d-flex" style={{width:'250px',height:'40px'}}>
            <i class="fa-solid fa-volume-high  mt-2 logo"style={{color:'red',height:'30px',width:'30px',borderRadius:'50%',backgroundColor:'yellow',padding:'6px'}}></i>
            <h4 className="ms-2">USER EXPERIENCE</h4>
          </div>
          </div>

        </div>
        <div class="col-sm-12 col-md-4 col-lg-4">
          <img src="./images/img6.jpg" alt=" " className='images' />
          <div className="edit d-flex mb-4" style={{width:'250px',height:'40px'}}>
            <i class="fa-brands fa-creative-commons-share mt-2 logo" style={{color:'red',height:'30px',width:'30px',borderRadius:'50%',backgroundColor:'yellow',padding:'6px'}}></i>
            <h4 className="ms-2">CREATIVE DESIGN</h4>
          </div>
        </div>
        <div class="col-sm-12 col-md-4 col-lg-4">
          <img src="./images/img1.jpg" alt=" " className='images' />
          <div className="edit d-flex"style={{width:'250px',height:'40px'}} >
            <i class="fa-solid fa-dollar-sign mt-2  logo" style={{color:'red',height:'30px',width:'30px',borderRadius:'50%',backgroundColor:'yellow',padding:'6px'}}></i>
            <h4 className="ms-2">RETINA READY</h4>
          </div>
        </div>
        </div>
       

        

      </div>
    </>
  );
}

export default Services
