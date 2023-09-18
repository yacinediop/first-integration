import React from 'react'
import {
    MDBFooter,
    MDBContainer,
    MDBCol,
    MDBRow,
} from 'mdb-react-ui-kit';
import logo from '../Assets/logow.png';
import { BsInstagram, BsTelephoneFill, BsFillChatLeftTextFill } from "react-icons/bs";
import {CiBasketball, CiTwitter} from 'react-icons/ci';
import {AiFillYoutube} from 'react-icons/ai'
const Footer = () => {
    return (
        <MDBFooter bgColor='danger' className='text-white text-center text-lg-left mt-5'>
            <MDBContainer className='p-4 mt-5'>
                <MDBRow>
                    <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
                        <img src={logo} alt="" />

                        <p className='mt-5'>
                            a propos de nous <br /> <br /> Contact
                        </p>
                        <ul className=" list-unstyled d-flex gap-1 justify-content-center">
                            <li>
                                <button className="btn btn-light  rounded-circle ">
                                    <BsInstagram />
                                </button>
                            </li>
                            <li>
                                <button className="btn btn-light  rounded-circle">
                                    <CiBasketball />
                                </button>
                            </li>
                            <li>
                                <button className="btn btn-light  rounded-circle">
                                    <CiTwitter />
                                </button>
                            </li>
                          
                            <li>
                                <button className="btn btn-light  rounded-circle">
                                    <AiFillYoutube />
                                </button>
                            </li>
                            
                        </ul>
                        <p className='list-unstyled mb-0'>©Tayeur gestion 2023.
                        </p><br />

                    </MDBCol>

                    <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
                        <h5 className='text-uppercase'>Info</h5>
                        <p className='list-unstyled mb-0'>Acceuil</p><br />
                        <p className='list-unstyled mb-0'>Ateliers</p><br />
                        <p className='list-unstyled mb-0'>Produits</p><br />
                        <p className='list-unstyled mb-0'>A propos de nous</p><br />
                        <p className='list-unstyled mb-0'>Contact</p><br />
                        <p className='list-unstyled mb-0'>Privacy</p><br />
                        <p className='list-unstyled mb-0'>Terms & conditions</p><br />



                    </MDBCol>

                    <MDBCol lg='3' md='6' className='mb-md-0'>
                        <h5 className='text-uppercase mb-0'>Adresse</h5><br />
                        <p className='list-unstyled mb-0'>Hlm Grand Yoff</p>
                        <p className='list-unstyled mb-0'>Dakar</p>
                        <p className='list-unstyled mb-0'>Senegal</p>


                    </MDBCol>
                    <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
                        <h5 className='text-uppercase'>Aide</h5>
                        <p className='list-unstyled mb-0'>Email:tayeurgestion@gmail.com</p><br />
                        <p className='list-unstyled mb-0'>Clients support:support@lenslove.com</p><br />
                        <p className='list-unstyled mb-0'>+221 77 777 77 77</p><br />



                    </MDBCol>
                </MDBRow>
            </MDBContainer>


        </MDBFooter>
    )
}

export default Footer
