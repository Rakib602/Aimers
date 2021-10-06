import React from 'react';
import './TopCourse.css'
import { Card, CardGroup, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const TopCourse = (props) => {
    const {name,instructor,img,enroll} = props.course;
    return (
        <div >
            <CardGroup >
                <Card >
                    <Card.Img className="mx-auto courseImg" src={img} />
                    <Card.Body>
                        <Card.Title> {name} </Card.Title>
                        <Card.Text>Instructor :{instructor}</Card.Text>
                        <Card.Text>Enroll Fee: ${enroll}</Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Link to = "/courses">
                        <button className="btn">Enroll Now</button>
                        </Link>
                        
                    </Card.Footer>
                </Card>
            </CardGroup>
        </div>
    );
};

export default TopCourse;