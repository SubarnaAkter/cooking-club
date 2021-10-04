import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import './cookingClasses.css';

const CookingClasses = () => {
    const [cookingClasses, setCookingClasses] = useState([]);
    useEffect(() => {
        fetch('./courses.JSON')
            .then(res => res.json())
            .then(data => setCookingClasses(data))
    }, []);

    return (
        <div>
            <h1>Choose your class</h1>
            <div className="container classes">
                <Row xs={1} md={3} className="g-4 ">
                    {
                        cookingClasses.map(cookingClass =>

                            <Col>
                                <Card className="shadow-lg">
                                    <Card.Img variant="top" className="thumb" src={cookingClass.img} />
                                    <Card.Body>
                                        <Card.Title>{cookingClass.course}</Card.Title>
                                        <Card.Text>
                                            Description: {cookingClass.description}
                                        </Card.Text>
                                        <Card.Title>Course fee:{cookingClass.fee}</Card.Title>
                                    </Card.Body>
                                    <Button className=" w-50 mx-auto mb-3">Learn more...</Button>
                                </Card>
                            </Col>
                        )

                    }


                </Row>
            </div>

        </div>
    );
};

export default CookingClasses;