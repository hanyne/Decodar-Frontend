import { collection, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Alert, Container, Row } from "react-bootstrap";
import { FaTag } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useCart } from "react-use-cart";
import { fireStore } from "../auth/Firebase";
import Footer from "./Footer";
import Navbar from "./Navbar";

const ProductCategory = () => {

    let { categoryName } = useParams();
    const { addItem } = useCart();
    const [data, setData] = useState([]);

    const fetchProducts = async () => {
        const q = query(collection(fireStore, "produits"), where("category", "==", categoryName));

        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            const produits = querySnapshot.docs
            .map((doc) => ({ ...doc.data(), id: doc.id }));
            setData(produits);
        });
    }

    useEffect(() => {
        fetchProducts();
    }, [categoryName])

    return (
        <>
            <Navbar />
            <Container className="my-5">
                <h1 className="text-center"><FaTag className="text-red" size={30} /> {categoryName}</h1>
                <Row>
                    {
                        data.length === 0 ? (
                            <>
                                <Alert variant="warning" className="mt-5">
                                    <Alert.Heading>Bienvenue chez  Deco Dar</Alert.Heading>
                                    <p>
                                    Le contenu de cette page est indisponible pour le moment
                                    </p>
                                    <hr />
                                    <p className="mb-0">
                                       Merci pour votre compréhension 
                                    </p>
                                </Alert>
                            </>
                        ) : (
                            data.map((product, index) => {
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
                                                <p className="d-flex justify-content-center">{product.shortdescription}</p>
                                                <p className="d-flex justify-content-center">{product.prix} TND</p>
    
                                                <div class="btn-group mb-3" role="group" aria-label="Basic example">
                                                
                                                    <Link to={`../../product/${product.id}`} className="btn btn-red border-light border-2">Voir plus</Link>
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
                        )
                    }
                </Row>
            </Container>
            <Footer />
        </>
    )
}

export default ProductCategory