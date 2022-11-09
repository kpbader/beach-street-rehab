import './footer.css';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';

function Footer () {

    return (
        <section id="footer">
        {/* <img /> */}
        <h2>Beach Street Rehab</h2> 
        <Nav id="footer-links">
            <Nav.Item>
                <Nav.Link>
                    <Link to="/beach-street-rehab" className="header-nav-tab">Home</Link>
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link>
                    <Link to="/treatment" className="header-nav-tab">Treatment</Link>
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link>
                    <Link to="/mission" className="header-nav-tab">Mission</Link>
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link>
                    <Link to="/about" className="header-nav-tab">About</Link>
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link>
                    <Link to="/insurance" className="header-nav-tab">Insurance</Link>
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link>
                    <Link to="/contact" className="header-nav-tab">Contact</Link>
                </Nav.Link>
            </Nav.Item>
        </Nav>
    </section>
    )

};

export default Footer;