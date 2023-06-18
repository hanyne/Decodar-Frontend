import { Link } from "react-router-dom"
import { FaHome, FaInfoCircle, FaShoppingCart, FaBoxOpen } from "react-icons/fa"

import Logo from "../assets/images/logo.png"
import { useCart } from "react-use-cart";

const Navbar = () => {

    const { totalItems } = useCart();

    return (
        <div> 
            <nav className="navbar navbar-expand-lg static-top" style={{backgroundColor: "#6E151B"}}>
                <div className="container">
                    <Link to="/">
                        <span className="navbar-brand">
                            <img src={Logo} alt="..." height="40" />
                        </span>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <Link to="/" className="nav-link active text-white text-decoration-none text-bold">
                                    <FaHome className="mb-1" /> Acceuil
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/about" className="nav-link active text-white text-decoration-none text-bold"> 
                                    <FaInfoCircle className="mb-1" size={14} /> A propos
                                </Link>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle text-white text-decoration-none text-bold" href="/products" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <FaBoxOpen className="mb-1" size={15} /> Nos produits
                                </a>
                                <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                                    <li>
                                        <Link to="../../category/électromenager" className="dropdown-item text-decoration-none">
                                            Electroménager

                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="../../category/Equipement Dressing et Placard" className="dropdown-item text-decoration-none">
                                            Equipement Dressing et Placard
                                        </Link>
                                    </li>

                                    <li>
                                        <Link to="../../category/Mitigeur Evier et Accessoires" className="dropdown-item text-decoration-none">
                                            Mitigeur Evier et Accessoires
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="../../category/Fixation et technique de collage" className="dropdown-item text-decoration-none">
                                            Fixation et technique de collage
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="../../category/Luminaire" className="dropdown-item text-decoration-none">
                                            Luminaire
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="../../category/Quincaillerie d'amublement" className="dropdown-item">
                                            Quincaillerie d'amublement
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="../../category/Rangement de cuisine" className="dropdown-item">
                                            Rangement de cuisine 
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="../../category/Vitrage et cadre Allu" className="dropdown-item">
                                            Vitrage et cadre Allu
                                        </Link>
                                    </li>
                                
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link to="/Cart" className="nav-link text-white text-decoration-none text-bold"><FaShoppingCart className="mb-1" size={14} /> Panier <span className="badge rounded-pill bg-light text-black">{totalItems}</span></Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar