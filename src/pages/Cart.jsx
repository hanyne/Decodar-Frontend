import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { Container } from "react-bootstrap"
import { useCart } from 'react-use-cart';
import { FaCartPlus, FaMinus, FaPlus, FaTimes, FaTrashAlt } from 'react-icons/fa';
import { useRef } from "react";
import { toast } from "react-toastify";
import { useState } from "react";
import generateId from "../lib/generateId";
import { doc, setDoc } from "firebase/firestore";
import { fireStore } from "../auth/Firebase";
import { Link, useNavigate } from 'react-router-dom'

const Cart = () => {

    const {
        isEmpty,
        items,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart,
    } = useCart();

    const firstNameRef = useRef("");
    const lastNameRef = useRef("");
    const emailRef = useRef("");
    const phoneRef = useRef("");
    const addressRef = useRef("");
    const zipCodeRef = useRef("");
    const informationsRef = useRef("");

    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const submitOrder = async (e) => {

        e.preventDefault();
        toast.info('Veuiller attendre', {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });

        setLoading(true);

        if ( firstNameRef.current.value || lastNameRef.current.value || emailRef.current.value || phoneRef.current.value || addressRef.current.value || zipCodeRef.current.value) {
            
            var OrderID = generateId(10);
            var date = new Date().toLocaleString();

            await setDoc(doc(fireStore, "orders", OrderID), {
                orderID: OrderID,
                firstname: firstNameRef.current.value,
                lastname: lastNameRef.current.value,
                email: emailRef.current.value,
                phone: phoneRef.current.value,
                address: addressRef.current.value,
                zipcode: zipCodeRef.current.value,
                informations: informationsRef.current.value,
                date: date,
                products: items,
                total: cartTotal,
            });

            setLoading(false);
            toast.success('Votre commande a été soumise avec succès. Nous vous contacterons dès que possible.', {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            emptyCart();
            navigate("/");
        } else {
            setLoading(false);
            toast.succes('Veuiller remplir tous les champs', {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    }

    return (

    <>
        <Navbar />
        <Container className="mt-5 mb-5">
                {isEmpty ? (
                    <>
                        <h2 className="mt-5 text-center">Votre panier est vide</h2>
                        <img src="https://www.pngall.com/wp-content/uploads/5/Shopping-Cart-PNG-Image-HD.png" className="w-25 d-block mx-auto" />
                        
                        <Link to={'../products'} className="d-flex text-decoration-none">
                            <button className="btn btn-red mt-3 mx-auto text-center"><FaCartPlus className="mb-1" /> Commencer à magasiner</button>
                        </Link>
                        <br/>
                    </>
                ):(
                    <>
                        <h1 className="text-start mb-5">Panier</h1>
                        <table className="table table-hover mx-auto">
                            <thead>
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">Image</th>
                                    <th scope="col">Produits</th>
                                    <th scope="col">Prix</th>
                                    <th scope="col">Quantité</th>
                                    <th scope="col">Prix total</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    items.map((product, index) => {                               
                                        return (
                                            <tr key={index}>
                                                <td className="fw-bold">#{index+1}</td>
                                                <td width="15%"><img src={product.image} className="w-100" /></td>
                                                <td>{product.name}</td>
                                                <td>{product.price} DT</td>
                                                <td>{product.quantity}</td>
                                                <td>{product.quantity*product.price} DT</td>
                                                <td>
                                                    <button onClick={() => {updateItemQuantity(product.id, product.quantity+1)}} className="btn btn-outline-red mr-1"><FaPlus /></button>
                                                    <button onClick={() => {updateItemQuantity(product.id, product.quantity-1)}} className="btn btn-outline-red mr-1"><FaMinus /></button>
                                                    <button onClick={() => {removeItem(product.id)}} className="btn btn-outline-red"><FaTimes /></button>
                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td>{cartTotal + " DT"}</td>
                                    <td><button onClick={() => {emptyCart()}} className="btn btn-red"><FaTrashAlt /></button></td>
                                </tr>
                            </tbody>
                        </table>

                        <form onSubmit={submitOrder} className="form-group row">
                            <div className="col-sm-6 mb-4">
                                <p className="mb-2 fw-bold">Nom <span className="text-red">*</span></p> 
                                <input type="text" ref={firstNameRef} name="firstname" className="form-control" placeholder="Enter votre Nom ici" required />
                            </div>

                            <div className="col-sm-6 mb-4">
                                <p className="mb-2 fw-bold">Prénom <span className="text-red">*</span></p> 
                                <input type="text" ref={lastNameRef} name="lastname" className="form-control" placeholder="Enter votre Prénom ici" required />
                            </div>

                            <div className="col-sm-6 mb-4">
                                <p className="mb-2 fw-bold">Email <span className="text-red">*</span></p> 
                                <input type="email" ref={emailRef} name="email" className="form-control" placeholder="Enter votre email ici" required />
                            </div>

                            <div className="col-sm-6 mb-4">
                                <p className="mb-2 fw-bold">Téléphone <span className="text-red">*</span></p> 
                                <input type="tel" ref={phoneRef} maxLength="8" name="phone" className="form-control" placeholder="Enter votre Téléphone ici" required />
                            </div>

                            <div className="col-sm-6 mb-4">
                                <p className="mb-2 fw-bold">Adresse <span className="text-red">*</span></p> 
                                <input type="text" ref={addressRef} className="form-control" placeholder="Enter votre adresse ici" name="address" required />
                            </div>

                            <div className="col-sm-6 mb-4">
                                <p className="mb-2 fw-bold">Code postal <span className="text-red">*</span></p> 
                                <input type="text" ref={zipCodeRef} className="form-control" placeholder="Enter votre code postal ici" name="zip-code" required />
                            </div>
                            <div className="col-sm-12 mb-4">
                                <p className="mb-2 fw-bold">Informations complémentaires</p> 
                                <textarea ref={informationsRef} name="" id="" cols={30} rows={10} placeholder="Entrez ici quelques informations utiles qui peuvent nous aider à préparer votre commande" className="form-control w-100" />
                                <button disabled={loading} type="submit" className="btn btn-red w-100 mt-3">Commander</button>
                            </div>
                        </form>
                    </>
                )}
            </Container>
        <Footer />
    </>
    )
}

export default Cart