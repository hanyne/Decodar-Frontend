import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";

import Footer from "./Footer";
import Navbar from "./Navbar";
import { fireStore } from "../auth/Firebase";
import { FaShoppingCart } from "react-icons/fa";
import { toast } from "react-toastify";
import { useCart } from "react-use-cart";

const ProductDetails = () => {

    const [data, setData] = useState({});
    let { productId } = useParams();
    const { addItem } = useCart();

    const fetchProduct = async () => {
        const docRef = doc(fireStore, "produits", productId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            setData(docSnap.data());
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    }

    useEffect(() => {
        fetchProduct();
    }, [])

    const productData = {
        id: data.id,
        name: data.nom,
        price: data.prix,
        description: data.shortDescription,
        image: data.image,
        
    };

    return (
        <>
            <Navbar />
            <Container className="mt-5 mb-5">
                <Row>
                    <Col sm={6}>
                        <img src={data.image} alt={data.name} className="w-100 h-auto" />
                    </Col>

                    <Col sm={6}>
                        <h1 className="text-start">{data.nom}</h1>
                        <h3 className="badge rounded-pill bg-red">{data.category}</h3>
                        <h4 className="fw-normal">{data.shortdescription}</h4>
                        <br />
                        <h5 className="fw-normal">
                            {data.description}
                        </h5>
                        <br />
                        <h5>Prix: {data.prix} DT</h5>
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
                        }} className="btn btn-red mt-2">
                            <FaShoppingCart /> Ajouter au panier
                        </button>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </>
    )
}

export default ProductDetails;