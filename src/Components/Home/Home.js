import React from 'react';
import Course from '../Course/Course';
import Header from '../Header/Header';
import SingleCourse from '../SingleCourse/SingleCourse';

const Home = () => {
    return (
        <div className="container">
           <Header></Header>
           <div>
               <Course></Course>
           </div>
           <div>
           </div>
        </div>
    );
};

export default Home;