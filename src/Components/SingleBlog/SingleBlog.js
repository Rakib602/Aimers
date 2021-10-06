import React, { useEffect, useState } from 'react';
import AllBlog from '../AllBlog/AllBlog';

const SingleBlog = () => {
    const[post,setPost] = useState([]);
    useEffect(()=>{
        fetch('./blog.JSON')
        .then(res=>res.json())
        .then(data=>setPost(data));
    },[])
    return (
        <div className="cardStyle">
            
            {
                post.map(post=> <AllBlog
                key={post.id}
                post={post}
                ></AllBlog>)
            }
        </div>
    );
};

export default SingleBlog;