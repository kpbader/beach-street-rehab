import './navigation.css';
import { Link, useNavigate } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from "../../assets/images/Beach Street Rehab-01-01-01.png";
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

function Navigation() {

    // offcanvas
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const nav = useNavigate();


    return (
        <section id="nav-bar">
            <img src={logo} alt="logo" />
            <Nav id="main-nav-links">
                <Nav.Link>
                    <Link to="/beach-street-rehab/" className="header-nav-tab">Home</Link>
                </Nav.Link>
                <NavDropdown className="programs-dropdown" title="Programs ⌄">
                    <h4>Addiction</h4>
                    <NavDropdown.Item onClick={() => nav("/php")}>
                        Partial Hospitalization Program (PHP)
                    </NavDropdown.Item>
                    <NavDropdown.Item onClick={() => nav("/iop")}>
                        Intensive Outpatient Program (IOP)
                    </NavDropdown.Item>
                    <NavDropdown.Item onClick={() => nav("/op")}>
                        Outpatient Program (OP)
                    </NavDropdown.Item>
                    <h4>Mental Health</h4>
                    <NavDropdown.Item onClick={() => nav("/phpmh")}>
                        Partial Hospitalization Program (PHP)
                    </NavDropdown.Item>
                    <NavDropdown.Item onClick={() => nav("/iopmh")}>
                        Intensive Outpatient Program (IOP)
                    </NavDropdown.Item>
                    <NavDropdown.Item onClick={() => nav("/opmh")}>
                        Outpatient Program (OP)
                    </NavDropdown.Item>
                    <br className="breakline"/>
                    <NavDropdown.Item onClick={() => nav("/jobs")}>
                        Jobs
                    </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link>
                    <Link to="/treatment" className="header-nav-tab">Treatment</Link>
                </Nav.Link>
                <Nav.Link>
                    <Link to="/mission" className="header-nav-tab">Mission</Link>
                </Nav.Link>
                <Nav.Link>
                    <Link to="/about" className="header-nav-tab">About</Link>
                </Nav.Link>
                <Nav.Link>
                    <Link to="/insurance" className="header-nav-tab">Insurance</Link>
                </Nav.Link>
                <Nav.Link>
                    <Link to="/contact" className="header-nav-tab">Contact</Link>
                </Nav.Link>
            </Nav>


            <Button id="hamburger-btn" className="openbtn" onClick={handleShow}>
                ☰
            </Button>


            <Offcanvas placement="end" show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton />
                <Offcanvas.Body>
                    <section id="nav-tabs">
                        <ul className="tabpanel">

                            <Link to="/beach-street-rehab/" className="header-nav-tab" onClick={handleClose}>Home</Link>
                            <NavDropdown className="programs-dropdown" title="Programs ⌄">
                                <h5>Addiction</h5>
                                <NavDropdown.Item>
                                    <Link to="/php" onClick={handleClose} className="hamburger-dropdown-tab">Partial Hospitalization Program (PHP) </Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link to="/iop" onClick={handleClose} className="hamburger-dropdown-tab">Intensive Outpatient Program (IOP)</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link to="/op" onClick={handleClose} className="hamburger-dropdown-tab">Outpatient Program (OP)</Link>
                                </NavDropdown.Item>
                                <h5>Mental Health</h5>
                                <NavDropdown.Item>
                                    <Link to="/phpmh" onClick={handleClose} className="hamburger-dropdown-tab">Partial Hospitalization Program (PHP) </Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link to="/iopmh" onClick={handleClose} className="hamburger-dropdown-tab">Intensive Outpatient Program (IOP)</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link to="/opmh" onClick={handleClose} className="hamburger-dropdown-tab">Outpatient Program (OP)</Link>
                                </NavDropdown.Item>
                                <br />
                                <NavDropdown.Item>
                                    <Link to="/jobs" onClick={handleClose} className="hamburger-dropdown-tab">Jobs</Link>
                                </NavDropdown.Item>
                            </NavDropdown>
                            <Link to="/treatment" cl onClick={handleClose} className="header-nav-tab">Treatment</Link>
                            <Link to="/mission" className="header-nav-tab" onClick={handleClose}>Mission</Link>
                            <Link to="/about" className="header-nav-tab" onClick={handleClose}>About</Link>
                            <Link to="/insurance" className="header-nav-tab" onClick={handleClose}>Insurance</Link>
                            <Link to="/contact" className="header-nav-tab" onClick={handleClose}>Contact</Link>

                        </ul>
                    </section>

                </Offcanvas.Body>
            </Offcanvas >

        </section>

    )
};

export default Navigation;