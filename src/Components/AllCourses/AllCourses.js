import React, { useEffect, useState } from 'react';
import SingleCourse from '../SingleCourse/SingleCourse';
const AllCourses = () => {
    const [courses, setCourses] = useState([])

    useEffect(() => {
        fetch('./AllCourses.JSON')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    return (
            <div className="home-container">
                <div className="courses">
                    {
                        courses.map(course => <SingleCourse
                             key={course.name} 
                             course={course}>
                             </SingleCourse>)
                    }
                </div>
        </div>
    );
};

export default AllCourses;