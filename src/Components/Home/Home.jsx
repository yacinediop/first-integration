import React from 'react'
import './Home.css'
import poineuf from '../../Components/Assets/6poin.png';
import heric from '../../Components/Assets/couture.png';
import Container from "react-bootstrap/Container";
import { AiFillStar } from 'react-icons/ai'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { BsWhatsapp, BsTelephoneFill, BsFillChatLeftTextFill } from "react-icons/bs";
import Card from "react-bootstrap/Card";


const Home = () => {
    return (
        <>
            <div id="Banner">
                <div className="Top-banner vh-100">
                    <div className="Top-banner-content vh-100 text-center text-light position-relative">
                        <div className="mt-5 position-absolute top-50 start-50 translate-middle">
                            <h3>Découvrez  prochaine session de créativité.</h3>
                            <p>Lorem ipsum dolovotrer sit, amet consectetur adipisicing elit.</p>
                            <div className="d-flex justify-content-center align-items-center">
                                <div>
                                    <select class="form-select rounded-0"
                                        aria-label="Default select example">
                                        <option selected>Categories</option>
                                        <option value="1">Taille basse</option>
                                        <option value="2">Robe</option>
                                        <option value="3">Grand boubou femme</option>
                                        <option value="4">Grand boubou homme</option>
                                        <option value="5">Costume africain</option>
                                        <option value="6">Costume</option>
                                    </select>
                                </div>
                                <div>
                                    <button class="btn btn-danger rounded-0 px-5">Recherche</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Bottom-banner text-light">
                    <div className=" Bottom-banner-content">
                        <div className="row">
                            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 p-5">
                                <h1>Vous êtes à la recherche des meilleurs couturiers ?</h1>
                                <h6>Passez à la vitesse supérieure avec Tayeur Gestion</h6>
                                <p>Découvrez comment nous pouvons vous aider à trouver
                                    les meilleurs tailleurs sur la plateforme.</p>
                                <br />
                                <button class="btn btn-danger rounded-pill w-50 px-5">En savoir plus</button>

                            </div>

                        </div>
                    </div>
                </div>

                <div className="container bg">

                    <Container>

                        <h3 className="mt-4 touts">tous les items</h3>

                        <p className="atelier">

                            Nos Ateliers de <span> Couture</span>

                        </p>

                        <Row className="">



                            <Col className="border bg-col m-1 " sm={3}>

                                <div className="cont-col">

                                    <div className="souss ">Filtre</div>
                                    <hr />
                                    <h5 className="p-2 m-2 filtre">filtre par</h5>

                                    <div className="cont-sec ">

                                        <h6 className="p-2 m-2 catego">Categorie</h6>

                                        <div className="con-check d-flex justify-content-between mx-3 def-mar "  >

                                            <div className="check- ">

                                                <input

                                                    class="form-check-input"

                                                    type="checkbox"

                                                    value=""

                                                    id="flexCheckDefault"

                                                />

                                                <label class="form-check-label mx-2 fontlab " for="flexCheckDefault">

                                                    Taille basse

                                                </label>

                                            </div>

                                            <div className="cont-41 fontlab">150</div>

                                        </div>

                                        <div className="con-check d-flex justify-content-between mx-3 def-mar "  >

                                            <div className="check- ">

                                                <input

                                                    class="form-check-input"

                                                    type="checkbox"

                                                    value=""

                                                    id="flexCheckDefault"

                                                />

                                                <label class="form-check-label mx-2 fontlab" for="flexCheckDefault">

                                                    Robe

                                                </label>

                                            </div>

                                            <div className="cont-41 fontlab">74</div>

                                        </div>

                                        <div className="con-check d-flex justify-content-between mx-3 def-mar "  >

                                            <div className="check- ">

                                                <input

                                                    class="form-check-input"

                                                    type="checkbox"

                                                    value=""

                                                    id="flexCheckDefault"

                                                />

                                                <label class="form-check-label mx-2 fontlab" for="flexCheckDefault">

                                                    Grand Boubou Femme

                                                </label>

                                            </div>

                                            <div className="cont-41 fontlab">54</div>

                                        </div>

                                        <div className="con-check d-flex justify-content-between mx-3 def-mar fontlab"    >

                                            <div className="check- ">

                                                <input

                                                    class="form-check-input"

                                                    type="checkbox"

                                                    value=""

                                                    id="flexCheckDefault"

                                                />

                                                <label class="form-check-label mx-2 fontlab" for="flexCheckDefault">

                                                    Grand Boubou Homme

                                                </label>

                                            </div>

                                            <div className="cont-41 fontlab">454</div>

                                        </div>

                                        <div className="con-check d-flex justify-content-between mx-3 def-mar"  >

                                            <div className="check- ">

                                                <input

                                                    class="form-check-input"

                                                    type="checkbox"

                                                    value=""

                                                    id="flexCheckDefault"

                                                />

                                                <label class="form-check-label mx-2 fontlab" for="flexCheckDefault">

                                                    Costume Africain

                                                </label>

                                            </div>

                                            <div className="cont-41 fontlab">104</div>

                                        </div>

                                        <div className="con-check d-flex justify-content-between mx-3 def-mar"  >

                                            <div className="check- ">

                                                <input

                                                    class="form-check-input"

                                                    type="checkbox"

                                                    value=""

                                                    id="flexCheckDefault"

                                                />

                                                <label class="form-check-label mx-2 fontlab" for="flexCheckDefault">

                                                    Comstume

                                                </label>
                                                <hr />
                                            </div>

                                            <div className="cont-41 fontlab">14</div>

                                        </div>

                                    </div>

                                    <div className="cont-sec ">

                                        <h6 className="p-2 m-2 catego">Ateliers</h6>

                                        <div className="con-check d-flex justify-content-between mx-3 def-mar "  >

                                            <div className="check- ">

                                                <input

                                                    class="form-check-input"

                                                    type="checkbox"

                                                    value=""

                                                    id="flexCheckDefault"

                                                />

                                                <label class="form-check-label mx-2 fontlab " for="flexCheckDefault">

                                                    6 Point 9

                                                </label>

                                            </div>

                                            <div className="cont-41 fontlab">54</div>

                                        </div>

                                        <div className="con-check d-flex justify-content-between mx-3 def-mar "  >

                                            <div className="check- ">

                                                <input

                                                    class="form-check-input"

                                                    type="checkbox"

                                                    value=""

                                                    id="flexCheckDefault"

                                                />

                                                <label class="form-check-label mx-2 fontlab" for="flexCheckDefault">

                                                    Falou Gallass Couture

                                                </label>

                                            </div>

                                            <div className="cont-41 fontlab">74</div>

                                        </div>

                                        <div className="con-check d-flex justify-content-between mx-3 def-mar "  >

                                            <div className="check- ">

                                                <input

                                                    class="form-check-input"

                                                    type="checkbox"

                                                    value=""

                                                    id="flexCheckDefault"

                                                />

                                                <label class="form-check-label mx-2 fontlab" for="flexCheckDefault">

                                                    iss couture

                                                </label>

                                            </div>

                                            <div className="cont-41 fontlab">54</div>

                                        </div>

                                        <div className="con-check d-flex justify-content-between mx-3 def-mar fontlab"    >

                                            <div className="check- ">

                                                <input

                                                    class="form-check-input"

                                                    type="checkbox"

                                                    value=""

                                                    id="flexCheckDefault"

                                                />

                                                <label class="form-check-label mx-2 fontlab" for="flexCheckDefault">

                                                    Heritage couture

                                                </label>

                                            </div>

                                            <div className="cont-41 fontlab">54</div>

                                        </div>

                                        <div className="con-check d-flex justify-content-between mx-3 def-mar"  >

                                            <div className="check- ">

                                                <input

                                                    class="form-check-input"

                                                    type="checkbox"

                                                    value=""

                                                    id="flexCheckDefault"

                                                />

                                                <label class="form-check-label mx-2 fontlab" for="flexCheckDefault">

                                                    Djolof Couture

                                                </label>

                                            </div>

                                            <div className="cont-41 fontlab">14</div>

                                        </div>

                                        <div className="con-check d-flex justify-content-between mx-3 def-mar"  >

                                            <div className="check- ">

                                                <input

                                                    class="form-check-input"

                                                    type="checkbox"

                                                    value=""

                                                    id="flexCheckDefault"

                                                />

                                                <label class="form-check-label mx-2 fontlab" for="flexCheckDefault">

                                                    Bamba couture

                                                </label>

                                            </div>

                                            <div className="cont-41 fontlab">64</div>

                                        </div>

                                        <div className="con-check d-flex justify-content-between mx-3 def-mar"  >

                                            <div className="check- ">

                                                <input

                                                    class="form-check-input"

                                                    type="checkbox"

                                                    value=""

                                                    id="flexCheckDefault"

                                                />

                                                <label class="form-check-label mx-2 fontlab" for="flexCheckDefault">

                                                    Made bouaba

                                                </label>

                                            </div>

                                            <div className="cont-41 fontlab">24</div>

                                        </div>

                                        <div className="con-check d-flex justify-content-between mx-3 def-mar"  >

                                            <div className="check- ">

                                                <input

                                                    class="form-check-input"

                                                    type="checkbox"

                                                    value=""

                                                    id="flexCheckDefault"

                                                />

                                                <label class="form-check-label mx-2 fontlab" for="flexCheckDefault">

                                                    Senegal Couture

                                                </label>

                                            </div>

                                            <div className="cont-41 fontlab">64</div>

                                        </div>

                                    </div>

                                </div>

                            </Col>

                            <Col className=" mt-5" sm={8}>

                                <Row className="g-5 mb-2">

                                    <Col sm='4'>

                                        <Card style={{ width: '18rem' }}>
                                            <Card.Img variant="top" className="mt-5" src={poineuf} />
                                            <Card.Body className="mt-5">
                                                <Card.Title>6 point 9</Card.Title>
                                                <Card.Text className=" d-flex gap-1 align-items-baseline mt-4">

                                                    <p className="fs-6">5</p>
                                                    <AiFillStar className="fs-6 text-warning" />
                                                    <AiFillStar className="fs-6 text-warning" />
                                                    <AiFillStar className="fs-6 text-warning" />
                                                    <AiFillStar className="fs-6 text-warning" />
                                                    <AiFillStar className="fs-6 text-warning" />
                                                    <p className="fs-6">1 </p>
                                                    <ul className=" list-unstyled d-flex gap-1">
                                                        <li>
                                                            <button className="btn btn-success text-lightpb-2 rounded-circle">
                                                                <BsWhatsapp />
                                                            </button>
                                                        </li>
                                                        <li>
                                                            <button className="btn btn-danger text-lightpb-2 rounded-circle">
                                                                <BsTelephoneFill />
                                                            </button>
                                                        </li>
                                                        <li>
                                                            <button className="btn btn-danger text-lightpb-2 rounded-circle">
                                                                <BsFillChatLeftTextFill />
                                                            </button>
                                                        </li>
                                                    </ul>
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>


                                    </Col>

                                    <Col sm='4'>

                                        <Card style={{ width: '18rem' }}>
                                            <Card.Img variant="top" className="mt-5" src={heric} />
                                            <Card.Body className="mt-5">
                                                <Card.Title>Heritage Couture</Card.Title>
                                                <Card.Text className=" d-flex gap-1 align-items-baseline mt-4">

                                                    <p className="fs-6">5</p>
                                                    <AiFillStar className="fs-6 text-warning" />
                                                    <AiFillStar className="fs-6 text-warning" />
                                                    <AiFillStar className="fs-6 text-warning" />
                                                    <AiFillStar className="fs-6 text-warning" />
                                                    <AiFillStar className="fs-6 text-warning" />
                                                    <p className="fs-6">1 </p>
                                                    <ul className=" list-unstyled d-flex gap-1">
                                                        <li>
                                                            <button className="btn btn-success text-lightpb-2 rounded-circle">
                                                                <BsWhatsapp />
                                                            </button>
                                                        </li>
                                                        <li>
                                                            <button className="btn btn-danger text-lightpb-2 rounded-circle">
                                                                <BsTelephoneFill />
                                                            </button>
                                                        </li>
                                                        <li>
                                                            <button className="btn btn-danger text-lightpb-2 rounded-circle">
                                                                <BsFillChatLeftTextFill />
                                                            </button>
                                                        </li>
                                                    </ul>
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>


                                    </Col>

                                    <Col sm='4'>

                                        <Card style={{ width: '18rem' }}>
                                            <Card.Img variant="top" className="mt-5" src={poineuf} />
                                            <Card.Body className="mt-5">
                                                <Card.Title>6 point 9</Card.Title>
                                                <Card.Text className=" d-flex gap-1 align-items-baseline mt-4">

                                                    <p className="fs-6">5</p>
                                                    <AiFillStar className="fs-6 text-warning" />
                                                    <AiFillStar className="fs-6 text-warning" />
                                                    <AiFillStar className="fs-6 text-warning" />
                                                    <AiFillStar className="fs-6 text-warning" />
                                                    <AiFillStar className="fs-6 text-warning" />
                                                    <p className="fs-6">1 </p>
                                                    <ul className=" list-unstyled d-flex gap-1">
                                                        <li>
                                                            <button className="btn btn-success text-lightpb-2 rounded-circle">
                                                                <BsWhatsapp />
                                                            </button>
                                                        </li>
                                                        <li>
                                                            <button className="btn btn-danger text-lightpb-2 rounded-circle">
                                                                <BsTelephoneFill />
                                                            </button>
                                                        </li>
                                                        <li>
                                                            <button className="btn btn-danger text-lightpb-2 rounded-circle">
                                                                <BsFillChatLeftTextFill />
                                                            </button>
                                                        </li>
                                                    </ul>
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>


                                    </Col>


                                </Row>

                                <Row className="g-5 mb-2">

                                    <Col sm='4'>

                                        <Card style={{ width: '18rem' }}>
                                            <Card.Img variant="top" className="mt-5" src={poineuf} />
                                            <Card.Body className="mt-5">
                                                <Card.Title>6 point 9</Card.Title>
                                                <Card.Text className=" d-flex gap-1 align-items-baseline mt-4">

                                                    <p className="fs-6">5</p>
                                                    <AiFillStar className="fs-6 text-warning" />
                                                    <AiFillStar className="fs-6 text-warning" />
                                                    <AiFillStar className="fs-6 text-warning" />
                                                    <AiFillStar className="fs-6 text-warning" />
                                                    <AiFillStar className="fs-6 text-warning" />
                                                    <p className="fs-6">1 </p>
                                                    <ul className=" list-unstyled d-flex gap-1">
                                                        <li>
                                                            <button className="btn btn-success text-lightpb-2 rounded-circle">
                                                                <BsWhatsapp />
                                                            </button>
                                                        </li>
                                                        <li>
                                                            <button className="btn btn-danger text-lightpb-2 rounded-circle">
                                                                <BsTelephoneFill />
                                                            </button>
                                                        </li>
                                                        <li>
                                                            <button className="btn btn-danger text-lightpb-2 rounded-circle">
                                                                <BsFillChatLeftTextFill />
                                                            </button>
                                                        </li>
                                                    </ul>
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>


                                    </Col>

                                    <Col sm='4'>

                                        <Card style={{ width: '18rem' }}>
                                            <Card.Img variant="top" className="mt-5" src={heric} />
                                            <Card.Body className="mt-5">
                                                <Card.Title>Heritage Couture</Card.Title>
                                                <Card.Text className=" d-flex gap-1 align-items-baseline mt-4">

                                                    <p className="fs-6">5</p>
                                                    <AiFillStar className="fs-6 text-warning" />
                                                    <AiFillStar className="fs-6 text-warning" />
                                                    <AiFillStar className="fs-6 text-warning" />
                                                    <AiFillStar className="fs-6 text-warning" />
                                                    <AiFillStar className="fs-6 text-warning" />
                                                    <p className="fs-6">1 </p>
                                                    <ul className=" list-unstyled d-flex gap-1">
                                                        <li>
                                                            <button className="btn btn-success text-lightpb-2 rounded-circle">
                                                                <BsWhatsapp />
                                                            </button>
                                                        </li>
                                                        <li>
                                                            <button className="btn btn-danger text-lightpb-2 rounded-circle">
                                                                <BsTelephoneFill />
                                                            </button>
                                                        </li>
                                                        <li>
                                                            <button className="btn btn-danger text-lightpb-2 rounded-circle">
                                                                <BsFillChatLeftTextFill />
                                                            </button>
                                                        </li>
                                                    </ul>
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>


                                    </Col>

                                    <Col sm='4'>

                                        <Card style={{ width: '18rem' }}>
                                            <Card.Img variant="top" className="mt-5" src={poineuf} />
                                            <Card.Body className="mt-5">
                                                <Card.Title>6 point 9</Card.Title>
                                                <Card.Text className=" d-flex gap-1 align-items-baseline mt-4">

                                                    <p className="fs-6">5</p>
                                                    <AiFillStar className="fs-6 text-warning" />
                                                    <AiFillStar className="fs-6 text-warning" />
                                                    <AiFillStar className="fs-6 text-warning" />
                                                    <AiFillStar className="fs-6 text-warning" />
                                                    <AiFillStar className="fs-6 text-warning" />
                                                    <p className="fs-6">1 </p>
                                                    <ul className=" list-unstyled d-flex gap-1">
                                                        <li>
                                                            <button className="btn btn-success text-lightpb-2 rounded-circle">
                                                                <BsWhatsapp />
                                                            </button>
                                                        </li>
                                                        <li>
                                                            <button className="btn btn-danger text-lightpb-2 rounded-circle">
                                                                <BsTelephoneFill />
                                                            </button>
                                                        </li>
                                                        <li>
                                                            <button className="btn btn-danger text-lightpb-2 rounded-circle">
                                                                <BsFillChatLeftTextFill />
                                                            </button>
                                                        </li>
                                                    </ul>
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>


                                    </Col>


                                </Row>

                                <Row className="g-5 mb-2">

                                    <Col sm='4'>

                                        <Card style={{ width: '18rem' }}>
                                            <Card.Img variant="top" className="mt-5" src={poineuf} />
                                            <Card.Body className="mt-5">
                                                <Card.Title>6 point 9</Card.Title>
                                                <Card.Text className=" d-flex gap-1 align-items-baseline mt-4">

                                                    <p className="fs-6">5</p>
                                                    <AiFillStar className="fs-6 text-warning" />
                                                    <AiFillStar className="fs-6 text-warning" />
                                                    <AiFillStar className="fs-6 text-warning" />
                                                    <AiFillStar className="fs-6 text-warning" />
                                                    <AiFillStar className="fs-6 text-warning" />
                                                    <p className="fs-6">1 </p>
                                                    <ul className=" list-unstyled d-flex gap-1">
                                                        <li>
                                                            <button className="btn btn-success text-lightpb-2 rounded-circle">
                                                                <BsWhatsapp />
                                                            </button>
                                                        </li>
                                                        <li>
                                                            <button className="btn btn-danger text-lightpb-2 rounded-circle">
                                                                <BsTelephoneFill />
                                                            </button>
                                                        </li>
                                                        <li>
                                                            <button className="btn btn-danger text-lightpb-2 rounded-circle">
                                                                <BsFillChatLeftTextFill />
                                                            </button>
                                                        </li>
                                                    </ul>
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>


                                    </Col>

                                    <Col sm='4'>

                                        <Card style={{ width: '18rem' }}>
                                            <Card.Img variant="top" className="mt-5" src={heric} />
                                            <Card.Body className="mt-5">
                                                <Card.Title>Heritage Couture</Card.Title>
                                                <Card.Text className=" d-flex gap-1 align-items-baseline mt-4">

                                                    <p className="fs-6">5</p>
                                                    <AiFillStar className="fs-6 text-warning" />
                                                    <AiFillStar className="fs-6 text-warning" />
                                                    <AiFillStar className="fs-6 text-warning" />
                                                    <AiFillStar className="fs-6 text-warning" />
                                                    <AiFillStar className="fs-6 text-warning" />
                                                    <p className="fs-6">1 </p>
                                                    <ul className=" list-unstyled d-flex gap-1">
                                                        <li>
                                                            <button className="btn btn-success text-lightpb-2 rounded-circle">
                                                                <BsWhatsapp />
                                                            </button>
                                                        </li>
                                                        <li>
                                                            <button className="btn btn-danger text-lightpb-2 rounded-circle">
                                                                <BsTelephoneFill />
                                                            </button>
                                                        </li>
                                                        <li>
                                                            <button className="btn btn-danger text-lightpb-2 rounded-circle">
                                                                <BsFillChatLeftTextFill />
                                                            </button>
                                                        </li>
                                                    </ul>
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>


                                    </Col>

                                    <Col sm='4'>

                                        <Card style={{ width: '18rem' }}>
                                            <Card.Img variant="top" className="mt-5" src={poineuf} />
                                            <Card.Body className="mt-5">
                                                <Card.Title>6 point 9</Card.Title>
                                                <Card.Text className=" d-flex gap-1 align-items-baseline mt-4">

                                                    <p className="fs-6">5</p>
                                                    <AiFillStar className="fs-6 text-warning" />
                                                    <AiFillStar className="fs-6 text-warning" />
                                                    <AiFillStar className="fs-6 text-warning" />
                                                    <AiFillStar className="fs-6 text-warning" />
                                                    <AiFillStar className="fs-6 text-warning" />
                                                    <p className="fs-6">1 </p>
                                                    <ul className=" list-unstyled d-flex gap-1">
                                                        <li>
                                                            <button className="btn btn-success text-lightpb-2 rounded-circle">
                                                                <BsWhatsapp />
                                                            </button>
                                                        </li>
                                                        <li>
                                                            <button className="btn btn-danger text-lightpb-2 rounded-circle">
                                                                <BsTelephoneFill />
                                                            </button>
                                                        </li>
                                                        <li>
                                                            <button className="btn btn-danger text-lightpb-2 rounded-circle">
                                                                <BsFillChatLeftTextFill />
                                                            </button>
                                                        </li>
                                                    </ul>
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>


                                    </Col>


                                </Row>






                            </Col>

                        </Row>

                    </Container>

                </div>

            </div>


        </>
    )
}

export default Home
