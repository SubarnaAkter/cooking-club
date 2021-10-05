import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useHistory } from 'react-router';
const NotFound = () => {
    const history=useHistory();
    const handleBtn=()=>{
          history.push('/Home');
    }
    return (
        <div className="m-5 p-5" >
            <h3 className="text-danger">404! Not Found!</h3>

            <button onClick={handleBtn} className="btn-style mx-auto mt-5">Back to Home</button>
        </div>
    );
};

export default NotFound;