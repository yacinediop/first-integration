import React from 'react'
import p1 from '../Assets/p1.png';
import p2 from '../Assets/p2.png'; 
import p3 from '../Assets/p3.png';
import p4 from '../Assets/p4.png';
import p5 from '../Assets/p5.png';
import {AiOutlineArrowRight} from "react-icons/ai";
import './Cardprod.css'
const Propos = () => {
  return (
    <div className='container-fluid mt-5'>
      <div className="row">
        <div className="col-lg-6">
          <img src={p1} alt="" className='img-fluid'/>
        </div>
        <div className="  col-lg-6 justify-content-center mab">
          <h1>Qui sommes nous ?</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br /> Iste nulla voluptates, illo similique porro enim <br /> corporis cum omnis doloribus in, blanditiis, laboriosam <br /> a nesciunt. Dolorum perferendis quae ullam numquam illum!</p>
          <br />
          <p className='text-danger'>En savoir plus <AiOutlineArrowRight /> </p>

        </div>

      </div>

      <div className="row">
        
        <div className="  col-lg-6 justify-content-center mab">
          <h1>Notre vision</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br /> Iste nulla voluptates, illo similique porro enim <br /> corporis cum omnis doloribus in, blanditiis, laboriosam <br /> a nesciunt. Dolorum perferendis quae ullam numquam illum!</p>
          <br />
          <p className='text-danger'>En savoir plus <AiOutlineArrowRight /></p>

        </div>
        <div className="col-lg-6">
          <img src={p2} alt="" className='img-fluid'/>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-6">
          <img src={p3} alt="" className='img-fluid'/>
        </div>
        <div className="  col-lg-6 justify-content-center mab">
          <h1>Notre mission</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br /> Iste nulla voluptates, illo similique porro enim <br /> corporis cum omnis doloribus in, blanditiis, laboriosam <br /> a nesciunt. Dolorum perferendis quae ullam numquam illum!</p>
          <br />
          <p className='text-danger'>En savoir plus <AiOutlineArrowRight /></p>

        </div>

      </div>
      <div className="row">
       
        <div className="  col-lg-6 justify-content-center mab">
          <h1>Notre valeur</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br /> Iste nulla voluptates, illo similique porro enim <br /> corporis cum omnis doloribus in, blanditiis, laboriosam <br /> a nesciunt. Dolorum perferendis quae ullam numquam illum!</p>
          <br />
          <p className='text-danger'>En savoir plus <AiOutlineArrowRight /></p>

        </div>
        <div className="col-lg-6">
          <img src={p4} alt="" className='img-fluid'/>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <img src={p5} alt="" className='img-fluid'/>
        </div>
       
      </div>
    </div>
  )
}

export default Propos
