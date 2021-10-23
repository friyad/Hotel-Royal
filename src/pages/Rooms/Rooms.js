import React from 'react';
import Room from './Room/Room';
import SearchIcon from '@mui/icons-material/Search';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import useRooms from '../../Hooks/useRooms';

const Rooms = () => {
    const [rooms, displayRooms, setRooms, setDisplayRooms] = useRooms()

    const handleSearch = e => {
        const matchRooms = rooms.filter(room => room.description.toLowerCase().includes(e.target.value.toLowerCase()));
        setDisplayRooms(matchRooms)
    }

    return (
        <div className="mt-16">
            <div className="sm:w-full w-10/12 mx-auto">
                <h1 className="text-4xl sm:text-2xl sm:pl-5 font-bold">OUR ROOMS WITH DETAILS</h1>
                <hr />

                <div className="mt-10 sm:w-10/12 w-7/12 mx-auto relative">
                    <SearchIcon
                        className="absolute top-0 p-2 rounded-full bg-gray-700 text-white"
                        style={{ fontSize: '52px' }} />
                    <input onChange={handleSearch} type="text" placeholder="Type your rooms name" className="w-full border-2 border-gray-700 rounded-full p-3 pl-14 " />
                </div>


                {displayRooms === null
                    ?
                    <Box className="mx-auto justify-center items-center mt-16" sx={{ display: 'flex' }}>
                        <CircularProgress />
                    </Box>
                    :
                    <div>
                        <h1>Total: {displayRooms.length} rooms found</h1>
                        {displayRooms.length === 0
                            ? <div className="sm:w-11/12 w-10/12 mx-auto flex justify-center items-center sm:mt-6 mt-20">
                                <img style={{ width: '550px' }} src="https://i.ibb.co/jR3J8zd/no-result.png" alt="" />
                            </div>
                            : <div className="grid sm:w-11/12 sm:mx-auto sm:grid-cols-1 grid-cols-3 mt-8 gap-10">
                                {displayRooms.map(room => <Room
                                    key={room.id}
                                    room={room}
                                />)}
                            </div>}
                    </div>
                }

            </div>
        </div >
    );
};

export default Rooms;