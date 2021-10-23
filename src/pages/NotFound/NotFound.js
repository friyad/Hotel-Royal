import React from 'react';
import { Link } from 'react-router-dom';
import notFoundImage from '../../images/404_NotFound_Image.png'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const NotFound = () => {
    return (
        <div className="w-10/12 mx-auto flex flex-col items-center mt-10">
            <div className="w-5/12 mx-auto">
                <img width="100%" src={notFoundImage} alt="" />
            </div>
            <div className="text-center">
                <h1 className="text-5xl font-bold text-red-600">We could not found your page</h1>
                <p className="text-2xl leading-10 font-semibold">Please Back to the Home page and try again letter</p>
                <Link className="py-4 px-10 bg-gray-700 text-white rounded-md inline-block mt-4" to="/home" >
                    <ArrowBackIcon />
                    Back to Home
                </Link>
            </div>

        </div>
    );
};

export default NotFound;