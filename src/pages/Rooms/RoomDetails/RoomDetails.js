import React from 'react';
import Button from '@mui/material/Button';
import { useParams, useHistory } from 'react-router';
import useRooms from '../../../Hooks/useRooms';
import './RoomDetails.css';
import BedIcon from '@mui/icons-material/Bed';
import HotelIcon from '@mui/icons-material/Hotel';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const RoomDetails = () => {
    const { RoomID } = useParams()
    const [rooms, displayRooms, setRooms, setDisplayRooms] = useRooms()
    const history = useHistory()

    let detailsProduct = {};
    if (rooms.length > 0) {
        const matchRooms = rooms.find(room => room.id === JSON.parse(RoomID))
        detailsProduct = matchRooms;
    }

    const handleBack = () => {
        history.push('/rooms')
    }


    return (
        <div className="mt-20">
            <div className="w-10/12 sm:w-11/12 mx-auto grid sm:grid-cols-1 grid-cols-12 gap-10 justify-center">
                <div className="col-span-7 sm:border-0 border-r-8 px-4">
                    <h1 className="text-5xl sm:text-3xl font-bold ">{detailsProduct?.title}</h1>
                    <p className="my-6 text-xl">{detailsProduct?.description}</p>
                    <p className="text-lg">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis ut dolorum ipsa minima? Excepturi, perferendis dolorum! Non sequi, quis quaerat voluptas, tempore magni deleniti corporis vel ad nemo illo. Ab, rerum sequi in esse eius, sapiente magni commodi consectetur repudiandae obcaecati culpa quisquam distinctio pariatur inventore ratione id at quo soluta ut. Doloribus expedita nobis, molestias ducimus assumenda distinctio labore eius alias, est, facilis doloremque ea ex error quis aspernatur aliquam. Eligendi voluptates quae in animi maiores similique incidunt optio.</p>

                    <div className="mt-10 sm:mb-4 mb-80 grid sm:grid-cols-1 grid-cols-3 gap-7">
                        <div className="p-5 hover:shadow-xl transition shadow-md border-2 border-gray-200 bg-white text-center facilities-style">
                            <HotelIcon className="icon" style={{ fontSize: '45px' }} />
                            <h2 className="text-xl font-semibold">Bed Type: {detailsProduct?.bedType}</h2>
                        </div>
                        <div className="p-5 hover:shadow-xl transition shadow-md border-2 border-gray-200 bg-white text-center facilities-style">
                            <BedIcon className="icon" style={{ fontSize: '45px' }} />
                            <h2 className="text-xl font-semibold">Total Bed: {detailsProduct?.bed}</h2>
                        </div>
                        <div className="p-5 hover:shadow-xl transition shadow-md border-2 border-gray-200 bg-white text-center facilities-style">
                            <PeopleAltIcon className="icon" style={{ fontSize: '45px' }} />
                            <h2 className="text-xl font-semibold">People Capacity: {detailsProduct?.capacity}</h2>
                        </div>
                    </div>
                </div>


                <div className="col-span-5 sm:col-span-7">
                    <div>
                        <img className="w-full" src={detailsProduct?.imgUrl} alt="" />
                    </div>
                    <div className="flex justify-between items-center mt-4">
                        <h1 className="text-4xl font-bold">${detailsProduct?.price}</h1>
                        <Button onClick={handleBack} variant="contained" size="large"
                            style={{ backgroundColor: '#374151', padding: '.9em 2em' }}>
                            <ArrowBackIcon /> Back
                        </Button>
                        <Button variant="contained" size="large"
                            style={{ backgroundColor: '#374151', padding: '.9em 2em' }}>
                            Place Order </Button>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default RoomDetails;