import React, { useEffect, useState } from 'react';
import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row } from 'react-bootstrap';
import Course from '../Course/Course';

const Home = () => {

    const [courses, setCourses] = useState([])
    useEffect(() => {
        fetch('./courses.JSON')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])

    return (
        <div >

            <div className="top-part fs-1 text-center">
                <h1 >Passion for cooking</h1>
                <h4>Do you want to learn how to cook? Cooking Club will help you become a professional</h4>
            </div>
            {/* card */}
            <h1 className="my-5">Latest classes</h1>
            <div className="container">
                <Row xs={1} md={2} className="g-5 ">

                    {courses.slice(0, 4).map(course => <Course

                        course={course}></Course>

                    )

                    }
                </Row>
            </div>

        </div>
    );
};

export default Home;