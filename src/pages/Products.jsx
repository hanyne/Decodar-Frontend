import { fireStore } from "../auth/Firebase"
import { getDocs, collection } from "firebase/firestore"
import React, { useState, useEffect, Fragment } from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer";
import {Link} from 'react-router-dom'
import { toast } from "react-toastify";
import { useCart } from "react-use-cart";


const Products = () => {

    const { addItem } = useCart();
    const [products, setProducts] = useState([]);
    const elemPrefix = "test";
    const getId = (index) => `${elemPrefix}${index}`;

    const getItems = () =>
    Array(20)
        .fill(0)
        .map((_, ind) => ({ id: getId(ind) }));

    const [items] = useState(getItems);

    document.title = "Decodar - Accueil"

    const fetchProducts = async () => {
        const querySnapshot = await getDocs(collection(fireStore, "produits"));
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
        <>
        <Navbar />
            <header className="bg-black py-5">
                <div className="container px-4 px-lg-5 my-5">
                    <div className="text-center text-white">
                        <h1 className="display-4 fw-bolder">Decodar-Produits</h1>
                        <p className="lead fw-normal text-white-50 mb-0"> Des merveilleuses solutions pour votre Maison</p>
                    </div>
                </div>
            </header>
            <section className="py-5 mx-5">
                <div className="container px-4 px-lg-5 mt-5 row">
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
                                            <p className="d-flex justify-content-center">{product.shortdescription}</p>
                                            <p className="d-flex justify-content-center">{product.prix} TND</p>

                                            <div class="btn-group mb-3" role="group" aria-label="Basic example">
                                            
                                                <Link to={`../product/${product.id}`} className="btn btn-red border-light border-2">Voir plus</Link>
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
            </section>

            <Footer />

        </>

    )
}


export default Products