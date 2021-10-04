import React from 'react';
import { Accordion, Form } from 'react-bootstrap';
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
                    <button className="btn-style">Send message</button>
                </div>
            </div>
            {/*FAQ accordion */}
            <div className="shadow-lg pb-5 faq">
                <h1 className="fs-1 fw-bold mt-5 pt-5">FAQ</h1>
            <Accordion className="my-5 w-75 mx-auto">
  <Accordion.Item eventKey="0">
    <Accordion.Header>I’ve never taken a Participation cooking class before. What can I expect?</Accordion.Header>
    <Accordion.Body>
    In our Participation classes, our goal is to teach you the proper cooking techniques for a wide variety of foods and cuisines. Upon arrival you will be given an apron and recipe packet. The instructor will demonstrate how menu items should be prepared and then each team will use the provided ingredients to create the dish. You may eat some parts of the meal as you go along or all together once you’ve finished cooking. The instructor will be available throughout the class to answer questions and help you if needed.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1">
    <Accordion.Header>I need to cancel my registration. What options do I have?</Accordion.Header>
    <Accordion.Body>
    If it is prior to 3 days before the class starts, please call the school during business hours and we can help you obtain a school credit towards a future class or offer you a refund. We are unable to offer refunds or credits for a class registration that is canceled within 3 days of the class because our instructors have already purchased ingredients on your behalf. If you are unable to attend, you are welcome to send someone else in your place. Just notify the office so we can inform the instructor.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="2">
    <Accordion.Header>Can I bring my child or teen to class with me?</Accordion.Header>
    <Accordion.Body>
    Generally, our evening classes are designed for adults. We offer many classes especially for kids and teens as well as some parent and child classes. In our regular adult classes, every student must be at least 18 years old to attend and 21 to consume alcohol.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="3">
    <Accordion.Header>Do I need any previous cooking experience to enjoy the class?</Accordion.Header>
    <Accordion.Body>
    No previous experience is required! We encourage you to ask questions if there is something you don’t understand. There are no bad questions and our instructors are here to help so that you can replicate a recipe on your own at home.
    </Accordion.Body>
  </Accordion.Item>
</Accordion>
            </div>
            {/* FAQ end */}
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
                        <h4>Mail us : cookingclub1210@gmail.com</h4>
                        <p>Is there any question you would like to ask us?</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;