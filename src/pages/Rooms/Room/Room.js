import React from 'react';
import Button from '@mui/material/Button';
import GroupIcon from '@mui/icons-material/Group';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import { useState } from 'react';
import { useHistory } from 'react-router';

const Room = ({ room }) => {
    const { bed, bedType, capacity, description, id, imgUrl, price, title } = room;
    const [linkButton, setLinkButton] = useState(false)
    const history = useHistory()

    const handleBookNowBtn = () => {
        history.push(`/roomDetails/${id}`)
    }

    return (
        <div className="border-2 rounded-lg shadow-md" style={{ height: "450px" }}>
            <div className="relative">
                <img
                    onMouseEnter={() => setLinkButton(!linkButton)}
                    className="rounded-t-lg w-full h-60" src={imgUrl} alt="" />
                {
                    linkButton &&
                    <div onMouseLeave={() => setLinkButton(!linkButton)} className="absolute text-white bg-opacity-70 top-0 w-full h-full bg-black flex justify-center items-center transition rounded-t-md">
                        <Button onClick={handleBookNowBtn} style={{ color: 'white', fontSize: '18px', width: '100%', height: '100%' }}>
                            <h2 className="">View Deatials to Booking</h2>
                        </Button>
                    </div>
                }
            </div>
            <div className="px-5">
                <h1 className="text-3xl font-bold my-4">{title}</h1>
                <p>{description}</p>
            </div>

            <div className="flex justify-between w-10/12 mx-auto mt-8" >
                <Button><GroupIcon /><p className="text-lg ml-1">{capacity}</p></Button>
                <Button><AttachMoneyIcon /><p className="text-lg ml-1">{price}</p></Button>
                <Button onClick={handleBookNowBtn} variant="contained" size="large" style={{ backgroundColor: '#374151' }}>Book Now </Button>
            </div>
        </div>
    );
};

export default Room;