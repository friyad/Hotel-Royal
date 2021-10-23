import React from 'react';
import useRooms from '../../Hooks/useRooms';

const Profile = () => {
    const [rooms, displayRooms, setRooms, setDisplayRooms] = useRooms()

    // console.log(rooms)
    return (
        <div>
            <h1 className="text-5xl text-center font-bold mt-10">This is Profile</h1>
        </div>
    );
};

export default Profile;