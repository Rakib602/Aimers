import React from 'react';
import './AllCourses.css'
import { Card, CardGroup} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const AllCourses = (props) => {
    const {name,instructor,img,enroll} = props.courses;
    return (
        <div >
           <CardGroup>
                <Card>
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

export default AllCourses;