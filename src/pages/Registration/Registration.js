import React from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import { useHistory, useLocation, } from 'react-router';
import swal from 'sweetalert';

const Registration = () => {
    const { user, error, setUserEmail, setUserPass,
        setUserName, handleEmailPassRegistration,
        updateUserProfile, setUser, setError } = useAuth()

    const history = useHistory()
    const location = useLocation()
    const redirect_url = location.state?.from || "/";


    const handleNameInput = e => setUserName(e.target.value)
    const handleEmailInput = e => setUserEmail(e.target.value)
    const handlePassInput = e => setUserPass(e.target.value)


    const handleRegistrationRedirects = e => {
        e.preventDefault()
        handleEmailPassRegistration()
            .then(result => {
                setUser(result.user)
                updateUserProfile()
                setError('')
                swal({
                    title: "Registration Successfull!",
                    text: "Thanks for Registration in Hotel Royal!",
                    icon: "success",
                    button: "Ok",
                })
                history.push(redirect_url)
            })
            .catch(error => {
                setError(error.message)
            })
    }

    return (
        <div className="mt-24 mb-96">
            <div className="sm:w-11/12 w-3/12 bg-gray-700 mx-auto p-10 text-white rounded-md">
                <div>
                    <h1 className='text-2xl mb-2 font-bold'>Please Registere now</h1>
                    <hr className="border-gray-400 mb-5" />
                    <form onSubmit={handleRegistrationRedirects} action="" method="get">
                        <p>Name: <span className="text-red-600">*</span></p>
                        <div className="relative">
                            <AccountCircleIcon className="z-10 absolute top-0 text-gray-800 rounded-full" style={{ fontSize: '40px', }} />
                            <input onBlur={handleNameInput} className="w-full pl-12 p-2 text-black rounded-full" type="text" placeholder="Type your name" required />
                        </div>
                        <p className="mt-4">E-mail: <span className="text-red-600">*</span> </p>
                        <div className="relative">
                            <div className="p-2 bg-gray-800 z-10 flex justify-center items-center rounded-full absolute" style={{ width: '36px', height: '34px', marginTop: '3px', marginLeft: '3px' }}>
                                <EmailIcon className="text-white" />
                            </div>
                            <input onBlur={handleEmailInput} className="w-full pl-12 p-2 text-black rounded-full" type="email" placeholder="Type your email" required />
                        </div>
                        <p className="mt-4">Password: <span className="text-red-600">*</span></p>
                        <div className="relative">
                            <div className="p-2 bg-gray-800 z-10 flex justify-center items-center rounded-full absolute" style={{ width: '36px', height: '34px', marginTop: '3px', marginLeft: '3px' }}>
                                <LockIcon className="text-white" />
                            </div>
                            <input onBlur={handlePassInput} className="w-full pl-12 p-2 text-black rounded-full" type="password" placeholder="Type your password" required />
                        </div>
                        <div className="mt-4 text-center">
                            <p>Already have an account? <Link className="text-blue-400 underline" to="login">Log In</Link> </p>
                            <p>{error}</p>
                        </div>
                        <div className="text-center mt-4">
                            <Button variant="contained"
                                size="large" type="submit"
                                style={{ backgroundColor: '#1f2937', }}
                                className="w-11/12"
                            >Registere</Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Registration;