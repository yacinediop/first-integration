import React from 'react'
import poineuf from '../../Components/Assets/6poin.png';
import Card from "react-bootstrap/Card";
import { AiFillStar } from 'react-icons/ai'
import Button from 'react-bootstrap/Button';
import { BsWhatsapp, BsTelephoneFill, BsFillChatLeftTextFill } from     "react-icons/bs";


const Atelier = () => {
    return (
        <div className='container-fluid'>
            <img src={poineuf} alt="" className='d-flex justify-content-center w-100' />
            <div className='container-fluid'>
               <div className="row">
                <div className="col-12">
                    <div className="col-4">
                    <button><img src={poineuf} alt="" className='rounded-circle' /></button>
                <Card.Body className="mt-5">
                    <Card.Title>6 point 9</Card.Title>
                    <Card.Text className=" d-flex gap-1 align-items-baseline mt-4">

                        <p className="fs-6 d-flex">5</p>
                        <AiFillStar className="fs-6 text-warning" />
                        <AiFillStar className="fs-6 text-warning" />
                        <AiFillStar className="fs-6 text-warning" />
                        <AiFillStar className="fs-6 text-warning" />
                        <AiFillStar className="fs-6 text-warning" />
                        <p className="fs-6">1 avis </p>

                    </Card.Text>
                </Card.Body>
                <Button variant="danger" className='me-2 rounded-pill '>PRENDRE RENDEZ-VOUS</Button>


                <Button variant="outline-danger" className='rounded-pill'>PASSEZ UNE COMMANDE</Button>
                    </div>
                    <div className="col-4">
                    <button><img src={poineuf} alt="" className='rounded-circle' /></button>
                <Card.Body className="mt-5">
                    <Card.Title>6 point 9</Card.Title>
                    <Card.Text className=" d-flex gap-1 align-items-baseline mt-4">

                        <p className="fs-6 d-flex">5</p>
                        <AiFillStar className="fs-6 text-warning" />
                        <AiFillStar className="fs-6 text-warning" />
                        <AiFillStar className="fs-6 text-warning" />
                        <AiFillStar className="fs-6 text-warning" />
                        <AiFillStar className="fs-6 text-warning" />
                        <p className="fs-6">1 avis </p>

                    </Card.Text>
                </Card.Body>
                <Button variant="danger" className='me-2 rounded-pill '>PRENDRE RENDEZ-VOUS</Button>


                <Button variant="outline-danger" className='rounded-pill'>PASSEZ UNE COMMANDE</Button>
                    </div>
                    <div className="col-4">
                    <button><img src={poineuf} alt="" className='rounded-circle' /></button>
                <Card.Body className="mt-5">
                    <Card.Title>6 point 9</Card.Title>
                    <Card.Text className=" d-flex gap-1 align-items-baseline mt-4">

                        <p className="fs-6 d-flex">5</p>
                        <AiFillStar className="fs-6 text-warning" />
                        <AiFillStar className="fs-6 text-warning" />
                        <AiFillStar className="fs-6 text-warning" />
                        <AiFillStar className="fs-6 text-warning" />
                        <AiFillStar className="fs-6 text-warning" />
                        <p className="fs-6">1 avis </p>

                    </Card.Text>
                </Card.Body>
                <Button variant="danger" className='me-2 rounded-pill '>PRENDRE RENDEZ-VOUS</Button>


                <Button variant="outline-danger" className='rounded-pill'>PASSEZ UNE COMMANDE</Button>
                    </div>
                </div>
               </div>
            </div>
        </div>
    )
}

export default Atelier
