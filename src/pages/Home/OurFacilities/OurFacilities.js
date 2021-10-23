import React from 'react';
import './OurFacilities.css'
import AssignmentIcon from '@mui/icons-material/Assignment';
import WifiIcon from '@mui/icons-material/Wifi';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import PoolIcon from '@mui/icons-material/Pool';
import LocalBarIcon from '@mui/icons-material/LocalBar';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import FastfoodIcon from '@mui/icons-material/Fastfood';

const OurFacilities = () => {
    return (
        <div className="bg-gray-100 pb-10 pt-16">
            <div className="sm:w-full w-10/12 mx-auto">
                <div className="flex items-center justify-center">
                    <AssignmentIcon className="col-span-1 self" style={{ fontSize: '60px' }} />
                    <h1 className="text-4xl font-bold col-span-2">OUR FACILITIES</h1>
                </div>
                <div className="grid sm:grid-cols-1 grid-cols-4 gap-4 gap-y-10 mt-10">
                    <div className="p-8 hover:shadow-xl transition shadow-md bg-white text-center facilities-style">
                        <WifiIcon className="icon" style={{ fontSize: '45px' }} />
                        <h2 className="text-2xl font-semibold">High Speed WiFi</h2>
                    </div>
                    <div className="p-8 hover:shadow-xl transition shadow-md bg-white text-center facilities-style">
                        <SportsEsportsIcon className="icon" style={{ fontSize: '45px' }} />
                        <h2 className="text-2xl font-semibold">Video Games</h2>
                    </div>
                    <div className="p-8 hover:shadow-xl transition shadow-md bg-white text-center facilities-style">
                        <PoolIcon className="icon" style={{ fontSize: '45px' }} />
                        <h2 className="text-2xl font-semibold">Swimming Pool</h2>
                    </div>
                    <div className="p-8 hover:shadow-xl transition shadow-md bg-white text-center facilities-style">
                        <LocalBarIcon className="icon" style={{ fontSize: '45px' }} />
                        <h2 className="text-2xl font-semibold">Drink Bar</h2>
                    </div>
                    <div className="p-8 hover:shadow-xl transition shadow-md bg-white text-center facilities-style">
                        <LibraryMusicIcon className="icon" style={{ fontSize: '45px' }} />
                        <h2 className="text-2xl font-semibold">Party Room</h2>
                    </div>
                    <div className="p-8 hover:shadow-xl transition shadow-md bg-white text-center facilities-style">
                        <FlightTakeoffIcon className="icon" style={{ fontSize: '45px' }} />
                        <h2 className="text-2xl font-semibold">Transport Facilities</h2>
                    </div>
                    <div className="p-8 hover:shadow-xl transition shadow-md bg-white text-center facilities-style">
                        <OndemandVideoIcon className="icon" style={{ fontSize: '45px' }} />
                        <h2 className="text-2xl font-semibold">Confarence Room</h2>
                    </div>
                    <div className="p-8 hover:shadow-xl transition shadow-md bg-white text-center facilities-style">
                        <FastfoodIcon className="icon" style={{ fontSize: '45px' }} />
                        <h2 className="text-2xl font-semibold">Restaurent Foods</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurFacilities;