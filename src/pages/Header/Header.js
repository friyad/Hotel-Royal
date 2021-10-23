import React from 'react';
import PrimarySearchAppBar from './PrimarySearchAppBar/PrimarySearchAppBar';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import Alert from '@mui/material/Alert';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import useAuth from '../../Hooks/useAuth';

const Header = () => {
    const { user } = useAuth()

    return (
        <div>
            <div className="bg-gray-800 text-white py-2">
                <div className="sm:w-full w-10/12 mx-auto sm:flex-col sm:items-center flex justify-between">
                    <p><CallIcon /> Call at: +880 1545-657484</p>
                    <p><EmailIcon /> E-mail: hotelroyal@gmail.com</p>
                </div>
            </div>
            <hr className="border-gray-400" />
            <PrimarySearchAppBar />
        </div >
    );
};

export default Header;