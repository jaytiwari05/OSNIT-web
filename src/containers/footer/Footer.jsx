import React from 'react';

const Footer = () => {
    return (
        <footer className=" main-footer bg-dark text-light p-50 py-5 mt-845" style={{display: "flex", justifyContent: "space-evenly", alignItems: "center"}} >
            <div className="container-footer">
                <div className="row">
                    <div className="col-md-4 mb-4 footer">
                        <h4>Contact Us</h4>
                        <p>Email: info@example.com</p>
                        <p>Phone: +1 123 456 7890</p>
                    </div>
                    <div className="contact-us col-md-4 mb-4">
                        <h4>Follow Us</h4>
                        <ul className="list-unstyled">
                        <li>
                                <a href="#!">Facebook</a>
                            </li>
                            <li>
                                <a href="#!">Twitter</a>
                            </li>
                            <li>
                                <a href="#!">Instagram</a>
                            </li>
                        </ul>
                    </div>
                    <div className="about-us col-md-4 mb-4">
                        <h4>About Us</h4>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                            ac tristique justo.
                        </p>
                    </div>
                </div>
                <hr className="my-4 bg-light" />
                <p className="text-center mb-0">&copy; 2023 Your Website Name</p>
            </div>
        </footer>
    );
};

export default Footer;
