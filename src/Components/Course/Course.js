import React, { useEffect, useState } from 'react';
import TopCourse from '../TopCourse/TopCourse';

const Course = () => {
    const [course,setCourse] = useState([]);
    useEffect(() => {
    fetch('./TopCourses.JSON')
    .then(res=>res.json())
    .then(data=>setCourse(data));
},[])
    return (
        <div className="card">
            <h3>Top Courses</h3>
            <div className="cardDesign">
            {
                course.map(course => <TopCourse
                key={course.id}
                course={course}
                ></TopCourse>)
            }
            </div>
          
        </div>
    );
};

export default Course;