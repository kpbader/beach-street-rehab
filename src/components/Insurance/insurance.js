import './insurance.css';
import BottomContact from '../Bottom-Contact/bottom-contact';
import anthem from '../../assets/images/Anthem-Inc-logo.png';
import beacon from '../../assets/images/beacon-logo.png';
import blueCross from '../../assets/images/bluecross-blueshield-simple-modern-therapy-logo.png';
import cigna from '../../assets/images/Cigna_logo.svg.png';
import aetna from '../../assets/images/0f0564f1-d965-4e82-9580-862fa8032906.png';
import horizon from '../../assets/images/horizon-logo.webp';
import optima from '../../assets/images/optima-health-inc-health-care-health-insurance-png-favpng-dumtEeQ0mCtUM1MyRcuN2YYzZ.184bf2d78e72223187b6.webp';
import optum from '../../assets/images/4516741cOptum-logo-ora-RGB.0a00b0d8e89507e7fa53.webp';
import umr from '../../assets/images/umr-logo.3172cd220dd1fbc0e2fa.webp';
import united from '../../assets/images/United-Healthcare-Logo.png';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';

function Insurance() {

    return (
        <section id="insurance-page">
            <div id="insurance-top">
                <Fade up>
                    <div id="insurance-top-text">
                        <h2>Insurance</h2>
                        <p>If you don’t see your insurance provider below, please reach out to us to find a way to assist you further.</p>
                        <button id="insurance-contact-btn">
                            <Link to="/contact">Contact Us</Link>
                        </button>
                    </div>
                </Fade>
            </div>
            <Fade up>
                <div id="insurance-logos">
                    <LazyLoadImage src={aetna} alt="logo" />
                    <LazyLoadImage src={anthem} alt="logo" />
                    <LazyLoadImage src={beacon} alt="logo" />
                    <LazyLoadImage src={blueCross} alt="logo" />
                    <LazyLoadImage src={cigna} alt="logo" />
                    <LazyLoadImage src={horizon} alt="logo" />
                    <LazyLoadImage src={optima} alt="logo" />
                    <LazyLoadImage src={optum} alt="logo" />
                    <LazyLoadImage src={umr} alt="logo" />
                    <LazyLoadImage src={united} alt="logo" />
                </div>
            </Fade>
            <BottomContact />
        </section>
    )
};

export default Insurance;