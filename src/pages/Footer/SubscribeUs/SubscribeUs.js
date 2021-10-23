import React from 'react';
import Button from '@mui/material/Button';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

const SubscribeUs = () => {
    return (
        <div className="mx-auto w-10/12 text-center mt-28">
            <div className="flex justify-center items-center">
                <ExitToAppIcon style={{ fontSize: '45px' }} />
                <h1 className="text-4xl my-3 font-bold">SUBSCRIBE US</h1>
            </div>
            <div className="grid sm:grid-cols-1 grid-cols-12 gap-14 justify-center items-center">
                <div className="col-span-7 text-left sm:mx-auto sm:w-full">
                    <form action="" className="">
                        <input className="shadow-md mb-6 text-black sm:w-full w-7/12 p-3 border-2 border-gray-100 rounded-lg" type="name" placeholder="Type your name" required /><br />
                        <input className="shadow-md mb-6 text-black sm:w-full w-7/12 p-3 border-2 border-gray-100 rounded-lg" type="email" placeholder="Type your email" required /><br />
                        <Button type="submit" variant="contained" size="large" style={{ backgroundColor: '#374151' }}>Subscribe </Button>
                    </form>
                </div>
                <div className="col-span-5">
                    <img width="100%" src="https://i.ibb.co/pb7PCJC/subscribe-Us.webp" alt="" />
                </div>
            </div>
        </div>
    );
};

export default SubscribeUs;