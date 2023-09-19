import React from 'react'
import Form from 'react-bootstrap/Form';
import mai from '../Assets/d1.png';
import d2 from '../Assets/d2.png';
import d3 from '../Assets/d3.png'
const Contact = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-6">
          <img src= {mai} alt="" />    
          <img src={d3} alt="" />
            </div>
      </div>

      <div className="row">
        <div className="col-lg-6 d-flex">
          {/* <img src={d2} alt="" /> */}
        </div>
      </div>
    </div>
  )
}

export default Contact
