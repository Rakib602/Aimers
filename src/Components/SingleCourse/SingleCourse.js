import React, { useEffect, useState } from 'react';
import AllCourses from '../AllCourses/AllCourses';

const SingleCourse = () => {
    const [courses,setCourses] = useState([]);
    useEffect(()=>{
        fetch('./AllCourses.JSON')
        .then(res=>res.json())
        .then(data=>setCourses(data));

    },[])
    return (
        <div className="cardStyle">
            {
               courses.map(courses =><AllCourses
                key={courses.id}
                courses={courses}
               ></AllCourses>) 
            }
        </div>
    );
};

export default SingleCourse;