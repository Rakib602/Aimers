import React from 'react';
import AboutPic from '../../images/computerModel1.jpg';
import MissionPic from '../../images/About-pic.jpg';
import { Col, Container, Row } from 'react-bootstrap';
const About = () => {
    return (
        <div className="container">
            <Container>
                    <Row className="p-5 align-items-center justify-content-center">
                        <Col xs={12} md={6} >
                        <h2>About Aimers</h2>
                         <p>
                            Aimers is where smart and enthusiastic worldwide people, who are lifelong learners, come to get the skills they need and to transform their lives as they want. We are a community of enthusiastic learners united in a shared objective of life transformation through self-learning.
                         </p>
                        </Col>
                        <Col xs={12} md={6} >
                             <img src={AboutPic} alt="" className="w-100" />
                        </Col>
                    </Row>
                </Container> 
                
                <Container>
                            <Row className="p-5 align-items-center justify-content-center " >
                                <Col xs={12} md={6}>
                                <img src={MissionPic} alt="" srcset="" className="w-100"/>
                                </Col>
                                <Col xs={12} md={6}>
                                <h3> Our Mission</h3>
                                <p>
                                    Our mission is to even up education through the offering of high-quality learning opportunities that are accessible, flexible, and affordable. Virtually anyone anywhere in worldwide with an internet connection and a determination of self-learning can come to AIMERS, master an array of skills, and start working to pursue his dreams.
                                </p>
                                </Col>
                            </Row>
            </Container>
        </div>
    );
};

export default About;