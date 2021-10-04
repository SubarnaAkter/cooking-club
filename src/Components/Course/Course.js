import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Col,Button } from 'react-bootstrap';
import './Course.css';

const Course = (props) => {
    
    const {course,description,img,fee}=props.course;

    return (
        
            <Col className="course mt-5 ">
                <Card  className="shadow-lg p-5 " >
                    <Card.Img variant="top" className="w-100 thumb mx-auto"  src={img} />
                    <Card.Body>
                        <Card.Title className="text-center ">{course}</Card.Title>
                        <Card.Text>
                           {description}
                        </Card.Text>
                        <Card.Text>
                        <h5> Course Fee: ${fee}</h5>
                        </Card.Text>
                    </Card.Body>
                  
                    <Button variant="success">See Details</Button>
                </Card>
            </Col>
      
    );
    
};

export default Course;