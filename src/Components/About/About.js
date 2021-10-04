import React from 'react';
import { useState } from 'react';
import { Carousel, FormControl, InputGroup,Button } from 'react-bootstrap';
import './About.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';
const About = () => {
    const [index, setIndex] = useState(0);
    const [teams, setTeams] = useState([]);

    useEffect(() => {
        fetch('./team.JSON')
            .then(res => res.json())
            .then(data => setTeams(data))
    }, [])

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <div>
            {/* top-section */}
            <img className="mt-5 " src="http://www.ambrosiafood.in/wp-content/uploads/2016/07/o-HEALTHY-FOOD-facebook-867x341.jpg" alt="" />
            <hr />
            <div>

                <div className="d-flex flex-sm-wrap flex-md-nowrap container shadow px-4 mt-5">


                    <div className="w-50 p-3 text-start mb-5 ">
                        <h1 className="mt-5 fs-1 fw-bold">WelCome to Cooking Club</h1><br /><i className="fas fa-utensils mb-5 mx-auto"></i>
                        <p>The Eligibility criteria for becoming a chef is students have to clear 10+2 for Degree Courses like BA in Culinary Arts, Bachelor of Hotel Management (BHM), Bachelor of Catering Technology and Culinary Arts (BCTCA)..</p>

                        <a href=".." className="read-more">Read More...</a>
                    </div>
                    <img src="https://static5.depositphotos.com/1003434/514/i/600/depositphotos_5147838-stock-photo-attractive-smiling-cook.jpg" alt="" width="50%" />
                </div>

            </div>

            <h1 className="mt-5 fs-1 fw-bold " >Our Mission</h1>
            <br /><i className="fas fa-utensils mb-5"></i>
            <div className="d-flex flex-sm-wrap flex-md-nowrap container shadow p-0">
                <img src="https://onlinelibrary.wiley.com/pb-assets/20487177/Bioactive%20compounds-1615400802.jpg" alt="" width="50%" />

                <div className="w-50 p-3 text-start mb-5 ">
                    <h1 className="my-5 fs-1 fw-bold">Perfect Cooking Classes for You</h1>
                    <p>An annual MasterClass membership is the best way to learn cooking skills from some of the world’s best chefs. Each class—from the likes of Alice Waters, Gordon Ramsay and Dominique Ansel—consists of about a dozen or so pre-recorded videos that range from 10-30 minutes so you can learn at your own pace. Right now they’re offering a buy-one get-one deal on their annual all-access membership, which means you can take as many classes as you’d like over the next 365 days and give a membership to a friend or family member for free.</p>

                    <a href="/" className="read-more">Read More...</a>
                </div>
            </div>
            <div>
                <h5 className="style mt-5 pt-5">Professional Chefs</h5>
                <h1 className=" ">Our Professional Team</h1>
                <Carousel className="mt-5 border w-50 mx-auto" activeIndex={index} onSelect={handleSelect}>
                    {
                        teams.map(team => <Carousel.Item 
                            key={team.teamId}
                            interval={800} 
                        >

                            <img
                                className="d-block h-100 w-100"
                                src={team.img}
                                alt=".." height="100px" />
                            <Carousel.Caption className="members">
                                <h1 >{team.name}</h1>
                                <h3 >{team.status}</h3>
                            </Carousel.Caption>

                        </Carousel.Item>
                        )
                    }
                </Carousel>
            </div>
            <div className="container ">
                <h5 className="style mt-5 pt-5">Our Avantages</h5>
                <h1 className="mb-5 ">Why choose us</h1>
                <div className="d-flex   flex-sm-column flex-md-row">
                    <div className="text-start">
                        <div >
                            <h1>Better Learning</h1>
                            <p>Here we learn your properly and We will Enjoy it</p>
                        </div>
                        <div>
                            <h1>Guidelines</h1>
                            <p>Our Chefs trained you properly </p>
                        </div>
                        <div>
                            <h1>Professionalism</h1>
                            <p>We are more professional.And We are more Dedicated.</p>
                        </div>

                    </div>
                    <div>
                        <img className="about-img" src="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg" alt="" />
                    </div>
                    <div className="text-end">
                        <div>
                            <h1>Master chef </h1>
                            <p>
                                After Complete our course. We will become master chef
                            </p>
                        </div>
                        <div>
                            <h1>Online Education</h1>
                            <p>We give offline and also Online Based education</p>
                        </div>
                        <div>
                            <h1>Low Cost</h1>
                            <p>Course fees very low. And you will effort it</p>
                        </div>

                    </div>
                </div>
            </div>
            {/* subscribe */}
            <div className="mt-5 shadow-lg">
                <h1 className="mt-5 pt-5 style">Subscribe Now</h1>
                <p className="">Stay up-to-date with our new culinary recipes, news and cooking tips.</p>

                <InputGroup className="mb-3 py-5 w-50 mx-auto">
                    <FormControl
                        placeholder="Enter your Email"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                    />
                    <Button variant="outline-secondary" className=" fw-bold" id="button-addon2">
                        Subscribe
                    </Button>
                </InputGroup>
            </div>
        </div>
    );
};

export default About;