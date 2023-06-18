import React, { useState, useEffect } from "react"
import { Link, useNavigate } from 'react-router-dom'
import { getDocs, collection, limit } from "firebase/firestore"
import { fireStore } from "../auth/Firebase"

import { Carousel, Container, Row, Col } from 'react-bootstrap'
import { useCart } from "react-use-cart";

import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { FaCheck , FaShippingFast } from "react-icons/fa";
import { RiCustomerService2Line} from "react-icons/ri";
import { GiMoneyStack } from "react-icons/gi"
import { FiSearch } from "react-icons/fi"
import { MdDoubleArrow } from "react-icons/md"
import Cuisine1 from "../assets/images/cuisine-1.jpg"
import Cuisine2 from "../assets/images/cuisine-2.jpg"
import unnamed from "../assets/images/unnamed.jpg"
import { toast } from "react-toastify";

const Home = () => {

    let navigate = useNavigate();
    const { addItem } = useCart();

    const [products, setProducts] = useState([]);
    const [keyword, setKeyword] = useState("");

    document.title = "Decodar - Accueil"

    const fetchProducts = async () => {
        const querySnapshot = await getDocs(collection(fireStore, "produits"), limit(3));
        querySnapshot.forEach((doc) => {
            const produits = querySnapshot.docs
            .map((doc) => ({ ...doc.data(), id: doc.id }));
            setProducts(produits);
        });
    }

    useEffect(() => {
        fetchProducts();
    },[])

    return (
        <React.Fragment>
            <Navbar />
            
            <Carousel>
                <Carousel.Item interval={2000}>
                    <img className="d-block w-100" src="http://www.promodar.com.tn/Fr/upload/1652263630.png"/>
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                    <img className="d-block w-100" src="http://www.promodar.com.tn/Fr/upload/1590584378.jpg"/>
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                    <img className="d-block w-100" src="http://www.promodar.com.tn/Fr/upload/1584083111.jpg"/>
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                    <img className="d-block w-100" src="http://www.promodar.com.tn/Fr/upload/1584083176.jpg"/>
                </Carousel.Item>
                
            </Carousel>
            <Container className="mt-5">

            <div className="col-6 text-center mb-5 mx-auto">
                <div className="input-group">
                    <input value={keyword} onChange={e => setKeyword(e.currentTarget.value)} type="text" className="form-control py-1" placeholder="Rechercher un Article"/>
                    <div className="input-group-append">
                        <button onClick={() => navigate(`search/${keyword}`)} disabled={keyword.length === 0} className="input-group-text bg-red text-primary py-2 mx-1">
                            <FiSearch className="text-white"/>
                        </button>
                    </div>
                </div>
            </div>
                <Row>
                    <Col sm={6} className="my-auto">
                        <h1 className="mb-3">Qui sommes nous</h1>
                        <h5 className="fw-normal text-justify lh-base ">
                            Née d’une profonde réflexion après une mûre expérience dans les secteurs: cuisine, sanitaire, bâtiment et chauffage depuis 2001. Deco Dar est devenue le leader sur le marché tunisien dans le secteur de la distribution des équipements de cuisine et les salle de bains.
                            Revendeurs, Promoteurs immobiliers, Cuisinistes et chantiers privés constituent les réseaux de notre distribution.
                            Ayant Une forte notoriété auprès des professionnels et des particuliers,Deco Dar est la garantie de la qualité et de l'innovation pour le client final.
                        </h5>
                    </Col>
                    <Col sm={6}>
                        <img src={Cuisine1} className="rounded" alt="" srcset="" />
                    </Col>

                    <div className="mt-5"></div>

                    <Col sm={6}>
                        <img src={Cuisine2} className="rounded" alt="" srcset="" />
                    </Col>
                    <Col sm={6} className="my-auto">
                        <h1 className="mb-3">Pourquoi nous choisir</h1>
                        <h5 className="fw-normal text-justify lh-base">
                            Née d’une profonde réflexion après une mûre expérience dans les secteurs: cuisine, sanitaire, bâtiment et chauffage depuis 2001. Deco Dar est devenue le leader sur le marché tunisien dans le secteur de la distribution des équipements de cuisine et les salle de bains.
                            Revendeurs, Promoteurs immobiliers, Cuisinistes et chantiers privés constituent les réseaux de notre distribution.
                            Ayant Une forte notoriété auprès des professionnels et des particuliers,Deco Dar est la garantie de la qualité et de l'innovation pour le client final.
                        </h5> 
                        
                    </Col>  
                    
                    <hr className="mt-5" />

                    <h1 className="my-3">Nos produits</h1>

                    <div className="row h-100">
                        {
                            products.map((product, index) => {
                                const productData = {
                                    id: product.id,
                                    name: product.nom,
                                    price: product.prix,
                                    description: product.shortDescription,
                                    image: product.image,
                                };

                                var bgComponent = {
                                    backgroundImage: 'url('+product.image+')',
                                    width:'100%',
                                    height: '250px',
                                    backgroundRepeat: 'no-repeat',
                                    backgroundSize: 'cover',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }

                                return (
                                    <div className="col-sm-4 h-100 mb-3" key={index}>
                                        <div className="card-header  position-relative overflow-hidden bg-transparent  border p-0">
                                            <div style={bgComponent}></div>
                                            <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                                                <h5 className="text-truncate mb-3">{product.nom}</h5>
                                                <p className="d-flex justify-content-center p-2">{product.shortdescription}</p>
                                                <p className="d-flex justify-content-center">{product.prix} TND</p>

                                                <div className="btn-group mb-3" role="group">
                                                
                                                    <Link to={`product/${product.id}`} className="btn btn-red border-light border-2">Voir plus</Link>
                                                    <button onClick={() => {
                                                        addItem(productData, 1);
                                                        toast.success('Ajouté avec succès', {
                                                            position: "top-center",
                                                            autoClose: 3000,
                                                            hideProgressBar: false,
                                                            closeOnClick: true,
                                                            pauseOnHover: true,
                                                            draggable: true,
                                                            progress: undefined,
                                                        });
                                                    }} className="btn btn-red border-light border-2">Ajouter au panier</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }

                    </div>
                    <Link to={'/products'} className="d-flex text-decoration-none">
                        <button className="btn btn-red btn-block mx-auto"><MdDoubleArrow size={14} /> Voir plus</button>
                    </Link>

                    <hr className="mt-5" />

                    <h1 className="mb-4">Notre partenaires</h1>
                    <Col sm={3}>
                        <img src="https://yvesrouger.ma/wp-content/uploads/2020/04/blum-logo.png" className="w-100" alt="" />
                    </Col>
                    <Col sm={3}>
                        <img src="data:image/png;base64,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" className="w-100  my-auto mx-auto" alt="" srcset="" />
                    </Col>
                    <Col sm={3}>
                        <img src={unnamed} className="w-100 my-auto mx-auto " alt="" />
                    </Col>
                    
                    <Col sm={3}>
                        <img src="https://www.silverlinewheels-tyres.com/img/logo_silverline_lge.png" className="w-100 my-auto mx-auto" alt="" /> 
                    </Col>

                    <hr className="mb-5 mt-5 " />
                    <Col sm={12} className="mx-auto">
                        <div className="row px-xl-5 pb-3">
                            <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                                <div className="d-flex align-items-center justify-content-center border mb-4 rounded-3 px-3 py-2 bg-red">
                                    <FaCheck size={30} className="text-white m-2" />
                                    <h5 className="font-weight-semi-bold text-white my-auto">Qualité Produit</h5>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                                <div className="d-flex align-items-center justify-content-center border mb-4 rounded-3 px-3 py-2 bg-red">
                                    <FaShippingFast size={30} className="text-white m-2" />
                                    <h5 className="font-weight-semi-bold text-white my-auto">Livraison a domicile</h5>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                                <div className="d-flex align-items-center justify-content-center border mb-4 rounded-3 px-3 py-2 bg-red">
                                    <GiMoneyStack size={30} className="text-white m-2" />
                                    <h5 className="font-weight-semi-bold text-white my-auto">Prix Raisonnable</h5>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                                <div className="d-flex align-items-center justify-content-center border mb-4 rounded-3 px-3 py-2 bg-red">
                                    <RiCustomerService2Line size={30} className="text-white m-2" />
                                    <h5 className="font-weight-semi-bold text-white my-auto">Service Client 24/7</h5>
                                </div>
                            </div>
                        
                        </div>
                    </Col>
                
                </Row>
            </Container>
            <Footer />
        </React.Fragment>
    )
}

export default Home