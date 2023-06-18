import React, { useState, Fragment } from "react"

import { doc, setDoc } from "firebase/firestore"; 

import { Container, Row, Col } from "react-bootstrap"
import { toast } from "react-toastify"

import { RiSendPlaneFill } from "react-icons/ri"
import { BsShopWindow } from "react-icons/bs"

import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { fireStore } from "../auth/Firebase";
import generateId from "../lib/generateId";

const About = () => {

    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState(""); 
    const [message, setMessage] = useState("");

    const sendMessage = async (e) => {
        e.preventDefault();
        toast.info('Veuillez attendre', {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
        try {

            let id = generateId(15);
            console.log(id)
            await setDoc(doc(fireStore, "messages", id), {
                id: id,
                firstname: firstname,
                lastname: lastname,
                email: email,
                phone: phone,
                message: message,
                createdAt: new Date(),
            });

            toast.success('Message envoyé', {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });

            setFirstname("");
            setLastname("");
            setEmail("");
            setPhone("");
            setMessage("");

        } catch (e) {
            console.log(e);
            toast.error("une erreur s'est produite", {
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
        <Fragment>
            <Navbar />
                <Container>
                    <section class="experience pt-5 pb-5" id="experience">
                        <div class="container">
                            <div class="row">
                                <div class="col-xl-8 mx-auto text-center">
                                    <div class="section-title">
                                        <h4>Découvrir Déco Dar </h4>
                                        <p>Comment ça a commencé</p>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xl-12">
                                    <ul class="timeline-list">
                                        <li>
                                            <div class="timeline_content">
                                                <span>2018</span>
                                                <h4>Ouverture</h4>
                                                <p>Créer en 2018 est une exposition-vente où l’esprit d’ouverture est total et incarné avec passion.
Dardéco c’est aussi la création, les tendances et les nouvelles idées de décoration.
- Son objectif : l’exposition d’objets d’art, du design, de la nouveauté et du raffinement.
- Sa périodicité est annuelle.</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="timeline_content">
                                                <span>2007-2012</span>
                                                <h4>Junior Developer</h4>
                                                <p>We gather your business and products information. We then determine the direction of the project and understand your goals and we combine your ideas with ours for an amazing website.</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="timeline_content">
                                                <span>2012-2015</span>
                                                <h4>Senior Developer</h4>
                                                <p>We gather your business and products information. We then determine the direction of the project and understand your goals and we combine your ideas with ours for an amazing website.</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="timeline_content">
                                                <span>2015-2018</span>
                                                <h4>Project Manager</h4>
                                                <p>We gather your business and products information. We then determine the direction of the project and understand your goals and we combine your ideas with ours for an amazing website.</p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>

                    <form onSubmit={sendMessage} style={{
                            background: 'linear-gradient(295deg, rgba(218,29,42,1) 0%, rgba(110,21,27,1) 100%)'
                        }} className="p-4 text-white rounded-3 mb-5">
                        <Row>
                            <h1 className="mb-3">Contactez-nous</h1>
                            <Col sm='6'>
                                <label className="mb-2 text-bold">Nom *</label>
                                <input value={firstname} onChange={(e) => setFirstname(e.currentTarget.value)} type="text" className="form-control mb-3" placeholder="Entrer votre Nom" required />
                            </Col>
                            <Col sm='6'>
                                <label className="mb-2 text-bold">Prénom *</label>
                                <input value={lastname} onChange={(e) => setLastname(e.currentTarget.value)} type="text" className="form-control mb-3" placeholder="Entrer votre Prénom" required />
                            </Col>

                            <Col sm='6'>
                                <label className="mb-2 text-bold">Email *</label>
                                <input value={email} onChange={(e) => setEmail(e.currentTarget.value)} type="email" className="form-control mb-3" placeholder="Entrer votre Email" required />
                            </Col>
                            <Col sm='6'>
                                <label className="mb-2 text-bold">Téléphone *</label>
                                <input value={phone} onChange={(e) => setPhone(e.currentTarget.value)} type="tel" className="form-control mb-3" placeholder="Entrer votre Numèro de Téléphone" required />
                            </Col>

                            <Col sm={12}>
                                <label className="mb-2 text-bold">Message *</label>
                                <textarea  value={message} onChange={(e) => setMessage(e.currentTarget.value)} className="form-control" placeholder="Entrer votre Message" name="" id="" cols="30" rows="10" required></textarea>
                            </Col>
                        </Row>
                        <button type="submit" className="btn btn-outline-light w-100 mt-4 text-bold"><RiSendPlaneFill size={18} /> Envoyer</button>
                    </form>
                    
                    <h1 className="mb-3"><BsShopWindow className="mb-3" /> Notre Boutique</h1>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1597.9829824697201!2d10.979032392723282!3d36.77138393942581!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1302b5d1b8119cc3%3A0xb50de366f0ed95ff!2sdeco%20dar%20ziadia!5e0!3m2!1sen!2stn!4v1656509061023!5m2!1sen!2stn" width="100%" height="600" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>                </Container>
            <Footer />
        </Fragment>
    )
}

export default About 