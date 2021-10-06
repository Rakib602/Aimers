import React from 'react';
import './AllBlog.css'
import { Card, CardGroup } from 'react-bootstrap';
const AllBlog = (props) => {
    const{Title,img,Post}= props.post;
    return (

        <div>
           <CardGroup>
                <Card>
                    <Card.Img className="mx-auto courseImg" src={img} />
                    <Card.Body>
                        <Card.Title> {Title} </Card.Title>
                        <Card.Text>{Post}</Card.Text>
                    </Card.Body>
                </Card>
            </CardGroup>
        </div>
    );
};

export default AllBlog;