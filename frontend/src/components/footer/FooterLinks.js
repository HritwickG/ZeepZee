import React from 'react';
import"./FooterLinks.scss"
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import logoImg from"../../assets/zeepzee.png"
import { Link, NavLink } from 'react-router-dom';
const FooterLinks = () =>{
    return(
        <>
            <section className="contact-section">
                <div className="container contact">
                    <div className="contact-icon">
                    <a href='https://www.facebook.com/profile.php?id=100077750316539&mibextid=JRoKGi'>
                        <FaFacebook className="i" /></a>
                        
                        <FaInstagram className="i"/>
                    </div>
                    <h2>Let's Talk</h2>
                    {/* <a href="registerc" className="btn btn-dark">Join Now</a> */}
                    <NavLink to={"registerc"} className="btn btn-dark">
                            Join Now
                            </NavLink>
                </div>
            </section>

            <section className="footer-section">
                
                <div className="container footer">
                    <div className="footer-logo">
                        <img src={logoImg} alt="logo" />
                    </div>
                    <div className="footer-menu">
                        <p className="link-heading">
                            Contact No : 6290489586
                        </p>
                        <p className="link-heading">
                            Mail Us : zeepzee.hritwick@gmail.com
                        </p>
                        {/* <ul className="nav-ul footer-links">
                            <li>
                                <a href="#home">Link Shortening</a>
                            </li>
                            <li>
                                <a href="#home">Branded Links</a>
                            </li>
                            <li>
                                <a href="#home">Analytics</a>
                            </li>
                            <li>
                                <a href="#home">Contact</a>
                            </li>
                        </ul> */}

                    </div>

                    
                    {/* <div className="footer-menu">
                        <p className="link-heading">
                            Resourses
                        </p>
                        <ul className="nav-ul footer-links">
                            <li>
                                <a href="#home">Link Shortening</a>
                            </li>
                            <li>
                                <a href="#home">Branded Links</a>
                            </li>
                            <li>
                                <a href="#home">Analytics</a>
                            </li>
                            <li>
                                <a href="#home">Contact</a>
                            </li>
                        </ul>

                    </div>
                
                    <div className="footer-menu">
                        <p className="link-heading">
                            Conpany
                        </p>
                        <ul className="nav-ul footer-links">
                            <li>
                                <a href="#home">Link Shortening</a>
                            </li>
                            <li>
                                <a href="#home">Branded Links</a>
                            </li>
                            <li>
                                <a href="#home">Analytics</a>
                            </li>
                            <li>
                                <a href="#home">Contact</a>
                            </li>
                        </ul>

                    </div>
                    
                    <div className="footer-menu">
                        <p className="link-heading">
                            Partners
                        </p>
                        <ul className="nav-ul footer-links">
                            <li>
                                <a href="#home">Link Shortening</a>
                            </li>
                            <li>
                                <a href="#home">Branded Links</a>
                            </li>
                            <li>
                                <a href="#home">Analytics</a>
                            </li>
                            <li>
                                <a href="#home">Contact</a>
                            </li>
                        </ul>

                    </div> */}

                </div>
            </section>
    
        </>
    )
}
export default FooterLinks



