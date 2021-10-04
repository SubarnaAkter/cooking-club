import React from 'react';
import { Form } from 'react-bootstrap';
import './Contact.css';
const Contact = () => {
    return (
        <div>
            <div className="about-top fs-1 text-center">
                <h1 >Contact</h1>

            </div>
            <div>
                <h5 className="style mt-5 pt-5">Drop a Line</h5>
                <h1 className="fs-1 fw-bold">Send Message</h1>

                <div>
                    <Form className="w-50 mx-auto my-5">
                        <Form.Group className="mb-3" controlId="Enter your Name" aria-required >

                            <Form.Control type="text" placeholder="Enter your Name" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="Enter your Name" >

                            <Form.Control type="email" placeholder="Enter your Email" aria-required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Control as="textarea" rows={3} placeholder="Write Somthing" />
                        </Form.Group>
                    </Form>
                    <button>Send message</button>
                </div>
            </div>
            <div>
                <img src="https://texpedia.org/wp-content/uploads/2016/04/texpedia/contact_us_banner1.jpg" alt="" width="50%" className="mt-5" />

                <div className="contact w-50 mx-auto p-5 m-5">
                    <div >
                        <h4>Visit us : 419/7,Dhaka-1236,Bangladesh</h4>
                        <p>Nurpur-dania</p>
                    </div>
                    <div>
                    <h4>Call us : 0112435435 or 0534544456</h4>
                        <p>You may call us everyday from 9 a.m. till 7 p.m</p>
                    </div>
                    <div>
                        <h4>Mail us :  cookingclub1210@gmail.com</h4>
                        <p>Is there any question you would like to ask us?</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;