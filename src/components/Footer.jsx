import { Link } from "react-router-dom"
import { FaEnvelope, FaFacebook, FaInstagram, FaMapMarkerAlt, FaPhone } from "react-icons/fa"

const Footer = () => {

    return (
        <>
            <footer className="text-center text-lg-start text-white" style={{backgroundColor: '#6E151B'}}>
                <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
                    <div className="me-5 d-none d-lg-block">
                        <h5 className="my-auto">Rejoignez-nous sur les réseaux sociaux</h5>
                    </div>
                    <div>
                        <a href="https://www.facebook.com/decodarDD/" className="me-4 text-reset">
                            <FaFacebook size={30} />
                        </a>
                        <a href="" className="me-4 text-reset">
                            <FaInstagram  size={30}/>
                        </a>
                    </div>
                </section>
                <section className="">
                    <div className="container text-center text-md-start mt-5">
                        <div className="row mt-3">
                            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                                <h6 className="text-uppercase fw-bold mb-4">
                                    Deco Dar
                                </h6>
                                <p>
                                    Entreprise spécialisée de la vente d'électromenager, Equipement Dressing et Plaquard, Evier, Mitigeurs, Rangement de cuisine, Quincaillerie d'ameublement ...
                                </p>
                            </div>
                            <div className="col-md-3 col-lg-3 col-xl-2 mx-auto mb-4">
                                <h6 className="text-uppercase fw-bold mb-4">
                                    Categories
                                </h6>
                                <p>
                                    <Link to="/category/électromenager" className="text-reset text-decoration-none">
                                        Electroménager
                                    </Link>
                                </p>
                                <p>
                                    <Link to="/category/Equipement%20Dressing%20et%20Placard" className="text-reset text-decoration-none">
                                        Equipement Dressing et Placard
                                    </Link>
                                </p>
                                <p>
                                    <Link to="/category/Mitigeur%20Evier%20et%20Accessoires" className="text-reset text-decoration-none">
                                        Mitigeur Evier et Accessoires
                                    </Link>
                                </p>
                                <p>
                                    <Link to="/category/Fixation%20et%20technique%20de%20collage" className="text-reset text-decoration-none">
                                        Fixation et technique de collage
                                    </Link>
                                </p>
                                <p>
                                    <Link to="/category/Fixation%20et%20technique%20de%20collage" className="text-reset text-decoration-none">
                                        Luminaire
                                    </Link>
                                </p>
                                <p>
                                    <Link to="/category/Quincaillerie%20d'amublement" className="text-reset text-decoration-none">
                                        Quincaillerie d'ameublement
                                    </Link>
                                </p>
                                <p>
                                    <Link to="/category/Rangement%20de%20cuisine" className="text-reset text-decoration-none">
                                        Rangement de cuisine
                                    </Link>
                                </p>
                                <p>
                                    <Link to="/category/Vitrage%20et%20cadre%20Allu" className="text-reset text-decoration-none">
                                        Vitrage et cadre Allu
                                    </Link>
                                </p>
                                
                            </div>
                            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                                <h6 className="text-uppercase fw-bold mb-4">
                                    Liens utiles
                                </h6>
                                <p>
                                    <a href="/" className="text-reset text-decoration-none">Accueil</a>
                                </p>
                                <p>
                                    <a href="/about" className="text-reset text-decoration-none">A propos </a>
                                </p>
                                <p>
                                    <a href="/products" className="text-reset text-decoration-none">Nos Produits</a>
                                </p>
                                <p>
                                    <a href="/cart" className="text-reset text-decoration-none">Panier</a>
                                </p>
                            </div>
                            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                                <h6 className="text-uppercase fw-bold mb-4">
                                    Contact
                                </h6>
                                <p><FaMapMarkerAlt className="text-white mb-1 me-2" />MC 27, 8080 Menzel Temime, Tunisie</p>
                                <p>
                                    <FaEnvelope className="text-white mb-1 me-2" />
                                    <a href="mailto:decodarziadia@gmail.com" className="text-white text-decoration-none">decodarziadia@gmail.com</a>
                                </p>
                                <p>
                                    <FaPhone className="text-white mb-1 me-2" /> Manzel Temime :  
                                    <a href="tel:+216 29 148 993" className="text-white text-decoration-none"> +216 29 148 993 </a><a href="tel:+216 29 148 149" className="text-white text-decoration-none">/ +216 29 148 149 </a>
                                </p>
                                <p>
                                    <FaPhone className="text-white mb-1 me-2" /> Kélibia : 
                                    <a href="tel:+216 29 148 096" className="text-white text-decoration-none"> +216 29 148 096</a><a href="tel:+216 29 148 098" className="text-white text-decoration-none"> /+216 29 148 098 </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="text-center p-4" style={{backgroundColor: "rgba(0, 0, 0, 0.05)"}}>
                    © {new Date().getFullYear()} Copyright Deco Dar
                </div>
            </footer>
        </>
    )
}

export default Footer