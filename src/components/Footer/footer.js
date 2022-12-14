import './footer.css';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import footerLogo from "../../assets/images/Beach Street Rehab-01-01-01.png";
import { LazyLoadImage } from 'react-lazy-load-image-component';

function Footer() {


    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <section id="footer">
            <LazyLoadImage src={footerLogo} alt="logo" />
            <Nav id="footer-links">
                <Nav.Item>
                    <Nav.Link>
                        <Link to="/beach-street-rehab/" className="footer-nav-tab" onClick={scrollToTop}>Home</Link>
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link>
                        <Link to="/mission" className="footer-nav-tab" onClick={scrollToTop}>Mission</Link>
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link>
                        <Link to="/about" className="footer-nav-tab" onClick={scrollToTop}>About</Link>
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link>
                        <Link to="/insurance" className="footer-nav-tab" onClick={scrollToTop}>Insurance</Link>
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link>
                        <Link to="/contact" className="footer-nav-tab" onClick={scrollToTop}>Contact</Link>
                    </Nav.Link>
                </Nav.Item>
            </Nav>
        </section>
    )

};

export default Footer;