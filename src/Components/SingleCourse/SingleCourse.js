import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';

const SingleCourse = (props) => {
    const { name, img, instructor, enroll } = props.course;
    return (
        <div>
        <CardGroup>

            <Card className="card">
                <Card.Img className="img mx-auto" src={img} />
            <Card.Body>
                 <Card.Title> {name} </Card.Title>
                 <Card.Text>Instructor :{instructor}</Card.Text>
                     <Card.Text>Enroll Fee: ${enroll}</Card.Text>
            </Card.Body>
        <   Card.Footer>
                <button>Enroll Now</button>
            </Card.Footer>
    </Card>
    </CardGroup>
        </div>
    );
};

export default SingleCourse;