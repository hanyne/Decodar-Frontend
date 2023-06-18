import React from 'react';
import { Link } from 'react-router-dom';

// Bootstrap 4
import {Container} from 'react-bootstrap';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FaArrowLeft } from 'react-icons/fa';

const NotFound = () => {

  // Page title
    document.title = 'Page non trouvée - Decodar';

    return (
        <>
        <Navbar />
        <Container className="my-5">
            <div className='d-flex'>
                <div className='mx-auto bg-white border border-3 p-5 rounded-3 text-black'>
                    <h1 className='text-center fw-bolder' style={{fontSize: '7em'}}>4 0 4</h1>
                    <h2 className="fw-bold mb-5">Désolé ! Cette page n'est pas trouvée</h2>
                    <Link to={'/'} className="d-flex text-decoration-none">
                        <button className="btn btn-red btn-lg btn-block mx-auto"><FaArrowLeft /> Retour</button>
                    </Link>
                </div>
            </div>
        </Container>

        <Footer />
        </>
    );
};

export default NotFound;
