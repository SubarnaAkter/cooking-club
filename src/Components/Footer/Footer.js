import React from 'react';
import { FormControl, InputGroup, Button } from 'react-bootstrap';
import './Footer.css';
const Footer = () => {
    return (
        <div className="bg-dark text-white ">
            <div className="footer-container flex-sm-column flex-md-row d-flex justify-content-around pt-5 flex-wrap">
                <div className="footer-style">
                    <h3 className="title mb-5">Cooking Club</h3>
                    <p><i className="fas fa-home"></i> 419/7, Nurpur. Dhaka-1236 Bangladesh</p>
                    <p><i className="fas fa-phone-alt"></i> 01244543554</p>
                    <p><i className="fas fa-envelope"></i>  cookingclub1210@gmail.com</p>
                </div>
                <div className="footer-style">
                    <h5 className="mb-5">Our Account</h5>
                    <p>About us</p>
                    <p>Legal Notice</p>
                    <p>Addresses</p>
                    <p>Payment</p>
                </div>
                <div>
                    <h5 className="mb-5">Newsletter</h5>
                    <p className="my-4">Subscribe to our newsletter and get 10% off your first purchase</p>
                    <InputGroup className="mb-3 w-100">
                        <FormControl
                            placeholder="Enter your Email"
                            aria-label="Recipient's username"
                            aria-describedby="basic-addon2"
                        />
                        <Button variant="outline-secondary" id="button-addon2">
                        <i className="fas fa-location-arrow"></i>
                        </Button>
                    </InputGroup>
                </div>
            </div>
            <p className="text-center pb-5">&copy;Copyright 2021 Cooking Club. All right reserved</p>
        </div>
    );
};

export default Footer;