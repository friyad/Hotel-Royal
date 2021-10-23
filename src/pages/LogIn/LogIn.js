import React from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import { useHistory, useLocation, } from 'react-router';
import swal from 'sweetalert';

const LogIn = () => {
    const { user, error, setUserEmail, setUserPass, handleEmailPassLogIn } = useAuth()
    const history = useHistory()
    const location = useLocation()
    const redirect_url = location.state?.from || "/";

    const handleEmailInput = e => setUserEmail(e.target.value)
    const handlePassInput = e => setUserPass(e.target.value)


    const handleLoginRedirects = e => {
        e.preventDefault()
        handleEmailPassLogIn()
            .then(() => {
                swal({
                    title: "Log In Successfull!",
                    text: "Thanks for Log in at Hotel Royal!",
                    icon: "success",
                    button: "Ok",
                })
                history.push(redirect_url)
            })
    }

    const handleLogInSuccess = () => {

    }


    return (
        <div className="mt-24 mb-96">
            <div className="sm:w-11/12 w-3/12 bg-gray-700 mx-auto p-10 text-white rounded-md">
                <div>
                    <h1 className='text-3xl mb-2 font-bold'>Please Log In</h1>
                    <hr className="border-gray-400 mb-5" />
                    <form onSubmit={handleLoginRedirects} action="" method="get">
                        <p className="">E-mail: <span className="text-red-600">*</span> </p>
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
                            <p>New user? <Link className="text-blue-400 underline" to="registration">Registere now</Link> </p>
                            <p>{error}</p>
                        </div>
                        <div className="text-center mt-4">
                            <Button variant="contained"
                                size="large" type="submit"
                                style={{ backgroundColor: '#1f2937', }}
                                className="w-11/12"
                                onClick={handleLogInSuccess}
                            >Log In</Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LogIn;