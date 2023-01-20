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
                {/* <Nav.Item>
                    <Nav.Link>
                        <Link to="/beach-street-rehab/" className="footer-nav-tab" onClick={scrollToTop}>Addiction</Link>
                    </Nav.Link>
                </Nav.Item> */}
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
                        <Link to="/jobs" className="footer-nav-tab" onClick={scrollToTop}>Jobs Program</Link>
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link>
                        <Link to="/contact" className="footer-nav-tab" onClick={scrollToTop}>Contact</Link>
                    </Nav.Link>
                </Nav.Item>
            </Nav>

            {/* <Nav title="Addiction Programs">
                <Nav.Item>
                    <Nav.Link>
                        <Link to="/php" className="footer-nav-tab" onClick={scrollToTop}>PHP</Link>
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link>
                        <Link to="/iop" className="footer-nav-tab" onClick={scrollToTop}>IOP</Link>
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link>
                        <Link to="/op" className="footer-nav-tab" onClick={scrollToTop}>OP</Link>
                    </Nav.Link>
                </Nav.Item>
            </Nav>
            <Nav title="Mental Health Programs">
                <Nav.Item>
                    <Nav.Link>
                        <Link to="/php" className="footer-nav-tab" onClick={scrollToTop}>PHP</Link>
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link>
                        <Link to="/iop" className="footer-nav-tab" onClick={scrollToTop}>IOP</Link>
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link>
                        <Link to="/op" className="footer-nav-tab" onClick={scrollToTop}>OP</Link>
                    </Nav.Link>
                </Nav.Item>
            </Nav> */}
        </section>
    )

};

export default Footer;