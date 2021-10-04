import React from 'react';
import Footer from '../Footer/Footer';
import NavMenu from '../NavMenu/NavMenu';

const Error = () => {
    return (
        
        <div className="container">
             <NavMenu></NavMenu>
            <div className="error">
            <h1 className="p-5 text-danger">Cant found error 404 !!!</h1>
            </div>
          <Footer></Footer>
        </div>
        
    );
};

export default Error;