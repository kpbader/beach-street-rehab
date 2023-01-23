import './home.css';
import beachVideo from '../../assets/video/beachStreetSplash.mp4';
import Fade from 'react-reveal/Fade';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { HiUserGroup } from "react-icons/hi";
import { FaHandHoldingHeart, FaBriefcaseMedical } from "react-icons/fa";
import BottomContact from '../Bottom-Contact/bottom-contact';
import { LazyLoadImage } from 'react-lazy-load-image-component';
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
import camille from "../../assets/images/camille-bismonte-3fgtuObWAvk-unsplash.jpg";


function Home() {

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <section id="home-page">
            <div id="home-splash">
                <video src={beachVideo} autoPlay muted loop playsInline className='video-bg' />
                <Fade up>
                    <div id="splash-text">
                        <h2>The road to recovery starts on Beach Street</h2>
                        <button id="cta-btn">
                            <Link to="/contact" onClick={scrollToTop}>Get started</Link>
                        </button>
                    </div>
                </Fade>
            </div>
            <div id="our-services">
                <Fade>
                    <div id="our-services-header">
                        <h2>What We Can Provide</h2>
                    </div>
                </Fade>
                <Fade up>
                    <div id="our-services-cards">
                        <Card>
                            <HiUserGroup className="service-icon" />
                            <Card.Body>
                                <Card.Text>
                                    Therapy and support groups for either addiction or mental health disorders
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card>
                            <FaHandHoldingHeart className="service-icon" />
                            <Card.Body>
                                <Card.Text>
                                    Compassionate staff that is dedicated to your success
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card>
                            <FaBriefcaseMedical className="service-icon" />
                            <Card.Body>
                                <Card.Text>
                                    Evidence-based practices that give you the best chance of recovery
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <button className="learn-more-btn">
                        <Link to="/mission" onClick={scrollToTop}>Learn More</Link>
                    </button>
                </Fade>
            </div>
            <div id="what-we-do">
                <Fade left>
                    <div id="wwd-text">
                        <h2>What We Do</h2>
                        <p> At Beach Street Rehab, we offer different levels of care based on each individuals' needs. Programs consist of a partial hospitalization program (PHP), intensive outpatient program (IOP), and outpatient program (OP).</p>
                        <p> You can be confident in our professional staff, as they will recommend the right level of care for you or loved one.</p>

                        <h2>Treatment</h2>
                        <p>All treatment clients will have a recovery/treatment plan developed within 30 days of admission. Measurement and reassessment of treatment plan progress happen on a weekly basis through the weekly summary.</p>
                        <p>In the weekly summary, the drug and alcohol counselor will ensure that action steps to be taken by client or counselor are on target and that the action step achievements will enable resolution of the objective. All treatment plans are reviewed by and signed off on by the clinical director.</p>
                        <button className="learn-more-btn-alt">
                            <Link to="/treatment" onClick={scrollToTop}>Learn More</Link>
                        </button>
                    </div>
                </Fade>
                <Fade right>
                    <LazyLoadImage src={camille} />
                </Fade>
            </div>
            <div id="break"></div>
            <div id="home-insurance-mini">
                <Fade>
                    <div id="home-insurance-toptext">
                        <h2>We Work With Major Insurance Groups</h2>
                        <p>If you don't see your insurance provider below, please reach out to us so we can assist you further</p>
                    </div>
                </Fade>
                <Fade up>
                    <div id="home-insurance-gallery">
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
                <Fade up>
                    <button className="learn-more-btn-alt">
                        <Link to="/insurance" onClick={scrollToTop}>Learn More</Link>
                    </button>
                </Fade>
            </div>
            <BottomContact />
        </section>
    )
};

export default Home;